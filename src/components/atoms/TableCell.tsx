interface TableCellProps {
    children: React.ReactNode
    className?: string
}

export const TableCell: React.FC<TableCellProps> = ({ children, className }) => {
  return (
    <td className={`px-4 py-2 text-sm text-gray-700 ${className || ""}`}>
      {children}
    </td>
  );
};