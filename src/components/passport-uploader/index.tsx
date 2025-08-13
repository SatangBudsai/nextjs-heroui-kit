import React, { Fragment } from 'react';
import { Button, Card, CardBody, CardHeader, Progress, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import UploadSingleFile from '@/components/upload-singer-file';
import { useMRZReader } from '@/hooks/useMRZReader';
import { MRZData } from '@/utils/mrz-parser';

interface PassportUploaderProps {
  onMRZExtracted?: (mrzData: MRZData) => void;
}

const PassportUploader: React.FC<PassportUploaderProps> = ({ onMRZExtracted }) => {
  const { 
    isProcessing, 
    mrzData, 
    error, 
    progress, 
    processImage, 
    reset 
  } = useMRZReader();

  const handleFileAccepted = async (file: File) => {
    const result = await processImage(file);
    if (result && onMRZExtracted) {
      onMRZExtracted(result);
    }
  };

  const handleReset = () => {
    reset();
  };

  const formatDocumentType = (type: string): string => {
    switch (type) {
      case 'P<':
        return 'Passport';
      case 'I<':
        return 'ID Card';
      case 'C<':
        return 'Crew Member Certificate';
      case 'A<':
        return 'Alien Registration';
      default:
        return type;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Upload Section */}
      <Card>
        <CardHeader className="flex gap-3">
          <Icon icon="lucide:upload" className="text-2xl text-primary" />
          <div className="flex flex-col">
            <p className="text-md font-semibold">อัพโหลดรูป Passport</p>
            <p className="text-sm text-default-500">เลือกรูป passport เพื่ออ่านข้อมูล MRZ</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <UploadSingleFile
            onFileAccepted={handleFileAccepted}
            accept={{
              'image/*': ['.jpg', '.jpeg', '.png', '.bmp', '.gif', '.webp']
            }}
            disabled={isProcessing}
          />
          
          {/* Processing Progress */}
          {isProcessing && (
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:loader-2" className="h-4 w-4 animate-spin" />
                <span className="text-sm">กำลังประมวลผลรูปภาพ...</span>
              </div>
              <Progress 
                value={progress} 
                className="w-full"
                color="primary"
                showValueLabel={true}
              />
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-danger-50 border border-danger-200 rounded-lg">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:alert-circle" className="h-4 w-4 text-danger" />
                <span className="text-sm text-danger">{error}</span>
              </div>
            </div>
          )}
        </CardBody>
      </Card>

      {/* MRZ Data Display */}
      {mrzData && (
        <Card>
          <CardHeader className="flex gap-3">
            <Icon icon="lucide:file-text" className="text-2xl text-success" />
            <div className="flex flex-col">
              <p className="text-md font-semibold">ข้อมูล MRZ ที่อ่านได้</p>
              <p className="text-sm text-default-500">ข้อมูลที่แยกจากรูป passport</p>
            </div>
            <div className="ml-auto">
              <Button
                size="sm"
                variant="bordered"
                onPress={handleReset}
                startContent={<Icon icon="lucide:refresh-cw" className="h-4 w-4" />}
              >
                รีเซ็ต
              </Button>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="space-y-4">
              {/* Document Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">ประเภทเอกสาร</p>
                  <p className="text-sm bg-default-100 p-2 rounded">
                    {formatDocumentType(mrzData.documentType)}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">ประเทศที่ออกเอกสาร</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.issuingCountry}</p>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">นามสกุล</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.lastName}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">ชื่อ</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.firstName}</p>
                </div>
              </div>

              {/* Document Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">หมายเลขเอกสาร</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.documentNumber}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">สัญชาติ</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.nationality}</p>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">วันเกิด</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.dateOfBirth}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">เพศ</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.sex}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">วันหมดอายุ</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.expirationDate}</p>
                </div>
              </div>

              {/* Additional Information */}
              {mrzData.personalNumber && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-default-700">หมายเลขส่วนบุคคล</p>
                  <p className="text-sm bg-default-100 p-2 rounded">{mrzData.personalNumber}</p>
                </div>
              )}

              {/* Raw MRZ Data */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-default-700">ข้อมูล MRZ ดิบ</p>
                <div className="bg-default-100 p-3 rounded font-mono text-xs space-y-1">
                  {mrzData.raw.map((line, index) => (
                    <div key={index} className="break-all">{line}</div>
                  ))}
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default PassportUploader;
