import { SectionData, TableRow, TableCell } from '../types';

export interface FormulaDef {
  targetCol: number;
  expr: string;
  type: 'pct' | 'diff' | 'sum' | 'plain';
  sourceCols: number[];
  multiplier?: number;
}

/**
 * Clean numeric string to float. Returns 0 if empty or invalid.
 */
export const parseCleanNumber = (val: string | number | undefined | null): number => {
  if (val === undefined || val === null) return 0;
  const str = String(val).trim();
  if (!str || str === '-' || str === '%') return 0;
  // Remove % or commas
  const cleaned = str.replace(/%/g, '').replace(/,/g, '').trim();
  // Support Khmer numerals if any
  const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  let westernStr = '';
  for (const char of cleaned) {
    const kIdx = khmerDigits.indexOf(char);
    if (kIdx !== -1) {
      westernStr += kIdx.toString();
    } else {
      westernStr += char;
    }
  }
  const parsed = parseFloat(westernStr);
  return isNaN(parsed) ? 0 : parsed;
};

/**
 * Format calculated number. If percentage, formats as e.g. "100%" or "85.5%".
 */
export const formatCalculatedValue = (val: number, isPercentage = false): string => {
  if (isPercentage) {
    if (val === 0) return '0%';
    const rounded = Math.round(val * 10) / 10;
    return `${rounded}%`;
  }
  return Math.round(val).toString();
};

/**
 * Checks if a table row is a formula indicator row (contains cells like 1=3+21, 6=5x10/1, etc.)
 * Strictly requires at least 2 cells with equals formulas to prevent false positives on data input rows.
 */
export const isFormulaRow = (row: TableRow): boolean => {
  if (!row || !row.cells || row.cells.length === 0) return false;
  let equalsFormulaCount = 0;

  for (const cell of row.cells) {
    const txt = cell.text.trim();
    if (/^\d+\s*=\s*[\d\+\-\*\/x]+/i.test(txt)) {
      equalsFormulaCount++;
    }
  }

  // Must have at least 2 formula cells with "=" (e.g. 1=3+21, 6=5x10/1)
  return equalsFormulaCount >= 2;
};

/**
 * Checks if a table row is a Total / Summary ("សរុប") row.
 * Note: Must be a data-level row, not a header row.
 */
export const isTotalRow = (row: TableRow, rowIndex?: number, formulaRowIndex?: number): boolean => {
  if (!row.cells || row.cells.length === 0) return false;
  // If formulaRowIndex is known, total row must come AFTER the formula row
  if (formulaRowIndex !== undefined && rowIndex !== undefined && rowIndex <= formulaRowIndex) {
    return false;
  }
  if (row.isHeaderRow) return false;

  const firstText = row.cells[0]?.text?.trim() || '';
  // Check if first cell is "សរុប" or starts with "សរុប"
  return firstText === 'សរុប' || firstText.startsWith('សរុប') || firstText.toLowerCase() === 'total';
};

/**
 * Parse an individual cell formula string into a FormulaDef
 */
export const parseFormulaString = (rawText: string, defaultColNum: number): FormulaDef | null => {
  const text = rawText.trim();
  if (!text) return null;

  // Pattern: "targetCol = expr" e.g. "1=3+21", "6=5x10/1", "4=3x100/1", "7=1-3"
  const eqIdx = text.indexOf('=');
  let targetCol = defaultColNum;
  let expr = text;

  if (eqIdx !== -1) {
    const targetPart = text.slice(0, eqIdx).trim();
    const parsedTarget = parseInt(targetPart, 10);
    if (!isNaN(parsedTarget)) {
      targetCol = parsedTarget;
    }
    expr = text.slice(eqIdx + 1).trim();
  }

  // Check for percentage: e.g. 5x10/1, 5x100/1, 3*100/1, 11*100/5
  const pctMatch = expr.match(/^(\d+)\s*[x\*]\s*(?:100|10)\s*\/\s*(\d+)$/i);
  if (pctMatch) {
    const numCol = parseInt(pctMatch[1], 10);
    const denCol = parseInt(pctMatch[2], 10);
    return {
      targetCol,
      expr,
      type: 'pct',
      sourceCols: [numCol, denCol],
    };
  }

  // Check for subtraction: e.g. 1-3, 2-5
  const diffMatch = expr.match(/^(\d+)\s*-\s*(\d+)$/);
  if (diffMatch) {
    const c1 = parseInt(diffMatch[1], 10);
    const c2 = parseInt(diffMatch[2], 10);
    return {
      targetCol,
      expr,
      type: 'diff',
      sourceCols: [c1, c2],
    };
  }

  // Check for addition: e.g. 3+21, 5+11+17, 3+7+15
  if (expr.includes('+')) {
    const parts = expr.split('+').map((p) => parseInt(p.trim(), 10)).filter((n) => !isNaN(n));
    return {
      targetCol,
      expr,
      type: 'sum',
      sourceCols: parts,
    };
  }

  // Plain column indicator
  const singleNum = parseInt(expr, 10);
  if (!isNaN(singleNum)) {
    return {
      targetCol: singleNum,
      expr,
      type: 'plain',
      sourceCols: [singleNum],
    };
  }

  return null;
};

