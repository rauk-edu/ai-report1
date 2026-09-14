import React from 'react';
import { 
  Users, 
  BookOpen, 
  Droplets, 
  HeartPulse, 
  HeartHandshake, 
  Building2,
  Accessibility,
  CheckCircle2
} from 'lucide-react';
import { formatNumberWithOption } from '../utils/khmerNumerals';

interface Props {
  useKhmerNumerals: boolean;
  onSelectSection: (sectionId: string) => void;
}

export const StatsCards: React.FC<Props> = ({ useKhmerNumerals, onSelectSection }) => {
  const cards = [
    {
      id: 'sec_b_1',
      title: 'បុគ្គលិក & គ្រូបង្រៀន',
      subtitle: 'Staff & Teachers',
      value: formatNumberWithOption('11', useKhmerNumerals),
      subValue: `ស្រី ${formatNumberWithOption('4', useKhmerNumerals)} នាក់ (${formatNumberWithOption('36.4', useKhmerNumerals)}%)`,
      icon: Users,
      badge: 'ក្របខ័ណ្ឌ & កិច្ចសន្យា',
      color: 'border-sky-200 bg-sky-50/50 text-sky-900',
      iconColor: 'text-sky-600 bg-sky-100',
    },
    {
      id: 'sec_b_3',
      title: 'សកម្មភាពបណ្ណាល័យ',
      subtitle: 'Library & Reading',
      value: 'មានដំណើរការ',
      subValue: 'ក្នុងទីចាត់ការ • បណ្ណារក្ស ១ នាក់',
      icon: BookOpen,
      badge: 'សៀវភៅ & ឧបករណ៍',
      color: 'border-indigo-200 bg-indigo-50/50 text-indigo-900',
      iconColor: 'text-indigo-600 bg-indigo-100',
    },
    {
      id: 'sec_b_5',
      title: 'ទឹកស្អាត & អនាម័យ (WASH)',
      subtitle: 'Water & Sanitation',
      value: `${formatNumberWithOption('100', useKhmerNumerals)}%`,
      subValue: 'បង្គន់ ២ បន្ទប់ • អណ្ដូងស្នប់ & ចម្រោះ',
      icon: Droplets,
      badge: 'ស្តង់ដារអនាម័យ',
      color: 'border-teal-200 bg-teal-50/50 text-teal-900',
      iconColor: 'text-teal-600 bg-teal-100',
    },
    {
      id: 'sec_b_7',
      title: 'សុខភាព & ទម្លាក់ព្រូន',
      subtitle: 'Deworming & Health',
      value: `${formatNumberWithOption('100', useKhmerNumerals)}%`,
      subValue: `សិស្ស ${formatNumberWithOption('88', useKhmerNumerals)}/${formatNumberWithOption('88', useKhmerNumerals)} • មានហិបសង្គ្រោះ`,
      icon: HeartPulse,
      badge: 'ជុំទី១ & ជុំទី២',
      color: 'border-emerald-200 bg-emerald-50/50 text-emerald-900',
      iconColor: 'text-emerald-600 bg-emerald-100',
    },
    {
      id: 'sec_b_10',
      title: 'សិស្សក្រីក្រ & ងាយរងគ្រោះ',
      subtitle: 'Underprivileged Students',
      value: formatNumberWithOption('14', useKhmerNumerals),
      subValue: `ស្រី ${formatNumberWithOption('8', useKhmerNumerals)} នាក់ • កំព្រាឪពុក ${formatNumberWithOption('1', useKhmerNumerals)} នាក់`,
      icon: HeartHandshake,
      badge: 'ផ្ដល់អាទិភាព',
      color: 'border-amber-200 bg-amber-50/50 text-amber-900',
      iconColor: 'text-amber-600 bg-amber-100',
    },
    {
      id: 'sec_b_11',
      title: 'សិស្សពិការ (អប់រំពិសេស)',
      subtitle: 'Inclusive Education',
      value: formatNumberWithOption('1', useKhmerNumerals),
      subValue: 'ថ្នាក់ទី១ (ពិការកាយសម្បទា)',
      icon: Accessibility,
      badge: 'សមាហរណកម្ម',
      color: 'border-purple-200 bg-purple-50/50 text-purple-900',
      iconColor: 'text-purple-600 bg-purple-100',
    },
    {
      id: 'sec_b_13',
      title: 'អង្គការដៃគូឧបត្ថម្ភ',
      subtitle: 'Partner NGOs',
      value: formatNumberWithOption('3', useKhmerNumerals),
      subValue: 'World Vision • សាលាបៃតង • កុមាររីករាយ',
      icon: Building2,
      badge: 'ជំនួយ & អភិវឌ្ឍន៍',
      color: 'border-blue-200 bg-blue-50/50 text-blue-900',
      iconColor: 'text-blue-600 bg-blue-100',
    },
  ];

  return (
    <div className="no-print mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-slate-800 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-sky-600" />
          <span>សូចនាករគន្លឹះបំណាច់ឆ្នាំ (Key Indicators Summary)</span>
        </h2>
        <span className="text-xs text-slate-500">ចុចលើផ្ទាំងនីមួយៗដើម្បីចូលទៅកាន់តារាងលម្អិត</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <button
              key={card.id}
              onClick={() => onSelectSection(card.id)}
              className={`text-left p-3.5 rounded-xl border transition-all hover:shadow-xs hover:scale-[1.01] ${card.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/80 border border-slate-200/60 text-slate-700">
                    {card.badge}
                  </span>
                  <div className={`p-1.5 rounded-lg ${card.iconColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-bold text-sm text-slate-900 mt-2 line-clamp-1">
                  {card.title}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1">{card.subtitle}</p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-200/50">
                <div className="text-lg font-extrabold text-slate-900 tracking-tight">
                  {card.value}
                </div>
                <div className="text-xs text-slate-600 font-medium truncate mt-0.5">
                  {card.subValue}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
