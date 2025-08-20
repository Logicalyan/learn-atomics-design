import type { Column } from "@/types/table";
import { TableCell } from "../atoms/TableCell";
interface TableRowProps<T> {
    row: T;
    columns: Column<T>[];
    isSelected?: boolean;
    onSelect?: () => void;
}

export function TableRow<T>({ row, columns, isSelected, onSelect }: TableRowProps<T>) {
    return (
        <tr className="border-b hover:gray-200">
            <TableCell>
                <input 
                    type="checkbox" 
                    checked={isSelected} 
                    onChange={onSelect} 
                    className="w-4 h-4" 
                />
            </TableCell>
            {columns.map((col, i) => (
                <TableCell key={i} className={col.className}>
                    {col.render ? col.render(row) : (row as any)[col.key]}
                </TableCell>
            ))}
        </tr>
    )
}