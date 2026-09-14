import React, { useState, useEffect } from 'react';
import { SchoolMetadata } from '../types';
import { X, Save, School } from 'lucide-react';

interface Props {
  isOpen: boolean;
  metadata: SchoolMetadata;
  onClose: () => void;
  onSave: (updated: SchoolMetadata) => void;
}

export const EditSchoolModal: React.FC<Props> = ({
  isOpen,
  metadata,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<SchoolMetadata>({ ...metadata });

  // Sync formData whenever modal opens or metadata changes
  useEffect(() => {
    if (isOpen) {
      setFormData({ ...metadata });
    }
  }, [metadata, isOpen]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-slate-800 rounded-lg text-sky-400">
              <School className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base font-kantumruy">កែសម្រួលព័ត៌មានរបាយការណ៍</h3>
              <p className="text-[11px] text-slate-400">កំណត់ព័ត៌មានសាលារៀន និងហត្ថលេខាផ្លូវការ</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="បិទ"
            className="text-slate-400 hover:text-white hover:bg-slate-800 transition-colors p-1.5 rounded-lg flex items-center gap-1 cursor-pointer text-xs"
          >
            <span className="hidden sm:inline font-kantumruy">បិទ</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0 overflow-hidden">
          {/* Scrollable Form Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 text-sm text-slate-800 overscroll-contain">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                ឈ្មោះសាលារៀន (School Name)
              </label>
              <input
                type="text"
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  កម្រងសាលា (Cluster)
                </label>
                <input
                  type="text"
                  value={formData.cluster}
                  onChange={(e) => setFormData({ ...formData, cluster: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  ឆ្នាំសិក្សា (Academic Year)
                </label>
                <input
                  type="text"
                  value={formData.academicYear}
                  onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  ការិយាល័យអប់រំ ស្រុក/ខណ្ឌ
                </label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  មន្ទីរអប់រំ ខេត្ត/រាជធានី
                </label>
                <input
                  type="text"
                  value={formData.province}
                  onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Section: ព័ត៌មានហត្ថលេខា និងការឯកភាព (Official Signature Blocks) */}
            <div className="pt-2 border-t border-slate-200">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                ព័ត៌មានហត្ថលេខាផ្លូវការ (២ ភាគី តាមទម្រង់ក្រសួង)
              </h4>

              {/* Right Side: អ្នកធ្វើតារាង (Preparer) */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 mb-3 space-y-3">
                <p className="font-bold text-xs text-sky-800 flex items-center gap-1 font-kantumruy">
                  <span>១. ភាគីខាងស្តាំ៖ អ្នកធ្វើតារាង (Preparer)</span>
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      តួនាទី (Role Title)
                    </label>
                    <input
                      type="text"
                      placeholder="អ្នកធ្វើតារាង"
                      value={formData.preparerTitle || 'អ្នកធ្វើតារាង'}
                      onChange={(e) => setFormData({ ...formData, preparerTitle: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      ឈ្មោះអ្នកធ្វើតារាង (Name)
                    </label>
                    <input
                      type="text"
                      placeholder="អ៊ុន ប៊ុនទុង"
                      value={formData.preparedBy || formData.secretaryName || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          preparedBy: e.target.value,
                          secretaryName: e.target.value,
                        })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      កាលបរិច្ឆេទចន្ទគតិ (Lunar Date)
                    </label>
                    <input
                      type="text"
                      placeholder="ថ្ងៃអាទិត្យ ២កើត ខែភទ្របទ ឆ្នាំមមែ អដ្ឋស័ក ព.ស.២៥៧០"
                      value={formData.preparerLunarDate || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, preparerLunarDate: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      កាលបរិច្ឆេទសុរិយគតិ (Solar Date)
                    </label>
                    <input
                      type="text"
                      placeholder="រោគ  ថ្ងៃទី១៣ ខែកញ្ញា ឆ្នាំ២០២៦"
                      value={formData.preparerSolarDate || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, preparerSolarDate: e.target.value })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Left Side: បានឃើញ និង ឯកភាព / ប្រធានអង្គភាព (Approval / Head of Entity) */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
                <p className="font-bold text-xs text-sky-800 flex items-center gap-1 font-kantumruy">
                  <span>២. ភាគីខាងឆ្វេង៖ បានឃើញ និង ឯកភាព (Approval / Principal)</span>
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      ចំណងជើងឯកភាព (Approval Header)
                    </label>
                    <input
                      type="text"
                      placeholder="បានឃើញ និង ឯកភាព"
                      value={formData.approvalTitle || 'បានឃើញ និង ឯកភាព'}
                      onChange={(e) => setFormData({ ...formData, approvalTitle: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      តួនាទី (Role)
                    </label>
                    <input
                      type="text"
                      placeholder="ប្រធានអង្គភាព"
                      value={formData.principalRole || 'ប្រធានអង្គភាព'}
                      onChange={(e) => setFormData({ ...formData, principalRole: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      កាលបរិច្ឆេទចន្ទគតិ (Lunar Date)
                    </label>
                    <input
                      type="text"
                      placeholder="ថ្ងៃចន្ទ ៣កើត ខែភទ្របទ ឆ្នាំមមែ អដ្ឋស័ក ព.ស.២៥៧០"
                      value={formData.approvalLunarDate || formData.lunarDate || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          approvalLunarDate: e.target.value,
                          lunarDate: e.target.value,
                        })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      កាលបរិច្ឆេទសុរិយគតិ (Solar Date)
                    </label>
                    <input
                      type="text"
                      placeholder="រោគ  ថ្ងៃទី១៤ ខែកញ្ញា ឆ្នាំ២០២៦"
                      value={formData.approvalSolarDate || formData.solarDate || formData.reportDate || ''}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          approvalSolarDate: e.target.value,
                          solarDate: e.target.value,
                          reportDate: e.target.value,
                        })
                      }
                      className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    ឈ្មោះប្រធានអង្គភាព (Principal Name - បង្ហាញ ឬ ទុកទំនេរសម្រាប់បោះត្រា)
                  </label>
                  <input
                    type="text"
                    placeholder="សុខ ណារ៉េន"
                    value={formData.principalName || ''}
                    onChange={(e) => setFormData({ ...formData, principalName: e.target.value })}
                    className="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Bottom Action Buttons */}
          <div className="shrink-0 bg-slate-50 border-t border-slate-200 px-5 py-3.5 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 font-medium font-kantumruy transition-colors flex items-center gap-1.5 cursor-pointer text-sm shadow-xs"
            >
              <X className="w-4 h-4" />
              <span>បោះបង់ (បិទ)</span>
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-semibold font-kantumruy shadow-md transition-all cursor-pointer text-sm active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>រក្សាទុកព័ត៌មាន</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
