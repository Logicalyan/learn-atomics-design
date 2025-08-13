import { useMemo, useState } from 'react';
import { Table, THead, TBody, TR, TD } from '@/components/atoms/Table';
import type { ColumnDef } from '@/components/molecules/TableHeaderRow';
import type { SortDir } from '@/components/atoms/SortIcon';
import TableHeaderRow from '@/components/molecules/TableHeaderRow';
import TablePagination from '@/components/molecules/TablePagination';

export interface DataTableProps<T> {
  rows: T[];
  columns: ColumnDef<T>[];
  initialSortBy?: string | null;
  initialSortDir?: SortDir;
  pageSize?: number;
  className?: string;
  rowKey: (row: T, index: number) => string | number;
}

export default function DataTable<T>({
  rows,
  columns,
  initialSortBy = null,
  initialSortDir = null,
  pageSize = 10,
  className = '',
  rowKey,
}: DataTableProps<T>) {
  const [sortBy, setSortBy] = useState<string | null>(initialSortBy);
  const [sortDir, setSortDir] = useState<SortDir>(initialSortDir);
  const [page, setPage] = useState(1);

  const onSort = (colId: string) => {
    if (sortBy !== colId) {
      setSortBy(colId);
      setSortDir('asc');
      setPage(1);
    } else {
      setSortDir(prev => (prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'));
    }
  };

  const sorted = useMemo(() => {
    if (!sortBy || !sortDir) return rows;
    const col = columns.find(c => c.id === sortBy);
    if (!col) return rows;
    const factor = sortDir === 'asc' ? 1 : -1;
    return [...rows].sort((a, b) => {
      const av = col.accessor(a);
      const bv = col.accessor(b);
      // normalize to string/number for consistent sort
      const an = typeof av === 'number' ? av : String(av ?? '');
      const bn = typeof bv === 'number' ? bv : String(bv ?? '');
      if (an < bn) return -1 * factor;
      if (an > bn) return  1 * factor;
      return 0;
    });
  }, [rows, columns, sortBy, sortDir]);

  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = useMemo(
    () => sorted.slice((safePage - 1) * pageSize, safePage * pageSize),
    [sorted, safePage, pageSize]
  );

  return (
    <div className={`bg-white rounded-lg border border-gray-200`}>
      {/* Responsive scroll on mobile */}
      <div className="overflow-x-auto">
        <Table className={className}>
          <THead>
            <TableHeaderRow columns={columns} sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
          </THead>
          <TBody>
            {paged.map((row, i) => (
              <TR key={rowKey(row, i)} className="hover:bg-gray-50">
                {columns.map(col => (
                  <TD key={col.id} className={col.cellClassName}>
                    {col.accessor(row)}
                  </TD>
                ))}
              </TR>
            ))}
            {paged.length === 0 && (
              <TR>
                <TD className="py-8 text-center text-gray-500" colSpan={columns.length}>
                  No data
                </TD>
              </TR>
            )}
          </TBody>
        </Table>
      </div>
      <TablePagination page={safePage} pageSize={pageSize} total={total} onPageChange={setPage} />
    </div>
  );
}
