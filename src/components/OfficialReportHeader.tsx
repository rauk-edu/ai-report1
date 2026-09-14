import React from 'react';
import { SchoolMetadata } from '../types';
import { Edit, School, Calendar, MapPin } from 'lucide-react';

interface Props {
  metadata: SchoolMetadata;
  activePart: 'B' | 'A' | 'ALL';
  onEditMetadata: () => void;
}

export const OfficialReportHeader: React.FC<Props> = ({
  metadata,
  activePart,
  onEditMetadata,
}) => {
  const districtName = metadata.district.replace(/^ស្រុក\s*/, '');
  const schoolOnlyName = metadata.schoolName.replace(/^សាលាបឋមសិក្សា[៖\s]*/, '');

  return (
    <div id="official-report-header" className="bg-white rounded-xl shadow-xs border border-slate-200/80 p-6 mb-6 print:border-none print:shadow-none print:p-0 print:mb-4">
      {/* Top Formal National Header - Centered National Motto & Left Hierarchy */}
      <div className="flex flex-col items-center border-b border-slate-200 pb-5 mb-5 print:border-b-0 print:pb-2 print:mb-3">
        {/* Kingdom Motto Centered */}
        <div className="text-center space-y-1 mb-4">
          <p className="font-moul text-base sm:text-lg text-slate-900 leading-relaxed tracking-wider">
            ព្រះរាជាណាចក្រកម្ពុជា
          </p>
          <p className="font-moul text-sm sm:text-base text-amber-900 tracking-widest">
            ជាតិ សាសនា ព្រះមហាក្សត្រ
          </p>
          <div className="flex justify-center py-1">
            <span className="text-amber-800 text-xs tracking-widest font-serif font-bold">
              ៚ ៙ ៚
            </span>
          </div>
        </div>

        {/* Administration Hierarchy (Left aligned) */}
        <div className="w-full flex flex-col sm:flex-row sm:items-end sm:justify-between text-slate-800 gap-2 font-kantumruy">
          <div className="space-y-0.5 text-xs sm:text-sm font-medium">
            <p className="font-bold text-slate-900">
              រដ្ឋបាលស្រុក{districtName}
            </p>
            <p className="text-slate-800">
              ការិយាល័យអប់រំ យុវជន និងកីឡាស្រុក
            </p>
            <p className="text-slate-800">
              កម្រងសាលា៖ <span className="font-bold">{metadata.cluster}</span>
            </p>
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className="font-bold text-slate-900">
                សាលាបឋមសិក្សា៖ {schoolOnlyName}
              </span>
              <button
                id="edit-school-info-btn"
                onClick={onEditMetadata}
                className="no-print ml-2 inline-flex items-center gap-1 text-[11px] text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 px-2 py-0.5 rounded transition-colors"
                title="កែសម្រួលព័ត៌មានសាលា"
              >
                <Edit className="w-3 h-3" />
                <span>កែព័ត៌មាន</span>
              </button>
            </div>
          </div>

          <div className="text-left sm:text-right text-xs text-slate-500">
            {metadata.lunarDate && (
              <p className="text-slate-600">{metadata.lunarDate}</p>
            )}
            <p className="flex items-center sm:justify-end gap-1 text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-slate-400 no-print" />
              <span>{metadata.solarDate || metadata.reportDate}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Document Title */}
      <div className="text-center py-2">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-moul text-slate-900 tracking-wide">
          របាយការណ៍ស្ថិតិបំណាច់ឆ្នាំសិក្សា
        </h1>
        <p className="text-sm sm:text-base text-slate-700 mt-1 font-medium font-kantumruy">
          ឆ្នាំសិក្សា{metadata.academicYear}
        </p>
        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-100/80 text-sky-900 border border-sky-200 no-print">
          <span>
            {activePart === 'B'
              ? 'តារាង ខ (ផ្នែកទី ២: ស្ថិតិជំពូក ៥ ដល់ ១៥)'
              : activePart === 'A'
              ? 'តារាង ក (ផ្នែកទី ១: ស្ថិតិជំពូក ១ ដល់ ៤)'
              : activePart === 'STAFF'
              ? 'បញ្ជីរាយនាមបុគ្គលិកឆមាសទី១'
              : 'របាយការណ៍ពេញលេញ (តារាង ក និង តារាង ខ)'}
          </span>
        </div>
      </div>


      {/* Info Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>កម្រង: <strong className="text-slate-800 font-semibold">{metadata.cluster}</strong></span>
        </div>
        <div>
          <span>នាយកសាលា: <strong className="text-slate-800 font-semibold">{metadata.principalName}</strong></span>
        </div>
        <div>
          <span>អ្នករៀបចំ: <strong className="text-slate-800 font-semibold">{metadata.preparedBy}</strong></span>
        </div>
        <div className="text-right">
          <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
            ទិន្នន័យផ្លូវការក្រសួង
          </span>
        </div>
      </div>
    </div>
  );
};
