import type { ReactNode } from "react";

interface TechnicalDataTableProps {
  headers: ReactNode[];
  rows: ReactNode[][];
  highlightColumn?: number;
  minTableWidth?: string;
  columnWidths?: string[];
}

/** Shared, horizontally-scrollable technical reference table for capability, route, and material data. */
export function TechnicalDataTable({
  headers,
  rows,
  highlightColumn,
  minTableWidth = "720px",
  columnWidths,
}: TechnicalDataTableProps) {
  return (
    <div className="w-full max-w-full overflow-x-auto border border-white/10 md:overflow-visible">
      <table className="w-full border-collapse text-left" style={{ minWidth: minTableWidth, tableLayout: columnWidths ? "fixed" : undefined }}>
        {columnWidths ? (
          <colgroup>
            {columnWidths.map((width) => <col key={width} style={{ width }} />)}
          </colgroup>
        ) : null}
        <thead className="bg-[#292624]">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border-b border-white/10 px-5 py-4 text-xs font-semibold uppercase tracking-[0.1em] text-[#EEC569]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-white/[0.07] last:border-0">
              {row.map((cell, columnIndex) => (
                <td key={columnIndex} className={`px-5 py-4 text-sm leading-relaxed ${columnIndex === highlightColumn ? "font-medium text-[#F4F1EC]" : "text-[#C5C6C9]"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
