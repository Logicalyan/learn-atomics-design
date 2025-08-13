export type SortDir = 'asc' | 'desc' | null;

export default function SortIcon({ dir }: { dir: SortDir }) {
  const base = 'w-3 h-3';
  return (
    <span className="inline-flex flex-col ml-1">
      <svg className={`${base} ${dir === 'asc' ? 'text-blue-600' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 14l5-5 5 5H7z" />
      </svg>
      <svg className={`${base} -mt-0.5 ${dir === 'desc' ? 'text-blue-600' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </span>
  );
}
