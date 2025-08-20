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

  const createPageRange = () => {
    const delta = 2; // pages around current
    const range: (number | '...')[] = [];
    const rangeWithDots: (number | '...')[] = [];

    // Always show first and last
    let l: number;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
        range.push(i);
      }
    }

    // Insert "..." where gaps are
    for (let i of range) {
      if (l) {
        if ((i as number) - l === 2) {
          rangeWithDots.push(l + 1);
        } else if ((i as number) - l > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i as number;
    }

    return rangeWithDots;
  };

  const pages = createPageRange();

  return (
    <div className="flex items-center justify-between p-2">
      <div className="text-xs text-gray-600">
        Page <strong>{page}</strong> of <strong>{totalPages}</strong> • {total} items
      </div>
      <div className="flex items-center gap-2">
        <PaginationButton disabled={!canPrev} onClick={() => canPrev && onPageChange(page - 1)}>
          Prev
        </PaginationButton>
        {pages.map((p, idx) =>
          p === '...' ? (
            <span key={`dots-${idx}`} className="px-2 text-gray-500">...</span>
          ) : (
            <PaginationButton
              key={p}
              active={page === p}
              onClick={() => onPageChange(p as number)}
            >
              {p}
            </PaginationButton>
          )
        )}
        <PaginationButton disabled={!canNext} onClick={() => canNext && onPageChange(page + 1)}>
          Next
        </PaginationButton>
      </div>
    </div>
  );
}
