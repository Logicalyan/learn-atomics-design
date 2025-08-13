import React from 'react';
import { TR, TH } from '@/components/atoms/Table';
import SortIcon, { type SortDir } from '@/components/atoms/SortIcon';

export interface ColumnDef<T> {
  id: string;
  header: string | React.ReactNode;
  accessor: (row: T) => React.ReactNode | string | number | boolean | null | undefined;
  sortable?: boolean;
  className?: string;
  cellClassName?: string;
}

interface Props<T> {
  columns: ColumnDef<T>[];
  sortBy: string | null;
  sortDir: SortDir;
  onSort: (columnId: string) => void;
}

export default function TableHeaderRow<T>({ columns, sortBy, sortDir, onSort }: Props<T>) {
  return (
    <TR>
      {columns.map(col => (
        <TH
          key={col.id}
          className={`uppercase text-xs tracking-wide ${col.className ?? ''} ${col.sortable ? 'cursor-pointer select-none' : ''}`}
          onClick={col.sortable ? () => onSort(col.id) : undefined}
        >
          <span className="inline-flex items-center">
            {col.header}
            {col.sortable && <SortIcon dir={sortBy === col.id ? sortDir : null} />}
          </span>
        </TH>
      ))}
    </TR>
  );
}
