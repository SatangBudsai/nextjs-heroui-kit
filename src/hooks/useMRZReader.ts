import { useState, useCallback } from 'react';
import { createWorker, Worker } from 'tesseract.js';
import { MRZParser, MRZData } from '@/utils/mrz-parser';

export interface UseMRZReaderResult {
  isProcessing: boolean;
  mrzData: MRZData | null;
  error: string | null;
  progress: number;
  processImage: (imageFile: File) => Promise<MRZData | null>;
  reset: () => void;
}

export const useMRZReader = (): UseMRZReaderResult => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [mrzData, setMrzData] = useState<MRZData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const processImage = useCallback(async (imageFile: File): Promise<MRZData | null> => {
    if (!imageFile) {
      setError('ไม่พบไฟล์รูปภาพ');
      return null;
    }

    // Validate file type
    if (!imageFile.type.startsWith('image/')) {
      setError('ไฟล์ที่เลือกไม่ใช่รูปภาพ');
      return null;
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (imageFile.size > maxSize) {
      setError('ไฟล์รูปภาพใหญ่เกินไป (สูงสุด 10MB)');
      return null;
    }

    setIsProcessing(true);
    setError(null);
    setProgress(0);
    setMrzData(null);

    let worker: Worker | null = null;

    try {
      // Create Tesseract worker
      worker = await createWorker('eng', 1, {
        logger: (m: any) => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });

      // Configure Tesseract for better MRZ recognition
      await worker.setParameters({
        tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<',
        preserve_interword_spaces: '0',
      });

      // Process the image
      const { data: { text } } = await worker.recognize(imageFile);

      if (!text || text.trim().length === 0) {
        setError('ไม่สามารถอ่านข้อความจากรูปภาพได้');
        return null;
      }

      console.log('OCR Result:', text);

      // Extract MRZ lines from OCR text with improved detection
      const allLines = text.split('\n').map(line => line.trim());
      console.log('All OCR Lines:', allLines);
      
      const mrzLines = MRZParser.extractMRZLines(text);
      console.log('Extracted MRZ Lines:', mrzLines);
      
      // If we don't get enough lines, try to find them manually
      if (mrzLines.length === 1 && allLines.length > 1) {
        // Look for the first line pattern (P< followed by country code)
        const firstLinePattern = allLines.find(line => {
          const cleaned = line.replace(/[^A-Z0-9<]/g, '');
          return cleaned.startsWith('P<') && cleaned.length >= 40;
        });
        
        if (firstLinePattern) {
          const cleanedFirst = firstLinePattern.replace(/[^A-Z0-9<]/g, '');
          if (!mrzLines.includes(cleanedFirst)) {
            mrzLines.unshift(cleanedFirst);
          }
        }
      }
      
      console.log('Final MRZ Lines after manual detection:', mrzLines);
      
      if (mrzLines.length === 0) {
        setError('ไม่พบข้อมูล MRZ ในรูปภาพ กรุณาตรวจสอบว่ารูปภาพเป็น passport หรือบัตรประชาชนที่มี MRZ');
        return null;
      }

      // Parse MRZ data
      const parsedData = MRZParser.parse(mrzLines);

      if (!parsedData) {
        setError('ไม่สามารถแปลงข้อมูล MRZ ได้ กรุณาตรวจสอบคุณภาพของรูปภาพ');
        return null;
      }

      setMrzData(parsedData);
      setProgress(100);
      return parsedData;

    } catch (err) {
      console.error('MRZ processing error:', err);
      setError(err instanceof Error ? err.message : 'เกิดข้อผิดพลาดในการประมวลผลรูปภาพ');
      return null;
    } finally {
      if (worker) {
        await worker.terminate();
      }
      setIsProcessing(false);
    }
  }, []);

  const reset = useCallback(() => {
    setMrzData(null);
    setError(null);
    setProgress(0);
    setIsProcessing(false);
  }, []);

  return {
    isProcessing,
    mrzData,
    error,
    progress,
    processImage,
    reset,
  };
};