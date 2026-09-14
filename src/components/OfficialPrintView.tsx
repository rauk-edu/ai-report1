import React, { useState } from 'react';
import { SectionData, SchoolMetadata, ActivePart, StaffNominalData } from '../types';
import { OfficialReportHeader } from './OfficialReportHeader';
import { OfficialReportFooter } from './OfficialReportFooter';
import { StaffNominalTable } from './StaffNominalTable';
import { formatNumberWithOption } from '../utils/khmerNumerals';
import { getSectionFormulaContext, isTotalRow } from '../utils/tableFormulas';
import { 
  Printer, 
  ArrowLeft, 
  Languages, 
  CheckCircle2, 
  FileCheck,
  EyeOff,
  Users
} from 'lucide-react';

interface Props {
  sections: SectionData[];
  metadata: SchoolMetadata;
  staffData: StaffNominalData;
  onUpdateStaffData: (newData: StaffNominalData) => void;
  activePart: ActivePart;
  onChangePart: (part: ActivePart) => void;
  useKhmerNumerals: boolean;
  onToggleKhmerNumerals: () => void;
  onExitPrintView: () => void;
}

export const OfficialPrintView: React.FC<Props> = ({
  sections,
  metadata,
  staffData,
  onUpdateStaffData,
  activePart,
  onChangePart,
  useKhmerNumerals,
  onToggleKhmerNumerals,
  onExitPrintView,
}) => {
  const [selectedSectionFilter, setSelectedSectionFilter] = useState<ActivePart>(activePart);

  // Filter sections by selected part
  const filteredSections = sections.filter((sec) => {
    if (selectedSectionFilter === 'B') return sec.part === 'B';
    if (selectedSectionFilter === 'A') return sec.part === 'A';
    if (selectedSectionFilter === 'STAFF') return false;
    return true;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16 print:bg-white print:p-0 print:pb-0">
      {/* Top Floating Print Controls (Hidden when printing) */}
      <header className="no-print sticky top-0 z-50 bg-slate-900 text-white shadow-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onExitPrintView}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/10"
              title="ត្រឡប់ទៅផ្ទាំងកែសម្រួលទិន្នន័យ"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ត្រឡប់ទៅផ្ទាំងដើម</span>
            </button>
            <div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <h1 className="text-sm sm:text-base font-bold text-white">
                  ទំព័រផ្លូវការ សម្រាប់បោះពុម្ព (Official Print View)
                </h1>
              </div>
              <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                <EyeOff className="w-3 h-3 text-amber-300" />
                <span>បានលាក់ជួរដេករូបមន្ត (Formula Rows) ដោយរក្សាទុកតែលទ្ធផលគណនាស្វ័យប្រវត្តិនៃតួលេខ</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Filter Tabs */}
            <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs font-semibold">
              <button
                onClick={() => {
                  setSelectedSectionFilter('ALL');
                  onChangePart('ALL');
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  selectedSectionFilter === 'ALL'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                ទាំងអស់
              </button>
              <button
                onClick={() => {
                  setSelectedSectionFilter('B');
                  onChangePart('B');
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  selectedSectionFilter === 'B'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                តារាង ខ
              </button>
              <button
                onClick={() => {
                  setSelectedSectionFilter('A');
                  onChangePart('A');
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  selectedSectionFilter === 'A'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                តារាង ក
              </button>
              <button
                onClick={() => {
                  setSelectedSectionFilter('STAFF');
                  onChangePart('STAFF');
                }}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  selectedSectionFilter === 'STAFF'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                បញ្ជីរាយនាមបុគ្គលិក
              </button>
            </div>

            {/* Khmer Numerals Toggle */}
            <button
              onClick={onToggleKhmerNumerals}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                useKhmerNumerals
                  ? 'bg-amber-400/20 text-amber-200 border-amber-300/40'
                  : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
              }`}
              title="ប្ដូររវាងលេខខ្មែរ (០-៩) និងលេខឡាតាំង (0-9)"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{useKhmerNumerals ? 'លេខខ្មែរ (០-៩)' : 'លេខអារ៉ាប់ (0-9)'}</span>
            </button>

            {/* Print Action Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
            >
              <Printer className="w-4 h-4" />
              <span>បោះពុម្ព / រក្សាទុក PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* Printable Document Canvas (Paper-like container) */}
      <main className="max-w-[1200px] mx-auto my-6 p-6 sm:p-12 bg-white shadow-xl rounded-lg border border-slate-200 print:shadow-none print:border-none print:m-0 print:p-0 print:max-w-full">
        {/* If user selected ONLY Staff Nominal List */}
        {selectedSectionFilter === 'STAFF' ? (
          <StaffNominalTable
            data={staffData}
            metadata={metadata}
            useKhmerNumerals={useKhmerNumerals}
            onUpdateData={onUpdateStaffData}
            isPrintMode={true}
          />
        ) : (
          <>
            {/* Official Header */}
            <OfficialReportHeader
              metadata={metadata}
              activePart={selectedSectionFilter}
            />

            {/* Section Tables (Strictly WITHOUT formula rows) */}
            <div className="space-y-8 print:space-y-6 mt-6">
              {filteredSections.map((section) => {
                const formulaCtx = getSectionFormulaContext(section);

                return (
                  <div 
                    key={section.id} 
                    className="print-page-break break-inside-avoid border border-slate-900 rounded-sm overflow-hidden bg-white"
                  >
                    {/* Section Title Bar */}
                    <div className="bg-slate-100 border-b border-slate-900 px-3 py-2 flex items-center justify-between text-slate-900">
                      <div className="font-bold text-xs sm:text-sm font-kantumruy">
                        <span className="mr-2">ផ្នែក {section.part}</span>
                        <span>• {section.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-600 italic">
                        ទម្រង់ក្រសួងអប់រំ យុវជន និងកីឡា
                      </span>
                    </div>

                    {/* Table Component without formula rows */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-slate-900 text-[11px] text-slate-900 leading-tight">
                        <tbody>
                          {section.rows.map((row, rowIndex) => {
                            const isFormula = formulaCtx !== null && formulaCtx.formulaRowIndex === rowIndex;
                            
                            // STRICT REQUIREMENT: HIDE ALL FORMULA ROWS ("មិនបាច់បង្ហាញ formulaRows នោះទេ")
                            if (isFormula) {
                              return null;
                            }

                            const isTotal = isTotalRow(row, rowIndex, formulaCtx?.formulaRowIndex);

                            let rowClass = '';
                            if (row.isHeaderRow) {
                              rowClass = 'bg-slate-100/95 font-bold';
                            } else if (isTotal) {
                              rowClass = 'bg-slate-50 font-bold border-t-2 border-slate-900';
                            }

                            return (
                              <tr key={row.id} className={rowClass}>
                                {row.cells.map((cell) => {
                                  const CellTag = cell.isTh ? 'th' : 'td';
                                  const alignClass = 
                                    cell.align === 'left' ? 'text-left' :
                                    cell.align === 'right' ? 'text-right' : 'text-center';

                                  // When formula rows are omitted in print, decrease rowSpan of cells spanning across it
                                  let effectiveRowSpan = cell.rowSpan || 1;
                                  if (formulaCtx) {
                                    const fRowIdx = formulaCtx.formulaRowIndex;
                                    if (rowIndex < fRowIdx && rowIndex + effectiveRowSpan > fRowIdx) {
                                      effectiveRowSpan = Math.max(1, effectiveRowSpan - 1);
                                    }
                                  }

                                  return (
                                    <CellTag
                                      key={cell.id}
                                      rowSpan={effectiveRowSpan}
                                      colSpan={cell.colSpan || 1}
                                      className={`border border-slate-900 px-1.5 py-1 ${alignClass} ${
                                        cell.isHeader
                                          ? 'bg-slate-100 font-bold text-slate-900 text-[11px]'
                                          : isTotal
                                          ? 'font-bold text-slate-900'
                                          : 'text-slate-900'
                                      }`}
                                    >
                                      {formatNumberWithOption(cell.text, useKhmerNumerals)}
                                    </CellTag>
                                  );
                                })}
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    {/* Summary note if any */}
                    {section.summaryNote && (
                      <div className="px-3 py-1 bg-slate-50 border-t border-slate-300 text-[10px] text-slate-600 italic">
                        <span className="font-semibold text-slate-800">កំណត់ចំណាំ: </span>
                        <span>{section.summaryNote}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Official Footer with Signatures: Strictly Secretary & Principal on all statistical tables */}
            <div className="mt-8 pt-4">
              <OfficialReportFooter metadata={metadata} />
            </div>

            {/* If ALL is selected, also append the Staff Nominal Sheet after a page break */}
            {selectedSectionFilter === 'ALL' && (
              <div className="mt-12 pt-8 border-t-4 border-dashed border-slate-300 print:break-before-page print:mt-0 print:pt-0 print:border-none">
                <StaffNominalTable
                  data={staffData}
                  metadata={metadata}
                  useKhmerNumerals={useKhmerNumerals}
                  onUpdateData={onUpdateStaffData}
                  isPrintMode={true}
                />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

