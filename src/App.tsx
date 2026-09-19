import React, { useState, useEffect } from 'react';
import { SectionData, SchoolMetadata, ActivePart, StaffNominalData } from './types';
import { INITIAL_SECTIONS, INITIAL_SCHOOL_METADATA } from './data';
import { INITIAL_STAFF_DATA } from './staffData';
import { recalculateSection } from './utils/tableFormulas';
import { OfficialReportHeader } from './components/OfficialReportHeader';
import { OfficialReportFooter } from './components/OfficialReportFooter';
import { StatsCards } from './components/StatsCards';
import { SectionTable } from './components/SectionTable';
import { NavigationToolbar } from './components/NavigationToolbar';
import { EditSchoolModal } from './components/EditSchoolModal';
import { OfficialPrintView } from './components/OfficialPrintView';
import { StaffNominalTable } from './components/StaffNominalTable';
import { downloadCsv } from './utils/khmerNumerals';

export default function App() {
  const [activePart, setActivePart] = useState<ActivePart>('A');
  const [searchQuery, setSearchQuery] = useState('');
  const [useKhmerNumerals, setUseKhmerNumerals] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isOfficialPrintMode, setIsOfficialPrintMode] = useState(false);
  const [hideAllFormulaRows, setHideAllFormulaRows] = useState(false);

  // Initialize school metadata from localStorage or default (with fallback for new fields)
  const [metadata, setMetadata] = useState<SchoolMetadata>(() => {
    try {
      const saved = localStorage.getItem('school_report_metadata');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...INITIAL_SCHOOL_METADATA,
          ...parsed,
          preparerTitle: parsed.preparerTitle || INITIAL_SCHOOL_METADATA.preparerTitle,
          preparerLunarDate: parsed.preparerLunarDate || INITIAL_SCHOOL_METADATA.preparerLunarDate,
          preparerSolarDate: parsed.preparerSolarDate || INITIAL_SCHOOL_METADATA.preparerSolarDate,
          approvalTitle: parsed.approvalTitle || INITIAL_SCHOOL_METADATA.approvalTitle,
          approvalLunarDate: parsed.approvalLunarDate || INITIAL_SCHOOL_METADATA.approvalLunarDate,
          approvalSolarDate: parsed.approvalSolarDate || INITIAL_SCHOOL_METADATA.approvalSolarDate,
          principalRole:
            parsed.principalRole &&
            parsed.principalRole !== 'នាយិកាសាលា' &&
            parsed.principalRole !== 'នាយិកា'
              ? parsed.principalRole
              : INITIAL_SCHOOL_METADATA.principalRole,
        };
      }
    } catch {
      // ignore
    }
    return INITIAL_SCHOOL_METADATA;
  });

  // Initialize staff nominal data from localStorage or default
  const [staffData, setStaffData] = useState<StaffNominalData>(() => {
    try {
      const saved = localStorage.getItem('school_report_staff_data');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return INITIAL_STAFF_DATA;
  });

  // Initialize sections from localStorage or default (with automatic calculation)
  const [sections, setSections] = useState<SectionData[]>(() => {
    try {
      const saved = localStorage.getItem('school_report_sections');
      if (saved) {
        const parsed: SectionData[] = JSON.parse(saved);
        // Synchronize with INITIAL_SECTIONS: removes deleted sections (sec_b_6),
        // adds new sections (sec_b_14), and updates titles and section numbers while preserving cell values.
        const updated = INITIAL_SECTIONS.map((initSec) => {
          const savedSec = parsed.find((s) => s.id === initSec.id);
          if (!savedSec) return recalculateSection(initSec);

          // If the cached section has mismatched cell count (e.g. old _lr cells in Part A), reset that section to initSec
          const hasMismatch = savedSec.rows.some((sr, i) => {
            const ir = initSec.rows[i];
            return ir && !ir.isHeaderRow && sr.cells.length !== ir.cells.length;
          });
          if (hasMismatch) {
            return recalculateSection(initSec);
          }

          const rows = initSec.rows.map((initRow, rIdx) => {
            const savedRow = savedSec.rows[rIdx];
            if (!savedRow || initRow.isHeaderRow || savedRow.cells.length !== initRow.cells.length) {
              return initRow;
            }
            const cells = initRow.cells.map((initCell, cIdx) => {
              const savedCell = savedRow.cells[cIdx];
              if (!savedCell) return initCell;
              return {
                ...initCell,
                text: savedCell.text !== undefined ? savedCell.text : initCell.text,
              };
            });
            return { ...initRow, cells };
          });
          return recalculateSection({ ...initSec, rows });
        });
        return [
          ...updated.filter((s) => s.part === 'A'),
          ...updated.filter((s) => s.part === 'B'),
        ];
      }
    } catch {
      // ignore
    }
    return INITIAL_SECTIONS.map(recalculateSection);
  });

  // Persist staff data
  useEffect(() => {
    try {
      localStorage.setItem('school_report_staff_data', JSON.stringify(staffData));
    } catch {
      // ignore
    }
  }, [staffData]);

  // Persist metadata
  useEffect(() => {
    try {
      localStorage.setItem('school_report_metadata', JSON.stringify(metadata));
    } catch {
      // ignore
    }
  }, [metadata]);

  // Persist sections
  useEffect(() => {
    try {
      localStorage.setItem('school_report_sections', JSON.stringify(sections));
    } catch {
      // ignore
    }
  }, [sections]);

  // Filter sections by active part (ensuring Part A comes before Part B)
  const visibleSections = sections
    .filter((sec) => {
      if (activePart === 'A') return sec.part === 'A';
      if (activePart === 'B') return sec.part === 'B';
      if (activePart === 'STAFF') return false;
      return true;
    })
    .sort((a, b) => {
      if (a.part === 'A' && b.part !== 'A') return -1;
      if (a.part !== 'A' && b.part === 'A') return 1;
      return 0;
    });

  // Filter by search query if any
  const displayedSections = visibleSections.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const titleMatch = sec.title.toLowerCase().includes(q) || sec.englishTitle.toLowerCase().includes(q);
    const categoryMatch = sec.category.toLowerCase().includes(q);
    const cellMatch = sec.rows.some((r) =>
      r.cells.some((c) => c.text.toLowerCase().includes(q))
    );
    return titleMatch || categoryMatch || cellMatch;
  });

  // Update a specific cell with automatic formula recalculation
  const handleUpdateCell = (sectionId: string, cellId: string, newText: string) => {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== sectionId) return sec;
        const updatedRows = sec.rows.map((row) => ({
          ...row,
          cells: row.cells.map((cell) =>
            cell.id === cellId ? { ...cell, text: newText } : cell
          ),
        }));
        const updatedSec = { ...sec, rows: updatedRows };
        return recalculateSection(updatedSec);
      })
    );
  };

  // Recalculate a section on demand
  const handleRecalculateSection = (sectionId: string) => {
    setSections((prev) =>
      prev.map((sec) => (sec.id === sectionId ? recalculateSection(sec) : sec))
    );
  };

  // Reset a specific section to its initial data
  const handleResetSection = (sectionId: string) => {
    const initial = INITIAL_SECTIONS.find((s) => s.id === sectionId);
    if (!initial) return;
    setSections((prev) =>
      prev.map((sec) => (sec.id === sectionId ? recalculateSection(JSON.parse(JSON.stringify(initial))) : sec))
    );
  };

  // Reset all data
  const handleResetAll = () => {
    if (window.confirm('តើអ្នកពិតជាចង់កំណត់ទិន្នន័យឡើងវិញទាំងអស់មែនទេ? (Reset all data to defaults?)')) {
      setSections(JSON.parse(JSON.stringify(INITIAL_SECTIONS)));
      setMetadata({ ...INITIAL_SCHOOL_METADATA });
      setStaffData(JSON.parse(JSON.stringify(INITIAL_STAFF_DATA)));
      localStorage.removeItem('school_report_sections');
      localStorage.removeItem('school_report_metadata');
      localStorage.removeItem('school_report_staff_data');
    }
  };

  // Export all visible sections to CSV
  const handleExportAllCsv = () => {
    const lines: string[] = [];
    lines.push(`"របាយការណ៍ស្ថិតិបំណាច់ឆ្នាំសិក្សា - ${metadata.schoolName}"`);
    lines.push(`"ឆ្នាំសិក្សា: ${metadata.academicYear} | កាលបរិច្ឆេទ: ${metadata.reportDate}"`);
    lines.push('');

    if (activePart === 'STAFF') {
      lines.push(`"=== បញ្ជីរាយនាមបុគ្គលិកអប់រំ និងគ្រូបង្រៀន ==="`);
      lines.push('"ល.រ","គោត្តនាម-នាម","ភេទ","ថ្ងៃខែឆ្នាំកំណើត","តួនាទី","កម្រិតវប្បធម៌","ឯកទេស","ប្រភេទគ្រូ/ក្របខ័ណ្ឌ","កាលបរិច្ឆេទចូលបម្រើការងារ","លេខទូរស័ព្ទ","ចំណាត់ថ្នាក់បន្ទុក"');
      staffData.members.forEach((m, idx) => {
        lines.push(`"${idx + 1}","${m.name}","${m.gender}","${m.birthDate}","${m.position}","${m.educationDegree}","${m.specialization}","${m.frameworkType}","${m.joinDate}","${m.phone}","${m.category}"`);
      });
    } else {
      visibleSections.forEach((sec) => {
        lines.push(`"=== ជំពូក ${sec.sectionNumber}: ${sec.title} (${sec.englishTitle}) ==="`);
        sec.rows.forEach((row) => {
          const rowVals = row.cells.map((c) => `"${c.text.replace(/"/g, '""')}"`);
          lines.push(rowVals.join(','));
        });
        lines.push('');
      });
    }

    downloadCsv(`End_Year_Report_${metadata.academicYear.replace(/\s+/g, '_')}_Part_${activePart}`, lines.join('\r\n'));
  };

  const handlePrint = () => {
    setIsOfficialPrintMode(true);
    setTimeout(() => {
      window.print();
    }, 150);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // If in Official Print View, show the print-ready document
  if (isOfficialPrintMode) {
    return (
      <OfficialPrintView
        sections={sections}
        metadata={metadata}
        staffData={staffData}
        onUpdateStaffData={setStaffData}
        activePart={activePart}
        onChangePart={setActivePart}
        useKhmerNumerals={useKhmerNumerals}
        onToggleKhmerNumerals={() => setUseKhmerNumerals(!useKhmerNumerals)}
        onExitPrintView={() => setIsOfficialPrintMode(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      {/* Navigation Toolbar */}
      <NavigationToolbar
        activePart={activePart}
        onChangePart={setActivePart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        useKhmerNumerals={useKhmerNumerals}
        onToggleKhmerNumerals={() => setUseKhmerNumerals(!useKhmerNumerals)}
        sections={visibleSections}
        onExportAllCsv={handleExportAllCsv}
        onPrint={handlePrint}
        onResetAll={handleResetAll}
        onOpenOfficialPrintView={() => setIsOfficialPrintMode(true)}
        hideAllFormulaRows={hideAllFormulaRows}
        onToggleHideAllFormulaRows={() => setHideAllFormulaRows(!hideAllFormulaRows)}
      />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* If Staff Nominal List Tab is active */}
        {activePart === 'STAFF' ? (
          <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4 sm:p-8">
            <StaffNominalTable
              data={staffData}
              metadata={metadata}
              useKhmerNumerals={useKhmerNumerals}
              onUpdateData={setStaffData}
              isPrintMode={false}
            />
          </div>
        ) : (
          <>
            {/* Official Report Header */}
            <OfficialReportHeader
              metadata={metadata}
              activePart={activePart}
              onEditMetadata={() => setIsEditModalOpen(true)}
            />

            {/* Analytical Stats Summary Cards (especially prominent for Part B) */}
            {activePart !== 'A' && (
              <StatsCards
                useKhmerNumerals={useKhmerNumerals}
                onSelectSection={scrollToSection}
              />
            )}

            {/* Notice for search filtering */}
            {searchQuery.trim() && (
              <div className="no-print mb-4 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2.5 rounded-xl text-xs flex items-center justify-between">
                <span>
                  លទ្ធផលស្វែងរកសម្រាប់ <strong>"{searchQuery}"</strong>: រកឃើញ{' '}
                  {displayedSections.length} តារាង
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-amber-700 underline font-semibold hover:text-amber-800"
                >
                  សម្អាតការស្វែងរក
                </button>
              </div>
            )}

            {/* Section Tables */}
            {displayedSections.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-slate-200 my-8">
                <p className="text-slate-600 font-medium">មិនមានទិន្នន័យត្រូវគ្នានឹងពាក្យស្វែងរកឡើយ។</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-3 px-4 py-2 rounded-lg bg-sky-700 text-white text-xs font-semibold"
                >
                  បង្ហាញតារាងទាំងអស់ឡើងវិញ
                </button>
              </div>
            ) : (
              displayedSections.map((section) => (
                <SectionTable
                  key={section.id}
                  section={section}
                  searchQuery={searchQuery}
                  useKhmerNumerals={useKhmerNumerals}
                  hideFormulaRow={hideAllFormulaRows}
                  onUpdateCell={handleUpdateCell}
                  onResetSection={handleResetSection}
                  onRecalculateSection={handleRecalculateSection}
                />
              ))
            )}

            {/* Official Report Footer with Signatures: Strictly Secretary & Principal on statistical report */}
            <OfficialReportFooter metadata={metadata} />
          </>
        )}
      </main>

      {/* Edit School Metadata Modal */}
      <EditSchoolModal
        isOpen={isEditModalOpen}
        metadata={metadata}
        onClose={() => setIsEditModalOpen(false)}
        onSave={setMetadata}
      />
    </div>
  );
}