/**
 * Get full formula map and column index mapping for a section
 */
export const getSectionFormulaContext = (section: SectionData) => {
  let formulaRowIndex = -1;

  for (let i = 0; i < section.rows.length; i++) {
    const r = section.rows[i];
    if (isFormulaRow(r)) {
      formulaRowIndex = i;
      break;
    }
  }

  if (formulaRowIndex === -1) {
    return null;
  }

  let totalRowIndex = -1;
  for (let i = formulaRowIndex + 1; i < section.rows.length; i++) {
    const r = section.rows[i];
    if (isTotalRow(r, i, formulaRowIndex)) {
      totalRowIndex = i;
      break;
    }
  }

  const formulaRow = section.rows[formulaRowIndex];
  const formulaDefs: FormulaDef[] = [];
  const colToFormulaMap = new Map<number, FormulaDef>();

  formulaRow.cells.forEach((cell, idx) => {
    const def = parseFormulaString(cell.text, idx + 1);
    if (def) {
      formulaDefs.push(def);
      colToFormulaMap.set(def.targetCol, def);
    }
  });

  return {
    formulaRowIndex,
    totalRowIndex,
    formulaRow,
    formulaDefs,
    colToFormulaMap,
  };
};

/**
 * Recalculate a section according to its formulas and summary row
 */
