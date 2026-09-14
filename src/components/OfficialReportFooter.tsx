import React from 'react';
import { SchoolMetadata } from '../types';

interface Props {
  metadata: SchoolMetadata;
}

export const OfficialReportFooter: React.FC<Props> = ({ metadata }) => {
  // Left: បានឃើញ និង ឯកភាព / ប្រធានអង្គភាព
  const approvalTitle = metadata.approvalTitle || 'បានឃើញ និង ឯកភាព';
  const approvalLunarDate =
    metadata.approvalLunarDate ||
    metadata.lunarDate ||
    'ថ្ងៃចន្ទ ៣កើត ខែភទ្របទ ឆ្នាំមមែ អដ្ឋស័ក ព.ស.២៥៧០';
  const approvalSolarDate =
    metadata.approvalSolarDate ||
    metadata.solarDate ||
    metadata.reportDate ||
    'រោគ  ថ្ងៃទី១៤ ខែកញ្ញា ឆ្នាំ២០២៦';
  const principalRole = metadata.principalRole || 'ប្រធានអង្គភាព';

  // Right: អ្នកធ្វើតារាង / អ៊ុន ប៊ុនទុង
  const preparerTitle = metadata.preparerTitle || 'អ្នកធ្វើតារាង';
  const preparerLunarDate =
    metadata.preparerLunarDate ||
    'ថ្ងៃអាទិត្យ ២កើត ខែភទ្របទ ឆ្នាំមមែ អដ្ឋស័ក ព.ស.២៥៧០';
  const preparerSolarDate =
    metadata.preparerSolarDate ||
    'រោគ  ថ្ងៃទី១៣ ខែកញ្ញា ឆ្នាំ២០២៦';
  const preparerName =
    metadata.preparedBy ||
    metadata.secretaryName ||
    'អ៊ុន ប៊ុនទុង';

  return (
    <div
      id="official-report-footer"
      className="mt-10 bg-white rounded-xl shadow-xs border border-slate-200/80 p-6 print:border-none print:shadow-none print:p-0 print:mt-8 break-inside-avoid"
    >
      {/* Exact Official 2-Column Administrative Layout matching Cambodian Ministry format */}
      <div className="grid grid-cols-2 gap-6 text-center text-slate-900 font-kantumruy">
        {/* Left Column: បានឃើញ និង ឯកភាព (ប្រធានអង្គភាព) */}
        <div className="flex flex-col justify-between min-h-[190px] print:min-h-[180px]">
          <div className="space-y-1">
            <p className="font-bold text-sm sm:text-base text-slate-900">
              {approvalTitle}
            </p>
            {approvalLunarDate && (
              <p className="text-xs text-slate-700">
                {approvalLunarDate}
              </p>
            )}
            <p className="text-xs text-slate-700">
              {approvalSolarDate}
            </p>
            <p className="font-bold text-sm sm:text-base text-slate-900 pt-1">
              {principalRole}
            </p>
          </div>

          <div className="pt-16 pb-2 print:pt-20">
            {metadata.principalName && (
              <p className="text-xs sm:text-sm text-slate-800 font-semibold font-kantumruy">
                {metadata.principalName}
              </p>
            )}
          </div>
        </div>

        {/* Right Column: អ្នកធ្វើតារាង */}
        <div className="flex flex-col justify-between min-h-[190px] print:min-h-[180px]">
          <div className="space-y-1">
            {preparerLunarDate && (
              <p className="text-xs text-slate-700">
                {preparerLunarDate}
              </p>
            )}
            <p className="text-xs text-slate-700">
              {preparerSolarDate}
            </p>
            <p className="font-bold text-sm sm:text-base text-slate-900 pt-1">
              {preparerTitle}
            </p>
          </div>

          <div className="pt-16 pb-2 print:pt-20">
            <p className="font-bold text-sm sm:text-base text-slate-900 font-kantumruy">
              {preparerName}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-slate-100 text-center text-[11px] text-slate-400 print:hidden">
        ទម្រង់ហត្ថលេខាផ្លូវការ៖ ប្រធានអង្គភាព (ខាងឆ្វេង) និង អ្នកធ្វើតារាង (ខាងស្តាំ)
      </div>
    </div>
  );
};

