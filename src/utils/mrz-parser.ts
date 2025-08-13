export interface MRZData {
  documentType: string;
  issuingCountry: string;
  lastName: string;
  firstName: string;
  documentNumber: string;
  nationality: string;
  dateOfBirth: string;
  sex: string;
  expirationDate: string;
  personalNumber?: string;
  checkDigit1?: string;
  checkDigit2?: string;
  checkDigit3?: string;
  compositeCheckDigit?: string;
  raw: string[];
}

export class MRZParser {
  /**
   * Parse MRZ text lines into structured data
   * Supports TD1 (3 lines), TD2 (2 lines), and TD3 (2 lines) formats
   */
  static parse(mrzLines: string[]): MRZData | null {
    if (!mrzLines || mrzLines.length === 0) {
      return null;
    }

    // Clean and filter MRZ lines
    const cleanLines = mrzLines
      .map(line => line.replace(/[^A-Z0-9<]/g, '').trim())
      .filter(line => line.length > 0);

    if (cleanLines.length === 0) {
      return null;
    }

    // Try to parse different MRZ formats
    if (cleanLines.length >= 2) {
      // Try TD3 format (passport - 2 lines, 44 chars each)
      const td3Result = this.parseTD3(cleanLines);
      if (td3Result) return td3Result;

      // Try TD2 format (ID card - 2 lines, 36 chars each)
      const td2Result = this.parseTD2(cleanLines);
      if (td2Result) return td2Result;
    }

    if (cleanLines.length >= 3) {
      // Try TD1 format (ID card - 3 lines, 30 chars each)
      const td1Result = this.parseTD1(cleanLines);
      if (td1Result) return td1Result;
    }

    return null;
  }

  /**
   * Parse TD3 format (Passport)
   * Line 1: P<USADOE<<JOHN<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
   * Line 2: 1234567892USA8001014M2501014<<<<<<<<<<<<<<04
   */
  private static parseTD3(lines: string[]): MRZData | null {
    if (lines.length < 2) return null;

    const line1 = lines[0];
    const line2 = lines[1];

    // Basic validation for TD3
    if (line1.length < 44 || line2.length < 44) return null;
    if (!line1.startsWith('P<')) return null;

    try {
      // Parse line 1
      const documentType = line1.substring(0, 2);
      const issuingCountry = line1.substring(2, 5);
      const names = line1.substring(5, 44).split('<<');
      const lastName = names[0]?.replace(/</g, '') || '';
      const firstName = names[1]?.replace(/</g, '') || '';

      // Parse line 2
      const documentNumber = line2.substring(0, 9).replace(/</g, '');
      const checkDigit1 = line2.substring(9, 10);
      const nationality = line2.substring(10, 13);
      const dateOfBirth = line2.substring(13, 19);
      const checkDigit2 = line2.substring(19, 20);
      const sex = line2.substring(20, 21);
      const expirationDate = line2.substring(21, 27);
      const checkDigit3 = line2.substring(27, 28);
      const personalNumber = line2.substring(28, 42).replace(/</g, '');
      const compositeCheckDigit = line2.substring(43, 44);

      return {
        documentType,
        issuingCountry,
        lastName,
        firstName,
        documentNumber,
        nationality,
        dateOfBirth: this.formatDate(dateOfBirth),
        sex: this.formatSex(sex),
        expirationDate: this.formatDate(expirationDate),
        personalNumber,
        checkDigit1,
        checkDigit2,
        checkDigit3,
        compositeCheckDigit,
        raw: lines
      };
    } catch (error) {
      console.error('Error parsing TD3 MRZ:', error);
      return null;
    }
  }

  /**
   * Parse TD2 format (ID Card - 36 chars)
   */
  private static parseTD2(lines: string[]): MRZData | null {
    if (lines.length < 2) return null;

    const line1 = lines[0];
    const line2 = lines[1];

    if (line1.length < 36 || line2.length < 36) return null;

    try {
      // Parse line 1
      const documentType = line1.substring(0, 2);
      const issuingCountry = line1.substring(2, 5);
      const documentNumber = line1.substring(5, 14).replace(/</g, '');
      const checkDigit1 = line1.substring(14, 15);
      const personalNumber = line1.substring(15, 36).replace(/</g, '');

      // Parse line 2
      const dateOfBirth = line2.substring(0, 6);
      const checkDigit2 = line2.substring(6, 7);
      const sex = line2.substring(7, 8);
      const expirationDate = line2.substring(8, 14);
      const checkDigit3 = line2.substring(14, 15);
      const nationality = line2.substring(15, 18);
      const names = line2.substring(18, 36).split('<<');
      const lastName = names[0]?.replace(/</g, '') || '';
      const firstName = names[1]?.replace(/</g, '') || '';

      return {
        documentType,
        issuingCountry,
        lastName,
        firstName,
        documentNumber,
        nationality,
        dateOfBirth: this.formatDate(dateOfBirth),
        sex: this.formatSex(sex),
        expirationDate: this.formatDate(expirationDate),
        personalNumber,
        checkDigit1,
        checkDigit2,
        checkDigit3,
        raw: lines
      };
    } catch (error) {
      console.error('Error parsing TD2 MRZ:', error);
      return null;
    }
  }