export const recalculateSection = (section: SectionData): SectionData => {
  const ctx = getSectionFormulaContext(section);
  if (!ctx) {
    // Check if it has a total row without formula row, auto-sum simple numeric columns
    return recalculateSimpleTotalRow(section);
  }

  const { formulaRowIndex, totalRowIndex, formulaDefs, colToFormulaMap } = ctx;
  const newRows: TableRow[] = section.rows.map((row) => ({
    ...row,
    cells: row.cells.map((c) => ({ ...c })),
  }));

  // Identify data rows: rows between formula row and total row (or end of table)
  const dataRowIndices: number[] = [];
  const endIdx = totalRowIndex !== -1 ? totalRowIndex : newRows.length;
  for (let i = formulaRowIndex + 1; i < endIdx; i++) {
    const row = newRows[i];
    if (!row.isHeaderRow && row.cells.length > 0) {
      dataRowIndices.push(i);
    }
  }

  if (dataRowIndices.length === 0 && totalRowIndex === -1) {
    return section;
  }

  // For each data row, calculate formula columns
  for (const rIdx of dataRowIndices) {
    const row = newRows[rIdx];
    const offset = row.cells.length - ctx.formulaRow.cells.length;
    if (offset < 0) continue;

    // Read current values into a map of colNumber -> value
    const colValues = new Map<number, number>();
    const isPctCol = new Set<number>();

    formulaDefs.forEach((def, fIdx) => {
      const cellIdx = offset + fIdx;
      if (cellIdx < row.cells.length) {
        const val = parseCleanNumber(row.cells[cellIdx].text);
        colValues.set(def.targetCol, val);
        if (def.type === 'pct') {
          isPctCol.add(def.targetCol);
        }
      }
    });

    // Multi-pass evaluation to resolve dependencies
    for (let pass = 0; pass < 4; pass++) {
      for (const def of formulaDefs) {
        if (def.type === 'plain') continue;

        if (def.type === 'sum') {
          let sum = 0;
          let hasInputs = false;
          for (const srcCol of def.sourceCols) {
            if (colValues.has(srcCol)) {
              sum += colValues.get(srcCol) || 0;
              hasInputs = true;
            }
          }
          if (hasInputs) {
            colValues.set(def.targetCol, sum);
          }
        } else if (def.type === 'diff') {
          const v1 = colValues.get(def.sourceCols[0]) || 0;
          const v2 = colValues.get(def.sourceCols[1]) || 0;
          colValues.set(def.targetCol, Math.max(0, v1 - v2));
        } else if (def.type === 'pct') {
          const num = colValues.get(def.sourceCols[0]) || 0;
          const den = colValues.get(def.sourceCols[1]) || 0;
          if (den > 0) {
            const pct = (num * 100) / den;
            colValues.set(def.targetCol, Math.round(pct * 10) / 10);
          } else {
            colValues.set(def.targetCol, 0);
          }
        }
      }
    }

    // Write back calculated values to row cells
    formulaDefs.forEach((def, fIdx) => {
      const cellIdx = offset + fIdx;
      if (cellIdx < row.cells.length && def.type !== 'plain') {
        const calculated = colValues.get(def.targetCol) || 0;
        const formatted = formatCalculatedValue(calculated, def.type === 'pct');
        row.cells[cellIdx] = {
          ...row.cells[cellIdx],
          text: formatted,
        };
      }
    });
  }

  // Calculate Total Row if present
  if (totalRowIndex !== -1 && dataRowIndices.length > 0) {
    const totalRow = newRows[totalRowIndex];
    const offset = totalRow.cells.length - ctx.formulaRow.cells.length;

    if (offset >= 0) {
      // Sum non-percentage columns across data rows
      const totalColSums = new Map<number, number>();

      formulaDefs.forEach((def, fIdx) => {
        const cellIdx = offset + fIdx;
        if (cellIdx >= totalRow.cells.length) return;

        if (def.type !== 'pct') {
          let sum = 0;
          for (const dIdx of dataRowIndices) {
            const dRow = newRows[dIdx];
            const dOffset = dRow.cells.length - ctx.formulaRow.cells.length;
            const dCellIdx = dOffset + fIdx;
            if (dCellIdx < dRow.cells.length) {
              sum += parseCleanNumber(dRow.cells[dCellIdx].text);
            }
          }
          totalColSums.set(def.targetCol, sum);
          totalRow.cells[cellIdx] = {
            ...totalRow.cells[cellIdx],
            text: sum.toString(),
          };
        }
      });

      // Recalculate percentage columns in total row using totals
      formulaDefs.forEach((def, fIdx) => {
        const cellIdx = offset + fIdx;
        if (cellIdx >= totalRow.cells.length) return;

        if (def.type === 'pct') {
          const num = totalColSums.get(def.sourceCols[0]) || 0;
          const den = totalColSums.get(def.sourceCols[1]) || 0;
          let pctText = '0%';
          if (den > 0) {
            const pct = Math.round(((num * 100) / den) * 10) / 10;
            pctText = `${pct}%`;
          }
          totalRow.cells[cellIdx] = {
            ...totalRow.cells[cellIdx],
            text: pctText,
          };
        }
      });
    }
  }

  return {
    ...section,
    rows: newRows,
  };
};

/**
 * Helper to auto-sum simple sections without explicit formula indicator row
 */
const recalculateSimpleTotalRow = (section: SectionData): SectionData => {
  let totalRowIndex = -1;
  for (let i = 0; i < section.rows.length; i++) {
    if (isTotalRow(section.rows[i])) {
      totalRowIndex = i;
      break;
    }
  }

  if (totalRowIndex <= 0) return section;

  const newRows: TableRow[] = section.rows.map((row) => ({
    ...row,
    cells: row.cells.map((c) => ({ ...c })),
  }));

  const totalRow = newRows[totalRowIndex];
  const dataRows = newRows.slice(0, totalRowIndex).filter((r) => !r.isHeaderRow);

  if (dataRows.length === 0) return section;

  // For each column in total row
  totalRow.cells.forEach((tCell, colIdx) => {
    // Skip label cells (e.g. index 0 or text containing 'សរុប')
    if (colIdx === 0 || tCell.text.includes('សរុប')) return;

    let hasNumeric = false;
    let sum = 0;
    for (const dRow of dataRows) {
      if (colIdx < dRow.cells.length) {
        const txt = dRow.cells[colIdx].text.trim();
        if (/^\d+(\.\d+)?$/.test(txt)) {
          hasNumeric = true;
          sum += parseFloat(txt);
        }
      }
    }

    if (hasNumeric) {
      totalRow.cells[colIdx] = {
        ...tCell,
        text: Math.round(sum).toString(),
      };
    }
  });

  return {
    ...section,
    rows: newRows,
  };
};
