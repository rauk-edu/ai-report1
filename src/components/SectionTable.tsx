import React, { useState } from 'react';
import { SectionData, TableCell } from '../types';
import { 
  Download, 
  Copy, 
  Check, 
  Edit3, 
  RotateCcw, 
  Code2, 
  FileSpreadsheet,
  Calculator,
  RefreshCw,
  Info,
  Eye,
  EyeOff
} from 'lucide-react';
import { formatNumberWithOption, downloadCsv } from '../utils/khmerNumerals';
import { 
  getSectionFormulaContext, 
  isFormulaRow, 
  isTotalRow 
} from '../utils/tableFormulas';

interface Props {
  section: SectionData;
  searchQuery: string;
  useKhmerNumerals: boolean;
  hideFormulaRow?: boolean;
  onUpdateCell: (sectionId: string, cellId: string, newText: string) => void;
  onResetSection: (sectionId: string) => void;
  onRecalculateSection?: (sectionId: string) => void;
}

export const SectionTable: React.FC<Props> = ({
  section,
  searchQuery,
  useKhmerNumerals,
  hideFormulaRow = false,
  onUpdateCell,
  onResetSection,
  onRecalculateSection,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showRawHtml, setShowRawHtml] = useState(false);
  const [editingCellId, setEditingCellId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [rotateFormulas, setRotateFormulas] = useState(true);
  const [showFormulaRow, setShowFormulaRow] = useState(!hideFormulaRow);

  // Analyze section formulas
  const formulaCtx = getSectionFormulaContext(section);

  // Helper to convert table rows to CSV
  const handleExportCsv = () => {
    const csvRows: string[] = [];
    section.rows.forEach((row) => {
      const rowValues = row.cells.map((cell) => {
        const val = cell.text.replace(/"/g, '""');
        return `"${val}"`;
      });
      csvRows.push(rowValues.join(','));
    });
    const csvString = csvRows.join('\r\n');
    downloadCsv(`${section.id}_${section.sectionNumber}`, csvString);
  };

  const handleCopyHtml = async () => {
    try {
      await navigator.clipboard.writeText(section.rawTableHtml);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  // Helper to highlight matching text
  const renderCellText = (cell: TableCell) => {
    const rawText = cell.text || '';
    const formatted = formatNumberWithOption(rawText, useKhmerNumerals);

    if (!searchQuery.trim()) {
      return formatted;
    }

    const query = searchQuery.toLowerCase();
    const textLower = formatted.toLowerCase();

    if (!textLower.includes(query)) {
      return formatted;
    }

    const startIndex = textLower.indexOf(query);
    const endIndex = startIndex + query.length;

    return (
      <>
        {formatted.substring(0, startIndex)}
        <mark className="bg-amber-300 text-slate-900 rounded-sm px-0.5 font-bold">
          {formatted.substring(startIndex, endIndex)}
        </mark>
        {formatted.substring(endIndex)}
      </>
    );
  };

  return (
    <section 
      id={section.id}
      className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden mb-8 transition-all hover:shadow-md"
    >
      {/* Section Header */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-blue-900 text-white p-4 sm:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-400/20 text-sky-200 border border-sky-300/30">
              ផ្នែក {section.part} • តារាង {section.sectionNumber}
            </span>
            {formulaCtx && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 shadow-sm">
                <Calculator className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
                <span>គណនាស្វ័យប្រវត្តិ (Auto-calc)</span>
              </span>
            )}
          </div>
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-white/95">
            {section.title}
          </h3>
        </div>

        {/* Action Controls */}
        <div className="no-print flex items-center gap-1.5 sm:gap-2 flex-wrap self-end md:self-auto">
          {/* Vertical/Horizontal & Show/Hide Formula Toggle */}
          {formulaCtx && (
            <>
              <button
                onClick={() => setShowFormulaRow(!showFormulaRow)}
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  !showFormulaRow
                    ? 'bg-amber-400/20 text-amber-200 border-amber-300/40 shadow-sm'
                    : 'bg-white/10 text-white/90 border-white/15 hover:bg-white/20'
                }`}
                title={showFormulaRow ? 'លាក់ជួរដេករូបមន្ត' : 'បង្ហាញជួរដេករូបមន្ត'}
              >
                {showFormulaRow ? <EyeOff className="w-3.5 h-3.5 text-amber-300" /> : <Eye className="w-3.5 h-3.5 text-emerald-300" />}
                <span className="text-[11px]">{showFormulaRow ? 'លាក់រូបមន្ត' : 'បង្ហាញរូបមន្ត'}</span>
              </button>

              {showFormulaRow && (
                <button
                  onClick={() => setRotateFormulas(!rotateFormulas)}
                  className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                    rotateFormulas
                      ? 'bg-amber-400/20 text-amber-200 border-amber-300/40 shadow-sm'
                      : 'bg-white/10 text-white/90 border-white/15 hover:bg-white/20'
                  }`}
                  title="ប្តូរបែបបទបង្ហាញរូបមន្ត: បញ្ឈរ ឬផ្ដេក"
                >
                  <span className="text-[11px]">{rotateFormulas ? 'រូបមន្តបញ្ឈរ' : 'រូបមន្តផ្ដេក'}</span>
                </button>
              )}
            </>
          )}

          {/* Recalculate Button */}
          {onRecalculateSection && (
            <button
              onClick={() => onRecalculateSection(section.id)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-emerald-500/20 text-white transition-colors border border-white/15"
              title="គណនារូបមន្ត និងផលបូកឡើងវិញ"
            >
              <RefreshCw className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline text-[11px]">គណនាឡើងវិញ</span>
            </button>
          )}

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isEditing 
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm' 
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
            title="កែសម្រួលទិន្នន័យក្រឡា"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span className="text-[11px]">{isEditing ? 'បញ្ចប់ការកែ' : 'កែសម្រួល'}</span>
          </button>

          {/* Reset Section Button */}
          <button
            onClick={() => {
              if (window.confirm('តើអ្នកពិតជាចង់កំណត់តារាងនេះឡើងវិញតាមទម្រង់ដើមមែនទេ?')) {
                onResetSection(section.id);
              }
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-rose-500/30 text-rose-200 border border-white/15 transition-colors"
            title="កំណត់ទិន្នន័យដើមឡើងវិញ"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">កំណត់ដើម</span>
          </button>

          {/* CSV Export */}
          <button
            onClick={handleExportCsv}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
            title="ទាញយកជា CSV (Excel)"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">CSV</span>
          </button>

          {/* Copy HTML Source */}
          <button
            onClick={handleCopyHtml}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors"
            title="ចម្លងកូដ HTML តារាង"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[11px]">{copied ? 'បានចម្លង' : 'HTML'}</span>
          </button>

          {/* Raw View Toggle */}
          <button
            onClick={() => setShowRawHtml(!showRawHtml)}
            className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              showRawHtml
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
            }`}
            title="មើលកូដដើម HTML"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">កូដ</span>
          </button>
        </div>
      </div>

      {/* Summary Note Banner if present */}
      {section.summaryNote && (
        <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-2 text-xs text-slate-600 flex items-center gap-2">
          <span className="font-semibold text-slate-700">កំណត់ចំណាំ:</span>
          <span>{section.summaryNote}</span>
        </div>
      )}

      {/* Raw HTML Mode View */}
      {showRawHtml ? (
        <div className="p-4 bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto max-h-96">
          <pre>{section.rawTableHtml}</pre>
        </div>
      ) : (
        /* Standard / Interactive Table View */
        <div className="overflow-x-auto p-2 sm:p-4 bg-white">
          <table className="w-full border-collapse border border-slate-300 text-xs sm:text-sm text-slate-800">
            <tbody>
              {section.rows.map((row, rowIndex) => {
                const isFormula = formulaCtx !== null && formulaCtx.formulaRowIndex === rowIndex;
                const isSectionFormulaHidden = formulaCtx !== null && (hideFormulaRow || !showFormulaRow);
                
                // Completely omit formula rows when hidden ("មិនបាច់បង្ហាញ formulaRows នោះទេ")
                if (isFormula && isSectionFormulaHidden) {
                  return null;
                }

                const isTotal = isTotalRow(row, rowIndex, formulaCtx?.formulaRowIndex);

                // Row background styling
                let rowBgClass = 'hover:bg-sky-50/40 transition-colors';
                if (isFormula) {
                  rowBgClass = 'bg-[#fde8d7] font-semibold text-slate-900 border-y-2 border-amber-300 print:hidden';
                } else if (isTotal) {
                  rowBgClass = 'bg-slate-100/95 font-bold border-t-2 border-slate-400 text-slate-900';
                } else if (row.isHeaderRow) {
                  rowBgClass = 'bg-slate-100/90 font-semibold';
                }

                // Data row offset for formula columns
                const isDataRow = !row.isHeaderRow && !isFormula && !isTotal;
                const dataOffset = formulaCtx ? row.cells.length - formulaCtx.formulaRow.cells.length : 0;

                return (
                  <tr 
                    key={row.id} 
                    className={`${rowBgClass} ${isFormula ? 'print:hidden' : ''}`}
                  >
                    {row.cells.map((cell, cellIndex) => {
                      const isCellActive = editingCellId === cell.id;
                      const CellTag = cell.isTh || isFormula ? 'th' : 'td';
                      const alignmentClass = 
                        cell.align === 'left' ? 'text-left' :
                        cell.align === 'right' ? 'text-right' : 'text-center';

                      // Calculate effective rowSpan if formula row is hidden so header cells do not span into data rows (e.g. Grade 1)
                      let effectiveRowSpan = cell.rowSpan || 1;
                      if (formulaCtx && isSectionFormulaHidden) {
                        const fRowIdx = formulaCtx.formulaRowIndex;
                        if (rowIndex < fRowIdx && rowIndex + effectiveRowSpan > fRowIdx) {
                          effectiveRowSpan = Math.max(1, effectiveRowSpan - 1);
                        }
                      }

                      // Column width normalization for formula tables ("ដើម្បីឱ្យ columns ស្មើគ្នា")
                      let columnWidthClass = '';
                      if (formulaCtx) {
                        if (isFormula) {
                          columnWidthClass = 'min-w-[48px] text-center';
                        } else if (isDataRow) {
                          const hasLrCol = row.cells.length > formulaCtx.formulaRow.cells.length + 1;
                          if (cellIndex === 0 && hasLrCol) {
                            // Column 0 is ល/រ (No.)
                            columnWidthClass = 'min-w-[42px] text-center';
                          } else if (cellIndex === (hasLrCol ? 1 : 0)) {
                            // Grade or school label column
                            columnWidthClass = 'min-w-[64px] whitespace-nowrap text-center';
                          } else {
                            // All numeric/formula columns are completely equal!
                            columnWidthClass = 'min-w-[48px] text-center';
                          }
                        } else if (isTotal) {
                          if (cellIndex === 0) {
                            columnWidthClass = 'min-w-[64px] whitespace-nowrap text-center';
                          } else {
                            columnWidthClass = 'min-w-[48px] text-center';
                          }
                        } else if (row.isHeaderRow) {
                          if (cell.text.trim() === 'ល/រ') {
                            columnWidthClass = 'min-w-[42px] text-center';
                          } else if (cell.text.trim() === 'ថ្នាក់') {
                            columnWidthClass = 'min-w-[64px] whitespace-nowrap text-center';
                          }
                        }
                      }

                      // Check if cell is an auto-calculated cell in data row
                      let formulaDef = null;
                      if (isDataRow && formulaCtx && dataOffset >= 0 && cellIndex >= dataOffset) {
                        const formulaIdx = cellIndex - dataOffset;
                        formulaDef = formulaCtx.formulaDefs[formulaIdx];
                      }

                      const isCalculatedCell = formulaDef && formulaDef.type !== 'plain';

                      return (
                        <CellTag
                          key={cell.id}
                          rowSpan={effectiveRowSpan}
                          colSpan={cell.colSpan || 1}
                          onClick={() => {
                            if (isEditing && !cell.isHeader && !isFormula) {
                              setEditingCellId(cell.id);
                            }
                          }}
                          className={`border border-slate-300 px-1.5 py-1.5 leading-snug transition-colors relative ${alignmentClass} ${columnWidthClass} ${
                            isFormula
                              ? 'bg-[#fde8d7] text-slate-900 font-bold p-1'
                              : cell.isHeader
                              ? 'bg-slate-100 text-slate-900 font-bold text-[12px] sm:text-xs'
                              : isTotal
                              ? 'font-bold text-slate-900'
                              : 'text-slate-800'
                          } ${
                            isEditing && !cell.isHeader && !isFormula
                              ? 'cursor-pointer hover:bg-amber-100/80'
                              : ''
                          } ${isCalculatedCell && !isCellActive ? 'bg-sky-50/40' : ''} ${
                            isCellActive ? 'ring-2 ring-sky-500 bg-sky-50 z-10' : ''
                          }`}
                          title={
                            isFormula
                              ? `រូបមន្ត: ${cell.text}`
                              : isCalculatedCell
                              ? `គណនាស្វ័យប្រវត្តិតាម: ${formulaDef?.targetCol}=${formulaDef?.expr}`
                              : undefined
                          }
                        >
                          {isCellActive ? (
                            <input
                              type="text"
                              autoFocus
                              defaultValue={cell.text}
                              onBlur={(e) => {
                                onUpdateCell(section.id, cell.id, e.target.value);
                                setEditingCellId(null);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  onUpdateCell(section.id, cell.id, (e.target as HTMLInputElement).value);
                                  setEditingCellId(null);
                                } else if (e.key === 'Escape') {
                                  setEditingCellId(null);
                                }
                              }}
                              className="w-full text-center bg-white border border-sky-400 rounded px-1 py-0.5 text-xs text-slate-900 shadow-inner focus:outline-none font-semibold"
                            />
                          ) : isFormula && rotateFormulas && cell.text && /^\d+(\s*=\s*[\d\+\-\*\/x]+)?$/i.test(cell.text.trim()) ? (
                            /* Auto height vertical text orientation for genuine formula cells */
                            <div 
                              className="min-h-[58px] h-auto py-1.5 flex items-center justify-center [writing-mode:vertical-rl] rotate-180 font-mono text-[11px] sm:text-xs font-semibold text-slate-900 tracking-wider select-none leading-none px-0.5 mx-auto"
                              title={`រូបមន្តជួរឈរ: ${cell.text}`}
                            >
                              {formatNumberWithOption(cell.text, useKhmerNumerals)}
                            </div>
                          ) : (
                             <span
                             className={isCalculatedCell ? 'font-medium' : ''}>
                              {renderCellText(cell)}
                            </span>
                          )}
                        </CellTag>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Table Footer Helper */}
      <div className="no-print bg-slate-50 border-t border-slate-200/70 px-4 py-2.5 flex items-center justify-between text-[11px] text-slate-500 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
          <span>ចំនួនជួរដេក: {section.rows.length} • ទម្រង់ក្រសួងអប់រំ យុវជន និងកីឡា</span>
        </div>
        {formulaCtx && (
          <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>រូបមន្ត និងផលបូកសរុបដំណើរការគណនាស្វ័យប្រវត្តិ</span>
          </div>
        )}
        {isEditing && (
          <span className="text-amber-700 font-medium animate-pulse">
            កំពុងស្ថិតក្នុងទម្រង់កែសម្រួល: ចុចលើក្រឡាដើម្បីផ្លាស់ប្តូរលេខ (តម្លៃរូបមន្តនឹងគណនាឡើងវិញភ្លាមៗ)
          </span>
        )}
      </div>
    </section>
  );
};
