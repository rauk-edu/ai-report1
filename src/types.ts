export interface TableCell {
  id: string;
  text: string;
  rowSpan?: number;
  colSpan?: number;
  align?: 'left' | 'center' | 'right';
  isTh?: boolean;
  isHeader?: boolean;
  isEditable?: boolean;
}

export interface TableRow {
  id: string;
  cells: TableCell[];
  isHeaderRow?: boolean;
}

export interface SectionData {
  id: string;
  part: 'A' | 'B';
  sectionNumber: string;
  title: string;
  englishTitle: string;
  category: string;
  englishCategory: string;
  iconName: string;
  rawTableHtml: string;
  rows: TableRow[];
  summaryNote?: string;
}

export interface SchoolMetadata {
  schoolName: string;
  cluster: string;
  district: string;
  province: string;
  academicYear: string;
  principalName: string;
  principalRole?: string;
  secretaryName?: string;
  reportDate: string;
  lunarDate?: string;
  solarDate?: string;
  preparedBy: string;
  preparerTitle?: string;
  preparerLunarDate?: string;
  preparerSolarDate?: string;
  approvalTitle?: string;
  approvalLunarDate?: string;
  approvalSolarDate?: string;
}

export interface StaffMember {
  id: string;
  no: string;
  name: string;
  gender: 'ស' | 'ប';
  framework: string;
  educationLevel: string;
  roleOrGrade: string;
  studentTotal?: string;
  studentFemale?: string;
  shiftMorning?: boolean;
  shiftAfternoon?: boolean;
  notes?: string;
  type: 'admin' | 'primary' | 'kindergarten' | 'specialist';
}

export interface StaffNominalData {
  title: string;
  subtitle: string;
  semester: string;
  academicYear: string;
  adminStaff: StaffMember[];
  teachingStaff: StaffMember[];
  summaryNotes: {
    totalStaff: number;
    femaleStaff: number;
    primaryTeachers: number;
    femalePrimaryTeachers: number;
    kindergartenTeachers: number;
    femaleKindergartenTeachers: number;
    adminStaffCount: number;
    femaleAdminStaffCount: number;
  };
}

export type ViewMode = 'official' | 'interactive' | 'print' | 'raw';
export type ActivePart = 'B' | 'A' | 'ALL' | 'STAFF';
