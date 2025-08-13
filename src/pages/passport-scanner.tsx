import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import PassportUploader from '@/components/passport-uploader';
import { MRZData } from '@/utils/mrz-parser';

const PassportScannerPage: React.FC = () => {
  const [extractedData, setExtractedData] = useState<MRZData | null>(null);

  const handleMRZExtracted = (mrzData: MRZData) => {
    setExtractedData(mrzData);
    console.log('MRZ Data extracted:', mrzData);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Passport MRZ Scanner</h1>
          <p className="text-default-500">อัพโหลดรูป passport เพื่ออ่านข้อมูล MRZ อัตโนมัติ</p>
        </div>

        {/* Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <Icon icon="lucide:info" className="text-2xl text-primary" />
            <div className="ml-3">
              <p className="text-md font-semibold">วิธีใช้งาน</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-2 text-sm">
              <p>• เลือกไฟล์รูป passport ที่มี MRZ (Machine Readable Zone) ที่ด้านล่างของหน้า</p>
              <p>• รองรับไฟล์รูปภาพ: JPG, PNG, BMP, GIF, WebP</p>
              <p>• ขนาดไฟล์สูงสุด 10MB</p>
              <p>• ควรถ่ายรูปให้ชัด โดยเฉพาะบริเวณ MRZ (ข้อความที่ด้านล่าง)</p>
              <p>• รองรับ passport หรือบัตรประชาชนที่มี MRZ</p>
            </div>
          </CardBody>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <div>
            <PassportUploader onMRZExtracted={handleMRZExtracted} />
          </div>

          {/* Result Section */}
          <div>
            {extractedData ? (
              <Card>
                <CardHeader>
                  <Icon icon="lucide:check-circle" className="text-2xl text-success" />
                  <div className="ml-3">
                    <p className="text-md font-semibold">ผลลัพธ์การสแกน</p>
                    <p className="text-sm text-default-500">ข้อมูลที่ได้จากการอ่าน MRZ</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="space-y-4">
                    <div className="p-4 bg-success-50 border border-success-200 rounded-lg">
                      <h3 className="font-semibold text-success-800 mb-2">ข้อมูลส่วนตัว</h3>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-medium">ชื่อ:</span> {extractedData.firstName}</p>
                        <p><span className="font-medium">นามสกุล:</span> {extractedData.lastName}</p>
                        <p><span className="font-medium">วันเกิด:</span> {extractedData.dateOfBirth}</p>
                        <p><span className="font-medium">เพศ:</span> {extractedData.sex}</p>
                        <p><span className="font-medium">สัญชาติ:</span> {extractedData.nationality}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
                      <h3 className="font-semibold text-primary-800 mb-2">ข้อมูลเอกสาร</h3>
                      <div className="space-y-1 text-sm">
                        <p><span className="font-medium">หมายเลขเอกสาร:</span> {extractedData.documentNumber}</p>
                        <p><span className="font-medium">ประเทศที่ออกเอกสาร:</span> {extractedData.issuingCountry}</p>
                        <p><span className="font-medium">วันหมดอายุ:</span> {extractedData.expirationDate}</p>
                      </div>
                    </div>

                    {extractedData.personalNumber && (
                      <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
                        <h3 className="font-semibold text-warning-800 mb-2">ข้อมูลเพิ่มเติม</h3>
                        <div className="space-y-1 text-sm">
                          <p><span className="font-medium">หมายเลขส่วนบุคคล:</span> {extractedData.personalNumber}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>
            ) : (
              <Card>
                <CardBody className="text-center py-12">
                  <Icon icon="lucide:scan" className="text-6xl text-default-300 mx-auto mb-4" />
                  <p className="text-default-500">อัพโหลดรูป passport เพื่อเริ่มสแกน MRZ</p>
                </CardBody>
              </Card>
            )}
          </div>
        </div>

        {/* Technical Info */}
        <Card className="mt-8">
          <CardHeader>
            <Icon icon="lucide:cpu" className="text-2xl text-secondary" />
            <div className="ml-3">
              <p className="text-md font-semibold">ข้อมูลทางเทคนิค</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">MRZ (Machine Readable Zone)</h4>
                <p className="text-default-600">
                  เป็นข้อมูลที่อยู่ด้านล่างของ passport หรือบัตรประชาชนในรูปแบบที่เครื่องอ่านได้ 
                  ประกอบด้วยตัวอักษรภาษาอังกฤษ ตัวเลข และสัญลักษณ์ &lt;
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">เทคโนโลยีที่ใช้</h4>
                <p className="text-default-600">
                  ใช้ Tesseract.js สำหรับ OCR (Optical Character Recognition) 
                  เพื่อแปลงรูปภาพเป็นข้อความ และ parser ที่กำหนดเองเพื่อแยกข้อมูล MRZ
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PassportScannerPage;
