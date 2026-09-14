// Khmer numeral converter and formatting helpers

const KHMER_DIGITS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
const ARABIC_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function toKhmerNumerals(val: string | number): string {
  if (val === null || val === undefined) return '';
  const str = String(val);
  return str.replace(/[0-9]/g, (digit) => KHMER_DIGITS[parseInt(digit, 10)]);
}

export function toArabicNumerals(val: string): string {
  if (!val) return '';
  let res = val;
  for (let i = 0; i < 10; i++) {
    res = res.replaceAll(KHMER_DIGITS[i], ARABIC_DIGITS[i]);
  }
  return res;
}

export function formatNumberWithOption(val: string | number, useKhmerNumerals: boolean): string {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (useKhmerNumerals) {
    return toKhmerNumerals(str);
  }
  return toArabicNumerals(str);
}

/**
 * Generates and downloads a CSV file with UTF-8 BOM so Excel opens Khmer characters correctly.
 */
export function downloadCsv(filename: string, csvContent: string): void {
  // UTF-8 BOM (\uFEFF) ensures Excel reads Khmer script properly
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename.endsWith('.csv') ? filename : `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
