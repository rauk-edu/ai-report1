import React from 'react';
import { 
  Search, 
  Printer, 
  Download, 
  Languages, 
  RotateCcw, 
  Layers,
  FileCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { ActivePart, SectionData } from '../types';

interface Props {
  activePart: ActivePart;
  onChangePart: (part: ActivePart) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  useKhmerNumerals: boolean;
  onToggleKhmerNumerals: () => void;
  sections: SectionData[];
  onExportAllCsv: () => void;
  onPrint: () => void;
  onResetAll: () => void;
  onOpenOfficialPrintView: () => void;
  hideAllFormulaRows?: boolean;
  onToggleHideAllFormulaRows?: () => void;
}

export const NavigationToolbar: React.FC<Props> = ({
  activePart,
  onChangePart,
  searchQuery,
  onSearchChange,
  useKhmerNumerals,
  onToggleKhmerNumerals,
  sections,
  onExportAllCsv,
  onPrint,
  onResetAll,
  onOpenOfficialPrintView,
  hideAllFormulaRows = false,
  onToggleHideAllFormulaRows,
}) => {
  return (
    <div className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90 px-4 py-3 mb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-3">
        {/* Left: Part Toggles & Official Print Page CTA */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs font-semibold shrink-0">
            <button
              id="tab-part-a"
              onClick={() => onChangePart('A')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePart === 'A'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              តារាង ក (A ១-៤)
            </button>
            <button
              id="tab-part-b"
              onClick={() => onChangePart('B')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePart === 'B'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              តារាង ខ (B ៥-១៥)
            </button>
            <button
              id="tab-part-staff"
              onClick={() => onChangePart('STAFF')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePart === 'STAFF'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              បញ្ជីរាយនាមបុគ្គលិក
            </button>
            <button
              id="tab-part-all"
              onClick={() => onChangePart('ALL')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePart === 'ALL'
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
              }`}
            >
              របាយការណ៍រួម (All)
            </button>
          </div>

          {/* Official Print View Button */}
          <button
            id="btn-official-print-view"
            onClick={onOpenOfficialPrintView}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all shrink-0 border border-emerald-500"
            title="ទំព័រផ្លូវការ សម្រាប់បោះពុម្ព (លាក់ជួរដេករូបមន្ត ដោយរក្សាទុកការគណនា)"
          >
            <FileCheck className="w-3.5 h-3.5" />
            <span>ទំព័រផ្លូវការសម្រាប់បោះពុម្ព</span>
          </button>
        </div>

        {/* Center: Search input */}
        <div className="flex-1 max-w-md relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="ស្វែងរកក្នុងតារាង... (Search text, schools, counts)"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-8 py-1.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Hide/Show All Formula Rows Toggle */}
          {onToggleHideAllFormulaRows && (
            <button
              onClick={onToggleHideAllFormulaRows}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                hideAllFormulaRows
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title={hideAllFormulaRows ? 'បង្ហាញជួរដេករូបមន្តឡើងវិញ' : 'លាក់ជួរដេករូបមន្តទាំងអស់លើអេក្រង់'}
            >
              {hideAllFormulaRows ? <Eye className="w-3.5 h-3.5 text-emerald-600" /> : <EyeOff className="w-3.5 h-3.5 text-amber-600" />}
              <span>{hideAllFormulaRows ? 'បង្ហាញរូបមន្ត' : 'លាក់រូបមន្ត'}</span>
            </button>
          )}

          {/* Numerals switch */}
          <button
            onClick={onToggleKhmerNumerals}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              useKhmerNumerals
                ? 'bg-amber-50 border-amber-300 text-amber-900'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
            title="ប្ដូររវាងលេខខ្មែរ (០-៩) និងលេខឡាតាំង (0-9)"
          >
            <Languages className="w-3.5 h-3.5 text-amber-700" />
            <span>{useKhmerNumerals ? 'លេខខ្មែរ (០-៩)' : 'លេខអារ៉ាប់ (0-9)'}</span>
          </button>

          {/* Export full report to CSV */}
          <button
            onClick={onExportAllCsv}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs transition-colors"
            title="ទាញយកតារាងទាំងអស់ជាឯកសារ Excel/CSV"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden sm:inline">ទាញយក CSV</span>
          </button>

          {/* Print button */}
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-sky-700 hover:bg-sky-800 text-white shadow-xs transition-colors"
            title="បោះពុម្ព ឬ រក្សាទុកជា PDF (ដោយស្វ័យប្រវត្តិនឹងលាក់ជួររូបមន្ត)"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>បោះពុម្ព / PDF</span>
          </button>

          {/* Reset button */}
          <button
            onClick={onResetAll}
            className="p-1.5 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 border border-transparent transition-colors"
            title="កំណត់ទិន្នន័យឡើងវិញទាំងអស់"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Quick Section Jump Pills */}
      <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-[11px] text-slate-600">
        <span className="flex items-center gap-1 font-semibold text-slate-700 shrink-0 mr-1">
          <Layers className="w-3 h-3 text-sky-600" />
          <span>ជំពូក:</span>
        </span>
        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-sky-100 hover:text-sky-900 shrink-0 transition-colors"
          >
            {sec.sectionNumber}. {sec.category}
          </a>
        ))}
      </div>
    </div>
  );
};
