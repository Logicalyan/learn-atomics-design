import { useMemo, useState } from 'react';
import { Table, THead, TBody, TR, TD } from '@/components/atoms/Table';
import type { ColumnDef } from '@/components/molecules/TableHeaderRow';
import type { SortDir } from '@/components/atoms/SortIcon';
import TableHeaderRow from '@/components/molecules/TableHeaderRow';
import TablePagination from '@/components/molecules/TablePagination';
import TableSearch from '@/components/molecules/TableSearch';
import { FilterSelect } from '@/components/molecules/FilterSelect';
import DateRangeFilter from '@/components/atoms/DateRangeFilter';

export interface DataTableFilter<T> {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  match: (row: T, value: string | null) => boolean;
}

export interface DataTableProps<T> {
  rows: T[];
  columns: ColumnDef<T>[];
  initialSortBy?: string | null;
  initialSortDir?: SortDir;
  pageSize?: number;
  className?: string;
  rowKey: (row: T, index: number) => string | number;
  searchableColumns?: string[];
  searchPlaceholder?: string;
  filters?: DataTableFilter<T>[]; // <-- NEW
  dateFilter?: {
    id: string;          // e.g. "createdAt"
    label: string;       // e.g. "Created Date"
    accessor: (row: T) => string | Date | null;
  };
}

export default function DataTable<T>({
  rows,
  columns,
  initialSortBy = null,
  initialSortDir = null,
  pageSize = 10,
  className = '',
  rowKey,
  searchableColumns = [],
  searchPlaceholder = 'Search...',
  filters = [],
  dateFilter,
}: DataTableProps<T>) {
  const [sortBy, setSortBy] = useState<string | null>(initialSortBy);
  const [sortDir, setSortDir] = useState<SortDir>(initialSortDir);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [filterValues, setFilterValues] = useState<Record<string, string | null>>({});
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
      start: null,
      end: null,
    });

  const handleSearch = (val: string) => {
    setQuery(val);
    setPage(1);
  };

  const handleFilterChange = (id: string, value: string | null) => {
    setFilterValues(prev => ({ ...prev, [id]: value }));
    setPage(1);
  };

  const onSort = (colId: string) => {
    if (sortBy !== colId) {
      setSortBy(colId);
      setSortDir('asc');
      setPage(1);
    } else {
      setSortDir(prev => (prev === 'asc' ? 'desc' : prev === 'desc' ? null : 'asc'));
    }
  };

  // 🔎 Filtering + Searching
  const filtered = useMemo(() => {
    let result = [...rows];

    if (query && searchableColumns.length > 0) {
      result = result.filter(r =>
        searchableColumns.some(colId => {
          const col = columns.find(c => c.id === colId);
          if (!col) return false;
          const val = col.accessor(r);
          return String(val).toLowerCase().includes(query.toLowerCase());
        })
      );
    }

    if (dateFilter && (dateRange.start || dateRange.end)) {
      result = result.filter(row => {
        const val = dateFilter.accessor(row);
        if (!val) return false;
        const d = new Date(val);
        const afterStart = !dateRange.start || d >= dateRange.start;
        const beforeEnd = !dateRange.end || d <= dateRange.end;
        return afterStart && beforeEnd;
      });
    }


    if (filters.length > 0) {
      result = result.filter(row =>
        filters.every(f => {
          const val = filterValues[f.id] || null;
          if (!val) return true;
          return f.match(row, val);
        })
      );
    }

    return result;
  }, [rows, query, searchableColumns, columns, filters, filterValues, dateFilter, dateRange]);

  // ↕️ Sorting
  const sorted = useMemo(() => {
    if (!sortBy || !sortDir) return filtered;
    const col = columns.find(c => c.id === sortBy);
    if (!col) return filtered;
    const factor = sortDir === 'asc' ? 1 : -1;
    return [...filtered].sort((a, b) => {
      const av = col.accessor(a);
      const bv = col.accessor(b);
      const an = typeof av === 'number' ? av : String(av ?? '');
      const bn = typeof bv === 'number' ? bv : String(bv ?? '');
      if (an < bn) return -1 * factor;
      if (an > bn) return 1 * factor;
      return 0;
    });
  }, [filtered, columns, sortBy, sortDir]);

  // 📄 Pagination
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = useMemo(
    () => sorted.slice((safePage - 1) * pageSize, safePage * pageSize),
    [sorted, safePage, pageSize]
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Toolbar: Search + Filters */}
      <div className="flex flex-col gap-3 p-3 md:flex-row md:items-end md:justify-between">
        {searchableColumns.length > 0 && (
          <TableSearch value={query} onChange={handleSearch} placeholder={searchPlaceholder} />
        )}

        <div className="flex gap-3 flex-wrap">
          {filters.length > 0 && filters.map(f => (
            <FilterSelect
              key={f.id}
              label={f.label}
              value={filterValues[f.id] ?? ''}
              onChange={(val) => handleFilterChange(f.id, val)}
              options={f.options}
            />
          ))}

          {dateFilter && (
            <DateRangeFilter
              label={dateFilter.label}
              value={dateRange}
              onChange={setDateRange}
            />
          )}
        </div>
      </div>

      {/* Table */}
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

      {/* Pagination */}
      <TablePagination page={safePage} pageSize={pageSize} total={total} onPageChange={setPage} />
    </div>
  );
}
