import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ServiceTableVariant = "compact" | "standard";
export type ServiceTableAlignment = "left" | "center" | "right";
export type ServiceTableTone = "default" | "primary" | "accent";

export interface ServiceTableColumn {
  header: ReactNode;
  align?: ServiceTableAlignment;
  tone?: ServiceTableTone;
  width?: string;
}

interface ServiceTableProps {
  columns: ServiceTableColumn[];
  rows: ReactNode[][];
  variant?: ServiceTableVariant;
  caption?: string;
  firstColumnAsHeader?: boolean;
  className?: string;
}

const alignmentClasses: Record<ServiceTableAlignment, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const toneClasses: Record<ServiceTableTone, string> = {
  default: "text-[#C5C6C9]",
  primary: "font-semibold text-white",
  accent: "text-[#EEC569]",
};

export function ServiceTable({
  columns,
  rows,
  variant = "standard",
  caption,
  firstColumnAsHeader = true,
  className,
}: ServiceTableProps) {
  const isCompact = variant === "compact";

  return (
    <div
      className={cn(
        "overflow-x-auto rounded-xl border",
        isCompact
          ? "border-white/10 bg-[#1A1A1A]"
          : "border-[#D09947]/25 bg-[#0D0D0D]",
        className,
      )}
    >
      <table
        className={cn(
          "w-full border-collapse",
          isCompact ? "text-[13px] md:text-[14px]" : "min-w-[720px] text-[15px]",
        )}
      >
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-[#D09947]/15">
            {columns.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={cn(
                  "border-b border-[#D09947]/30 font-semibold text-[#EEC569]",
                  isCompact
                    ? "px-4 py-3.5 md:px-5"
                    : "px-5 py-4 text-[13px] font-bold uppercase tracking-[0.08em] md:px-7",
                  alignmentClasses[column.align ?? "left"],
                )}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={cn(
                "border-b border-white/[0.08] last:border-b-0",
                !isCompact && "odd:bg-white/[0.02] even:bg-white/[0.04]",
              )}
            >
              {row.map((cell, columnIndex) => {
                const column = columns[columnIndex];
                const cellClasses = cn(
                  isCompact ? "px-4 py-3.5 md:px-5" : "px-5 py-[18px] md:px-7",
                  alignmentClasses[column?.align ?? "left"],
                  toneClasses[column?.tone ?? (columnIndex === 0 ? "primary" : "default")],
                );

                return firstColumnAsHeader && columnIndex === 0 ? (
                  <th key={columnIndex} scope="row" className={cellClasses}>
                    {cell}
                  </th>
                ) : (
                  <td key={columnIndex} className={cellClasses}>
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
