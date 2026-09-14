import { StaffMember, StaffNominalData } from './types';

export const INITIAL_STAFF_DATA: StaffNominalData = {
  title: "បញ្ជីរាយនាមបុគ្គលិកឆមាសទី១ ឆ្នាំសិក្សា ២០២៥_២០២៦",
  subtitle: "(៣ដង ៖ បវេសនកាល, ឆមាសទី១ និង ដាច់ឆ្នាំ)",
  semester: "ឆមាសទី១",
  academicYear: "២០២៥_២០២៦",
  adminStaff: [
    {
      id: "s_1",
      no: "1",
      name: "សុខ ណារ៉េន",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ថ្នាក់ទី១២",
      roleOrGrade: "នាយិកាសាលា",
      notes: "089 663 966",
      type: "admin"
    },
    {
      id: "s_2",
      no: "2",
      name: "យ៉េន ណារី",
      gender: "ប",
      framework: "គ្រូបឋម",
      educationLevel: "ថ្នាក់ទី១២",
      roleOrGrade: "នាយករង",
      notes: "086 246 698",
      type: "admin"
    },
    {
      id: "s_3",
      no: "3",
      name: "អ៊ុន ប៊ុនទុង",
      gender: "ប",
      framework: "គ្រូបឋម",
      educationLevel: "ស.បរិញ្ញាបត្រ",
      roleOrGrade: "លេខាធិការ",
      notes: "092 272 005",
      type: "admin"
    }
  ],
  teachingStaff: [
    {
      id: "s_4",
      no: "4",
      name: "រ៉ែម សុភក្តិ",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.ទុតិយភូមិ",
      roleOrGrade: "1A",
      studentTotal: "31",
      studentFemale: "15",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "088 343 5566",
      type: "primary"
    },
    {
      id: "s_5",
      no: "5",
      name: "ឡាង ម៉ារ៉ាមៀ",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.បរិញ្ញាបត្រ",
      roleOrGrade: "5A",
      studentTotal: "25",
      studentFemale: "12",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "097 685 8898",
      type: "primary"
    },
    {
      id: "s_6",
      no: "6",
      name: "ថោង ស្រីពេជ្រ",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.ទុតិយភូមិ",
      roleOrGrade: "2A",
      studentTotal: "22",
      studentFemale: "11",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "088 930 4103",
      type: "primary"
    },
    {
      id: "s_7",
      no: "7",
      name: "លេង ចាន់ណាវ",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.ទុតិយភូមិ",
      roleOrGrade: "2B",
      studentTotal: "22",
      studentFemale: "10",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "088 466 1856",
      type: "primary"
    },
    {
      id: "s_8",
      no: "8",
      name: "អេង ផល្លែន",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.បរិញ្ញាបត្រ",
      roleOrGrade: "3B",
      studentTotal: "20",
      studentFemale: "10",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "092 620 771",
      type: "primary"
    },
    {
      id: "s_9",
      no: "9",
      name: "ប៊ូ ពិសី",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.ទុតិយភូមិ",
      roleOrGrade: "3A",
      studentTotal: "20",
      studentFemale: "11",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "097 933 9499",
      type: "primary"
    },
    {
      id: "s_10",
      no: "10",
      name: "ថេន សាវ៉ា",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.បរិញ្ញាបត្រ",
      roleOrGrade: "4A",
      studentTotal: "25",
      studentFemale: "11",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "097 461 1580",
      type: "primary"
    },
    {
      id: "s_11",
      no: "11",
      name: "អឿន សុខៀប",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.បរិញ្ញាបត្រ",
      roleOrGrade: "4B",
      studentTotal: "24",
      studentFemale: "11",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "097 707 5979",
      type: "primary"
    },
    {
      id: "s_12",
      no: "12",
      name: "យ៉ម សម្បស្ស",
      gender: "ប",
      framework: "គ្រូបឋម",
      educationLevel: "ស.ទុតិយភូមិ",
      roleOrGrade: "5B",
      studentTotal: "25",
      studentFemale: "12",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "031 423 4466",
      type: "primary"
    },
    {
      id: "s_13",
      no: "13",
      name: "ឈួត សេរីរូម",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.បរិញ្ញាបត្រ",
      roleOrGrade: "6A",
      studentTotal: "35",
      studentFemale: "17",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "097 670 0999",
      type: "primary"
    },
    {
      id: "s_14",
      no: "14",
      name: "កែវ ខន",
      gender: "ប",
      framework: "គ្រូបឋម",
      educationLevel: "ថ្នាក់ទី១២",
      roleOrGrade: "កសិកម្ម",
      studentTotal: "",
      studentFemale: "",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "090 887 118",
      type: "specialist"
    },
    {
      id: "s_15",
      no: "15",
      name: "លន់ ចាន់នឹក",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.ទុតិយភូមិ",
      roleOrGrade: "បណ្ណារក្ស",
      studentTotal: "",
      studentFemale: "",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "097 242 4423",
      type: "specialist"
    },
    {
      id: "s_16",
      no: "16",
      name: "បាន ណាវ៉ា",
      gender: "ស",
      framework: "គ្រូមត្តេយ្យ",
      educationLevel: "ស.បរិញ្ញាបត្រ",
      roleOrGrade: "ម.កខ្ពស់",
      studentTotal: "35",
      studentFemale: "20",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "0978 680 864",
      type: "kindergarten"
    },
    {
      id: "s_17",
      no: "17",
      name: "ឡុក ម៉ាក់តី",
      gender: "ស",
      framework: "គ្រូបឋម",
      educationLevel: "ស.ទុតិយភូមិ",
      roleOrGrade: "ម.តចម្រុះ",
      studentTotal: "40",
      studentFemale: "25",
      shiftMorning: true,
      shiftAfternoon: false,
      notes: "0886 534 343",
      type: "kindergarten"
    }
  ],
  summaryNotes: {
    totalStaff: 17,
    femaleStaff: 13,
    primaryTeachers: 10,
    femalePrimaryTeachers: 9,
    kindergartenTeachers: 2,
    femaleKindergartenTeachers: 2,
    adminStaffCount: 3,
    femaleAdminStaffCount: 1
  }
};

export function calculateStaffSummary(adminStaff: StaffMember[], teachingStaff: StaffMember[]) {
  const allStaff = [...adminStaff, ...teachingStaff];
  const totalStaff = allStaff.length;
  const femaleStaff = allStaff.filter(s => s.gender === 'ស').length;

  // Primary class teachers (those in charge of classes 1A..6A)
  const primaryClassTeachers = teachingStaff.filter(s => s.type === 'primary');
  const primaryTeachers = primaryClassTeachers.length;
  const femalePrimaryTeachers = primaryClassTeachers.filter(s => s.gender === 'ស').length;

  const kindergartenTeachersList = teachingStaff.filter(s => s.type === 'kindergarten');
  const kindergartenTeachers = kindergartenTeachersList.length;
  const femaleKindergartenTeachers = kindergartenTeachersList.filter(s => s.gender === 'ស').length;

  const adminStaffCount = adminStaff.length;
  const femaleAdminStaffCount = adminStaff.filter(s => s.gender === 'ស').length;

  return {
    totalStaff,
    femaleStaff,
    primaryTeachers,
    femalePrimaryTeachers,
    kindergartenTeachers,
    femaleKindergartenTeachers,
    adminStaffCount,
    femaleAdminStaffCount
  };
}
