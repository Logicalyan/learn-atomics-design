import PaginationButton from '@/components/atoms/PaginationButton';

interface Props {
  page: number;            // 1-based
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function TablePagination({ page, pageSize, total, onPageChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 7); // simple cap

  return (
    <div className="flex items-center justify-between p-2">
      <div className="text-xs text-gray-600">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong> • {total} items
      </div>
      <div className="flex items-center gap-2">
        <PaginationButton disabled={!canPrev} onClick={() => canPrev && onPageChange(page - 1)}>
          Prev
        </PaginationButton>
        {pages.map(p => (
          <PaginationButton key={p} active={page === p} onClick={() => onPageChange(p)}>
            {p}
          </PaginationButton>
        ))}
        <PaginationButton disabled={!canNext} onClick={() => canNext && onPageChange(page + 1)}>
          Next
        </PaginationButton>
      </div>
    </div>
  );
}
