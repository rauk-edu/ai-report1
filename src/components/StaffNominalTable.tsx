import React, { useState } from 'react';
import { SchoolMetadata, StaffMember, StaffNominalData } from '../types';
import { formatNumberWithOption } from '../utils/khmerNumerals';
import { Plus, Trash2, Edit2, Check, UserCheck, Phone, CheckSquare } from 'lucide-react';

interface Props {
  data: StaffNominalData;
  metadata: SchoolMetadata;
  useKhmerNumerals: boolean;
  onUpdateData: (newData: StaffNominalData) => void;
  isPrintMode?: boolean;
}

export const StaffNominalTable: React.FC<Props> = ({
  data,
  metadata,
  useKhmerNumerals,
  onUpdateData,
  isPrintMode = false,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const districtName = metadata.district.replace(/^ស្រុក\s*/, '');
  const schoolOnlyName = metadata.schoolName.replace(/^សាលាបឋមសិក្សា[៖\s]*/, '');

  // Calculate Primary subtotal
  const primaryTeachers = data.teachingStaff.filter(
    (s) => s.type === 'primary' || s.type === 'specialist'
  );
  const primaryStudentTotal = primaryTeachers.reduce(
    (sum, s) => sum + (parseInt(s.studentTotal || '0', 10) || 0),
    0
  );
  const primaryStudentFemale = primaryTeachers.reduce(
    (sum, s) => sum + (parseInt(s.studentFemale || '0', 10) || 0),
    0
  );

  // Calculate Grand total
  const grandStudentTotal = data.teachingStaff.reduce(
    (sum, s) => sum + (parseInt(s.studentTotal || '0', 10) || 0),
    0
  );
  const grandStudentFemale = data.teachingStaff.reduce(
    (sum, s) => sum + (parseInt(s.studentFemale || '0', 10) || 0),
    0
  );

  // Calculate summary stats
  const totalStaffCount = data.adminStaff.length + data.teachingStaff.length;
  const femaleStaffCount =
    data.adminStaff.filter((s) => s.gender === 'ស').length +
    data.teachingStaff.filter((s) => s.gender === 'ស').length;

  const primaryClassStaff = data.teachingStaff.filter((s) => s.type === 'primary');
  const primaryTeachersCount = primaryClassStaff.length;
  const femalePrimaryTeachersCount = primaryClassStaff.filter((s) => s.gender === 'ស').length;

  const kndStaff = data.teachingStaff.filter((s) => s.type === 'kindergarten');
  const kndCount = kndStaff.length;
  const femaleKndCount = kndStaff.filter((s) => s.gender === 'ស').length;

  const adminCount = data.adminStaff.length;
  const femaleAdminCount = data.adminStaff.filter((s) => s.gender === 'ស').length;

  // Handlers
  const handleUpdateAdminStaff = (index: number, field: keyof StaffMember, value: any) => {
    const updated = [...data.adminStaff];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateData({ ...data, adminStaff: updated });
  };

  const handleUpdateTeachingStaff = (index: number, field: keyof StaffMember, value: any) => {
    const updated = [...data.teachingStaff];
    updated[index] = { ...updated[index], [field]: value };
    onUpdateData({ ...data, teachingStaff: updated });
  };

  const handleAddAdminStaff = () => {
    const newStaff: StaffMember = {
      id: `admin_${Date.now()}`,
      no: String(data.adminStaff.length + 1),
      name: '',
      gender: 'ស',
      framework: 'គ្រូបឋម',
      educationLevel: 'ស.បរិញ្ញាបត្រ',
      roleOrGrade: 'មន្ត្រី',
      notes: '',
      type: 'admin',
    };
    onUpdateData({ ...data, adminStaff: [...data.adminStaff, newStaff] });
  };

  const handleAddTeachingStaff = (type: 'primary' | 'kindergarten' | 'specialist') => {
    const nextNo = data.adminStaff.length + data.teachingStaff.length + 1;
    const newStaff: StaffMember = {
      id: `teach_${Date.now()}`,
      no: String(nextNo),
      name: '',
      gender: 'ស',
      framework: type === 'kindergarten' ? 'គ្រូមត្តេយ្យ' : 'គ្រូបឋម',
      educationLevel: 'ស.បរិញ្ញាបត្រ',
      roleOrGrade: type === 'kindergarten' ? 'មត្តេយ្យ' : 'ថ្នាក់ទី...',
      studentTotal: '',
      studentFemale: '',
      shiftMorning: true,
      shiftAfternoon: false,
      notes: '',
      type,
    };
    onUpdateData({ ...data, teachingStaff: [...data.teachingStaff, newStaff] });
  };

  const handleDeleteStaff = (id: string, isAdmin: boolean) => {
    if (isAdmin) {
      const filtered = data.adminStaff.filter((s) => s.id !== id);
      onUpdateData({ ...data, adminStaff: filtered });
    } else {
      const filtered = data.teachingStaff.filter((s) => s.id !== id);
      onUpdateData({ ...data, teachingStaff: filtered });
    }
  };

  return (
    <div
      id="staff-nominal-sheet"
      className="bg-white rounded-xl shadow-xs border border-slate-900 p-6 sm:p-10 text-slate-900 font-kantumruy print:border-none print:shadow-none print:p-0 print:m-0"
    >
      {/* 1. Official Header matching Ministry PDF layout */}
      <div className="flex flex-col items-center mb-6">
        {/* National Motto Centered */}
        <div className="text-center space-y-0.5 mb-4">
          <p className="font-moul text-base sm:text-lg text-slate-900 leading-relaxed tracking-wider">
            ព្រះរាជាណាចក្រកម្ពុជា
          </p>
          <p className="font-moul text-sm sm:text-base text-amber-950 tracking-widest">
            ជាតិ សាសនា ព្រះមហាក្សត្រ
          </p>
          <div className="flex justify-center py-0.5">
            <span className="text-amber-900 text-xs tracking-widest font-serif font-bold">
              ៚ ៙ ៚
            </span>
          </div>
        </div>

        {/* Administration Hierarchy (Left) */}
        <div className="w-full text-slate-800 text-xs sm:text-sm font-medium space-y-0.5">
          <p className="font-bold text-slate-900">
            រដ្ឋបាលស្រុក{districtName}
          </p>
          <p className="text-slate-800">
            ការិយាល័យអប់រំ យុវជន និងកីឡាស្រុក
          </p>
          <p className="text-slate-800">
            កម្រងសាលា៖ <span className="font-bold">{metadata.cluster}</span>
          </p>
          <p className="font-bold text-slate-900">
            សាលាបឋមសិក្សា៖ {schoolOnlyName}
          </p>
        </div>
      </div>

      {/* 2. Main Title */}
      <div className="text-center mb-6">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-moul text-slate-950 leading-relaxed">
          {data.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 italic mt-0.5">
          {data.subtitle}
        </p>
      </div>

      {/* 3. Section I: បុគ្គលិកទីចាត់ការ */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 font-kantumruy">
            I - បុគ្គលិកទីចាត់ការ ៖
          </h3>
          {!isPrintMode && (
            <button
              onClick={handleAddAdminStaff}
              className="inline-flex items-center gap-1 text-xs text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded transition-colors font-semibold"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>បន្ថែមបុគ្គលិកទីចាត់ការ</span>
            </button>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-900 text-xs text-slate-900">
            <thead>
              <tr className="bg-slate-100/90 font-bold">
                <th className="border border-slate-900 px-2 py-1.5 text-center w-12">ល.រ</th>
                <th className="border border-slate-900 px-3 py-1.5 text-center min-w-[140px]">
                  នាមត្រកូល-នាមខ្លួន
                </th>
                <th className="border border-slate-900 px-2 py-1.5 text-center w-12">ភេទ</th>
                <th className="border border-slate-900 px-2 py-1.5 text-center min-w-[90px]">
                  ក្របខ័ណ្ឌ
                </th>
                <th className="border border-slate-900 px-2 py-1.5 text-center min-w-[110px]">
                  កម្រិតវប្បធម៌
                </th>
                <th className="border border-slate-900 px-3 py-1.5 text-center min-w-[110px]">
                  មុខងារ
                </th>
                <th className="border border-slate-900 px-2 py-1.5 text-center min-w-[110px]">
                  ផ្សេងៗ
                </th>
                {!isPrintMode && (
                  <th className="border border-slate-900 px-1 py-1 text-center w-10 no-print">
                    សកម្មភាព
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.adminStaff.map((staff, idx) => {
                const isEditing = editingId === staff.id;
                return (
                  <tr key={staff.id} className="hover:bg-slate-50 transition-colors">
                    <td className="border border-slate-900 px-2 py-1.5 text-center font-medium">
                      {formatNumberWithOption(staff.no || String(idx + 1), useKhmerNumerals)}
                    </td>
                    <td className="border border-slate-900 px-3 py-1.5 text-left font-semibold">
                      {!isPrintMode ? (
                        <input
                          type="text"
                          value={staff.name}
                          onChange={(e) => handleUpdateAdminStaff(idx, 'name', e.target.value)}
                          className="w-full bg-transparent border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                        />
                      ) : (
                        staff.name
                      )}
                    </td>
                    <td className="border border-slate-900 px-2 py-1.5 text-center">
                      {!isPrintMode ? (
                        <select
                          value={staff.gender}
                          onChange={(e) => handleUpdateAdminStaff(idx, 'gender', e.target.value)}
                          className="bg-transparent text-center focus:outline-none cursor-pointer"
                        >
                          <option value="ស">ស</option>
                          <option value="ប">ប</option>
                        </select>
                      ) : (
                        staff.gender
                      )}
                    </td>
                    <td className="border border-slate-900 px-2 py-1.5 text-center">
                      {!isPrintMode ? (
                        <input
                          type="text"
                          value={staff.framework}
                          onChange={(e) => handleUpdateAdminStaff(idx, 'framework', e.target.value)}
                          className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                        />
                      ) : (
                        staff.framework
                      )}
                    </td>
                    <td className="border border-slate-900 px-2 py-1.5 text-center">
                      {!isPrintMode ? (
                        <input
                          type="text"
                          value={staff.educationLevel}
                          onChange={(e) =>
                            handleUpdateAdminStaff(idx, 'educationLevel', e.target.value)
                          }
                          className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                        />
                      ) : (
                        staff.educationLevel
                      )}
                    </td>
                    <td className="border border-slate-900 px-3 py-1.5 text-center font-medium">
                      {!isPrintMode ? (
                        <input
                          type="text"
                          value={staff.roleOrGrade}
                          onChange={(e) =>
                            handleUpdateAdminStaff(idx, 'roleOrGrade', e.target.value)
                          }
                          className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                        />
                      ) : (
                        staff.roleOrGrade
                      )}
                    </td>
                    <td className="border border-slate-900 px-2 py-1.5 text-center text-[11px]">
                      {!isPrintMode ? (
                        <input
                          type="text"
                          value={staff.notes || ''}
                          onChange={(e) => handleUpdateAdminStaff(idx, 'notes', e.target.value)}
                          className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1 font-sans"
                        />
                      ) : (
                        staff.notes
                      )}
                    </td>
                    {!isPrintMode && (
                      <td className="border border-slate-900 px-1 py-1 text-center no-print">
                        <button
                          onClick={() => handleDeleteStaff(staff.id, true)}
                          className="text-rose-500 hover:text-rose-700 p-1 rounded"
                          title="លុប"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Section II: បុគ្គលិកបង្រៀន */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-sm sm:text-base text-slate-900 font-kantumruy">
            II - បុគ្គលិកបង្រៀន ៖
          </h3>
          {!isPrintMode && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleAddTeachingStaff('primary')}
                className="inline-flex items-center gap-1 text-xs text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 px-2.5 py-1 rounded transition-colors font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>បន្ថែមគ្រូបឋម</span>
              </button>
              <button
                onClick={() => handleAddTeachingStaff('kindergarten')}
                className="inline-flex items-center gap-1 text-xs text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded transition-colors font-semibold"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>បន្ថែមគ្រូមត្តេយ្យ</span>
              </button>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-slate-900 text-xs text-slate-900">
            <thead>
              {/* Row 1 Header with nested colspan/rowspan */}
              <tr className="bg-slate-100/90 font-bold">
                <th rowSpan={2} className="border border-slate-900 px-2 py-1 text-center w-12">
                  ល.រ
                </th>
                <th rowSpan={2} className="border border-slate-900 px-3 py-1 text-center min-w-[140px]">
                  នាមត្រកូល-នាមខ្លួន
                </th>
                <th rowSpan={2} className="border border-slate-900 px-2 py-1 text-center w-12">
                  ភេទ
                </th>
                <th rowSpan={2} className="border border-slate-900 px-2 py-1 text-center min-w-[85px]">
                  ក្របខ័ណ្ឌ
                </th>
                <th rowSpan={2} className="border border-slate-900 px-2 py-1 text-center min-w-[105px]">
                  កម្រិតវប្បធម៌
                </th>
                <th rowSpan={2} className="border border-slate-900 px-2 py-1 text-center w-16">
                  ថ្នាក់
                </th>
                <th colSpan={2} className="border border-slate-900 px-2 py-1 text-center">
                  ចំនួនសិស្ស
                </th>
                <th colSpan={2} className="border border-slate-900 px-2 py-1 text-center">
                  វេន
                </th>
                <th rowSpan={2} className="border border-slate-900 px-2 py-1 text-center min-w-[110px]">
                  ផ្សេងៗ
                </th>
                {!isPrintMode && (
                  <th rowSpan={2} className="border border-slate-900 px-1 py-1 text-center w-10 no-print">
                    សកម្មភាព
                  </th>
                )}
              </tr>
              {/* Row 2 Subheader */}
              <tr className="bg-slate-100/90 font-bold">
                <th className="border border-slate-900 px-2 py-1 text-center w-14">សរុប</th>
                <th className="border border-slate-900 px-2 py-1 text-center w-14">ស្រី</th>
                <th className="border border-slate-900 px-2 py-1 text-center w-12">ព្រឹក</th>
                <th className="border border-slate-900 px-2 py-1 text-center w-12">ល្ងាច</th>
              </tr>
            </thead>
            <tbody>
              {/* 1. Primary Teachers (rows 4 to 15) */}
              {primaryTeachers.map((staff, idx) => (
                <tr key={staff.id} className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-900 px-2 py-1 text-center font-medium">
                    {formatNumberWithOption(staff.no, useKhmerNumerals)}
                  </td>
                  <td className="border border-slate-900 px-3 py-1 text-left font-semibold">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.name}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'name',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      staff.name
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center">
                    {!isPrintMode ? (
                      <select
                        value={staff.gender}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'gender',
                            e.target.value
                          )
                        }
                        className="bg-transparent text-center focus:outline-none cursor-pointer"
                      >
                        <option value="ស">ស</option>
                        <option value="ប">ប</option>
                      </select>
                    ) : (
                      staff.gender
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.framework}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'framework',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      staff.framework
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.educationLevel}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'educationLevel',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      staff.educationLevel
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center font-bold">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.roleOrGrade}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'roleOrGrade',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1 font-bold"
                      />
                    ) : (
                      staff.roleOrGrade
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center font-medium">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.studentTotal || ''}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'studentTotal',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      formatNumberWithOption(staff.studentTotal || '', useKhmerNumerals)
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center font-medium">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.studentFemale || ''}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'studentFemale',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      formatNumberWithOption(staff.studentFemale || '', useKhmerNumerals)
                    )}
                  </td>
                  {/* Shift Morning */}
                  <td className="border border-slate-900 px-2 py-1 text-center font-bold">
                    {!isPrintMode ? (
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'shiftMorning',
                            !staff.shiftMorning
                          )
                        }
                        className="w-full text-center hover:text-sky-600"
                      >
                        {staff.shiftMorning ? '√' : '-'}
                      </button>
                    ) : (
                      staff.shiftMorning ? '√' : ''
                    )}
                  </td>
                  {/* Shift Afternoon */}
                  <td className="border border-slate-900 px-2 py-1 text-center font-bold">
                    {!isPrintMode ? (
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'shiftAfternoon',
                            !staff.shiftAfternoon
                          )
                        }
                        className="w-full text-center hover:text-sky-600"
                      >
                        {staff.shiftAfternoon ? '√' : '-'}
                      </button>
                    ) : (
                      staff.shiftAfternoon ? '√' : ''
                    )}
                  </td>
                  {/* Notes / Phone */}
                  <td className="border border-slate-900 px-2 py-1 text-center text-[11px]">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.notes || ''}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'notes',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1 font-sans"
                      />
                    ) : (
                      staff.notes
                    )}
                  </td>
                  {!isPrintMode && (
                    <td className="border border-slate-900 px-1 py-1 text-center no-print">
                      <button
                        onClick={() => handleDeleteStaff(staff.id, false)}
                        className="text-rose-500 hover:text-rose-700 p-1 rounded"
                        title="លុប"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  )}
                </tr>
              ))}

              {/* Subtotal Row for Primary */}
              <tr className="bg-slate-100/90 font-bold border-t-2 border-slate-900">
                <td colSpan={6} className="border border-slate-900 px-3 py-1.5 text-center font-bold">
                  សរុបរួម
                </td>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">
                  {formatNumberWithOption(String(primaryStudentTotal), useKhmerNumerals)}
                </td>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">
                  {formatNumberWithOption(String(primaryStudentFemale), useKhmerNumerals)}
                </td>
                <td className="border border-slate-900 px-2 py-1.5 text-center"></td>
                <td className="border border-slate-900 px-2 py-1.5 text-center"></td>
                <td className="border border-slate-900 px-2 py-1.5 text-center"></td>
                {!isPrintMode && (
                  <td className="border border-slate-900 px-1 py-1 text-center no-print"></td>
                )}
              </tr>

              {/* 2. Kindergarten Teachers (rows 16 & 17) */}
              {kndStaff.map((staff, idx) => (
                <tr key={staff.id} className="hover:bg-slate-50 transition-colors">
                  <td className="border border-slate-900 px-2 py-1 text-center font-medium">
                    {formatNumberWithOption(staff.no, useKhmerNumerals)}
                  </td>
                  <td className="border border-slate-900 px-3 py-1 text-left font-semibold">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.name}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'name',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      staff.name
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center">
                    {!isPrintMode ? (
                      <select
                        value={staff.gender}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'gender',
                            e.target.value
                          )
                        }
                        className="bg-transparent text-center focus:outline-none cursor-pointer"
                      >
                        <option value="ស">ស</option>
                        <option value="ប">ប</option>
                      </select>
                    ) : (
                      staff.gender
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.framework}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'framework',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      staff.framework
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.educationLevel}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'educationLevel',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      staff.educationLevel
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center font-bold">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.roleOrGrade}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'roleOrGrade',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1 font-bold"
                      />
                    ) : (
                      staff.roleOrGrade
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center font-medium">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.studentTotal || ''}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'studentTotal',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      formatNumberWithOption(staff.studentTotal || '', useKhmerNumerals)
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center font-medium">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.studentFemale || ''}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'studentFemale',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1"
                      />
                    ) : (
                      formatNumberWithOption(staff.studentFemale || '', useKhmerNumerals)
                    )}
                  </td>
                  {/* Shift Morning */}
                  <td className="border border-slate-900 px-2 py-1 text-center font-bold">
                    {!isPrintMode ? (
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'shiftMorning',
                            !staff.shiftMorning
                          )
                        }
                        className="w-full text-center hover:text-sky-600"
                      >
                        {staff.shiftMorning ? '√' : '-'}
                      </button>
                    ) : (
                      staff.shiftMorning ? '√' : ''
                    )}
                  </td>
                  {/* Shift Afternoon */}
                  <td className="border border-slate-900 px-2 py-1 text-center font-bold">
                    {!isPrintMode ? (
                      <button
                        type="button"
                        onClick={() =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'shiftAfternoon',
                            !staff.shiftAfternoon
                          )
                        }
                        className="w-full text-center hover:text-sky-600"
                      >
                        {staff.shiftAfternoon ? '√' : '-'}
                      </button>
                    ) : (
                      staff.shiftAfternoon ? '√' : ''
                    )}
                  </td>
                  <td className="border border-slate-900 px-2 py-1 text-center text-[11px]">
                    {!isPrintMode ? (
                      <input
                        type="text"
                        value={staff.notes || ''}
                        onChange={(e) =>
                          handleUpdateTeachingStaff(
                            data.teachingStaff.findIndex((s) => s.id === staff.id),
                            'notes',
                            e.target.value
                          )
                        }
                        className="w-full bg-transparent text-center border-b border-dashed border-slate-300 focus:border-sky-600 focus:outline-none px-1 font-sans"
                      />
                    ) : (
                      staff.notes
                    )}
                  </td>
                  {!isPrintMode && (
                    <td className="border border-slate-900 px-1 py-1 text-center no-print">
                      <button
                        onClick={() => handleDeleteStaff(staff.id, false)}
                        className="text-rose-500 hover:text-rose-700 p-1 rounded"
                        title="លុប"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  )}
                </tr>
              ))}

              {/* Grand Total Row */}
              <tr className="bg-slate-100/90 font-bold border-t-2 border-slate-900">
                <td colSpan={6} className="border border-slate-900 px-3 py-1.5 text-center font-bold">
                  សរុបរួម
                </td>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">
                  {formatNumberWithOption(String(grandStudentTotal), useKhmerNumerals)}
                </td>
                <td className="border border-slate-900 px-2 py-1.5 text-center font-bold">
                  {formatNumberWithOption(String(grandStudentFemale), useKhmerNumerals)}
                </td>
                <td className="border border-slate-900 px-2 py-1.5 text-center"></td>
                <td className="border border-slate-900 px-2 py-1.5 text-center"></td>
                <td className="border border-slate-900 px-2 py-1.5 text-center"></td>
                {!isPrintMode && (
                  <td className="border border-slate-900 px-1 py-1 text-center no-print"></td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Summary Notes (បញ្ជាក់ៈ) matching document exactly */}
      <div className="mb-8 text-xs sm:text-sm text-slate-900 space-y-1 font-medium pl-2">
        <p className="font-bold">បញ្ជាក់ៈ</p>
        <p className="pl-4">
          - បុគ្គលិកសរុបចំនួនៈ{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(totalStaffCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់/ស្រី{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(femaleStaffCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់
        </p>
        <p className="pl-4">
          - បុគ្គលិកបង្រៀន បឋម{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(primaryTeachersCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់/ស្រី{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(femalePrimaryTeachersCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់
        </p>
        <p className="pl-4">
          - បុគ្គលិកបង្រៀន មត្តេយ្យ{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(kndCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់/ស្រី{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(femaleKndCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់
        </p>
        <p className="pl-4">
          - បុគ្គលិកទីចាត់ការចំនួនៈ{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(adminCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់/ស្រី{' '}
          <strong className="font-bold">
            {formatNumberWithOption(String(femaleAdminCount), useKhmerNumerals)}
          </strong>{' '}
          នាក់
        </p>
      </div>

      {/* 6. Signatures for THIS specific sheet */}
      <div className="grid grid-cols-2 gap-8 text-center text-slate-900 pt-4">
        {/* Left: District Office Endorsement */}
        <div className="flex flex-col justify-between h-44">
          <div>
            <p className="font-bold text-xs sm:text-sm">បានឃើញ និងឯកភាព</p>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-1">
              ..............., ថ្ងៃទី......... ខែ.................. ឆ្នាំ ២០២.......
            </p>
            <p className="font-bold text-xs sm:text-sm text-slate-900 mt-1">
              ប្រធានការិយាល័យអប់រំ យុវជន និងកីឡានៃរដ្ឋបាលស្រុក
            </p>
          </div>
          <div className="text-xs text-slate-400 italic">
            (ហត្ថលេខា និងត្រា)
          </div>
        </div>

        {/* Right: Principal */}
        <div className="flex flex-col justify-between h-44">
          <div>
            <p className="text-[11px] sm:text-xs text-slate-600">
              {metadata.lunarDate || 'ថ្ងៃអង្គារ ១០រោច ខែចេត្រ ឆ្នាំម្សាញ់ សប្តស័ក ព.ស. ២៥៦៩'}
            </p>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5">
              {metadata.solarDate || 'រោគ, ថ្ងៃទី២២ ខែមេសា ឆ្នាំ២០២៥'}
            </p>
            <p className="font-bold text-xs sm:text-sm text-slate-900 mt-1">
              {metadata.principalRole || 'នាយិកា'}
            </p>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-slate-400 italic">
              (ហត្ថលេខា និងត្រា)
            </div>
            <p className="text-xs sm:text-sm text-slate-900 font-bold">
              {metadata.principalName || 'សុខ ណារ៉េន'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