  /**
   * Parse TD1 format (ID Card - 30 chars, 3 lines)
   */
  private static parseTD1(lines: string[]): MRZData | null {
    if (lines.length < 3) return null;

    const line1 = lines[0];
    const line2 = lines[1];
    const line3 = lines[2];

    if (line1.length < 30 || line2.length < 30 || line3.length < 30) return null;

    try {
      // Parse line 1
      const documentType = line1.substring(0, 2);
      const issuingCountry = line1.substring(2, 5);
      const documentNumber = line1.substring(5, 14).replace(/</g, '');
      const checkDigit1 = line1.substring(14, 15);
      const personalNumber = line1.substring(15, 30).replace(/</g, '');

      // Parse line 2
      const dateOfBirth = line2.substring(0, 6);
      const checkDigit2 = line2.substring(6, 7);
      const sex = line2.substring(7, 8);
      const expirationDate = line2.substring(8, 14);
      const checkDigit3 = line2.substring(14, 15);
      const nationality = line2.substring(15, 18);
      const compositeCheckDigit = line2.substring(29, 30);

      // Parse line 3
      const names = line3.substring(0, 30).split('<<');
      const lastName = names[0]?.replace(/</g, '') || '';
      const firstName = names[1]?.replace(/</g, '') || '';

      return {
        documentType,
        issuingCountry,
        lastName,
        firstName,
        documentNumber,
        nationality,
        dateOfBirth: this.formatDate(dateOfBirth),
        sex: this.formatSex(sex),
        expirationDate: this.formatDate(expirationDate),
        personalNumber,
        checkDigit1,
        checkDigit2,
        checkDigit3,
        compositeCheckDigit,
        raw: lines
      };
    } catch (error) {
      console.error('Error parsing TD1 MRZ:', error);
      return null;
    }
  }

  /**
   * Format date from YYMMDD to DD/MM/YYYY
   */
  private static formatDate(dateStr: string): string {
    if (!dateStr || dateStr.length !== 6) return dateStr;

    try {
      const year = parseInt(dateStr.substring(0, 2));
      const month = dateStr.substring(2, 4);
      const day = dateStr.substring(4, 6);

      // Assume years 00-30 are 2000-2030, 31-99 are 1931-1999
      const fullYear = year <= 30 ? 2000 + year : 1900 + year;

      return `${day}/${month}/${fullYear}`;
    } catch (error) {
      return dateStr;
    }
  }

  /**
   * Format sex code
   */
  private static formatSex(sex: string): string {
    switch (sex) {
      case 'M':
        return 'Male';
      case 'F':
        return 'Female';
      case 'X':
        return 'Unspecified';
      default:
        return sex;
    }
  }

  /**
   * Extract potential MRZ lines from OCR text
   */
  static extractMRZLines(ocrText: string): string[] {
    const lines = ocrText.split('\n');
    const mrzLines: string[] = [];

    for (const line of lines) {
      // Clean the line
      const cleanLine = line.replace(/[^A-Z0-9<\s]/g, '').trim();
      
      // Look for lines that might be MRZ (contain specific patterns)
      if (this.isMRZLine(cleanLine)) {
        mrzLines.push(cleanLine);
      }
    }

    return mrzLines;
  }

  /**
   * Check if a line looks like MRZ
   */
  private static isMRZLine(line: string): boolean {
    if (!line || line.length < 20) return false;

    // Remove spaces for analysis
    const noSpaces = line.replace(/\s/g, '');
    
    // MRZ lines typically:
    // - Are 30, 36, or 44 characters long
    // - Contain mostly uppercase letters, numbers, and < characters
    // - Have specific patterns like P< at the start or date-like sequences
    
    if ([30, 36, 44].includes(noSpaces.length)) {
      const hasCorrectChars = /^[A-Z0-9<]+$/.test(noSpaces);
      const hasDocumentPattern = /^[A-Z]{1,2}</.test(noSpaces);
      const hasDatePattern = /\d{6}/.test(noSpaces);
      const hasAngleBrackets = noSpaces.includes('<');
      
      return hasCorrectChars && (hasDocumentPattern || hasDatePattern || hasAngleBrackets);
    }

    return false;
  }
}
