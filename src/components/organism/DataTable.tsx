// src/components/organisms/DataTable.tsx
import { useState, useMemo, useEffect, useRef } from "react";
import type { Column } from "@/types/table";
import { TableRow } from "../molecules/TableRow";
import { SearchBar } from "../molecules/SearchBar";
import { Pagination } from "../molecules/Pagination";

interface FilterOption {
    key: string;
    label: string;
    options: string[];
}

interface DataTableProps<T extends { id: number | string }> {
    data: T[];
    columns: Column<T>[];
    searchableKeys?: (keyof T)[];
    pageSize?: number;
    filters?: FilterOption[]; // 👈 NEW
}

export function DataTable<T extends { id: number | string }>({
    data,
    columns,
    searchableKeys = [],
    pageSize = 10,
    filters = [],
}: DataTableProps<T>) {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

    // 🔎 Filter states
    const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
    const [showFilterModal, setShowFilterModal] = useState(false);

    const applyFilters = (rows: T[]) => {
        return rows.filter((row) =>
            Object.entries(activeFilters).every(([key, selected]) => {
                if (selected.length === 0) return true;
                return selected.includes(String((row as any)[key]));
            })
        );
    };

    // 🔎 Search + Filters combined
    const filteredData = useMemo(() => {
        let result = data;

        // Apply search
        if (search) {
            result = result.filter((row) =>
                searchableKeys.some((key) =>
                    String((row as any)[key]).toLowerCase().includes(search.toLowerCase())
                )
            );
        }

        // Apply filters
        result = applyFilters(result);

        return result;
    }, [search, data, searchableKeys, activeFilters]);

    // 📄 Pagination
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const pagedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return filteredData.slice(start, start + pageSize);
    }, [filteredData, currentPage, pageSize]);

    // ✅ Select
    const toggleSelect = (id: string | number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const pageIds = pagedData.map((d) => d.id);
    const isAllPageSelected = pageIds.every((id) => selectedIds.includes(id));
    const isSomePageSelected =
        pageIds.some((id) => selectedIds.includes(id)) && !isAllPageSelected;

    const toggleSelectAll = () => {
        if (isAllPageSelected) {
            setSelectedIds((prev) => prev.filter((id) => !pageIds.includes(id)));
        } else {
            setSelectedIds((prev) => [...new Set([...prev, ...pageIds])]);
        }
    };

    // ⏺ indeterminate handler
    const selectAllRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (selectAllRef.current) {
            selectAllRef.current.indeterminate = isSomePageSelected;
        }
    }, [isSomePageSelected]);

    return (
        <div className="bg-white shadow-md rounded-xl p-4">
            {/* Bulk Action */}
            {selectedIds.length > 0 && (
                <div className="mb-4 flex gap-2">
                    <button
                        onClick={() => alert(`Update ${selectedIds.length} records`)}
                        className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => {
                            alert(`Delete ${selectedIds.length} records`);
                            setSelectedIds([]);
                        }}
                        className="px-3 py-1 bg-red-600 text-white rounded-md text-sm"
                    >
                        Delete
                    </button>
                </div>
            )}

            {/* Search + Filter Button */}
            <div className="flex justify-between items-center mb-4">
                <SearchBar value={search} onChange={setSearch} placeholder="Search clients..." />
                {filters.length > 0 && (
                    <button
                        onClick={() => setShowFilterModal(true)}
                        className="px-3 py-1 bg-gray-200 rounded-md text-sm"
                    >
                        Filter
                    </button>
                )}
            </div>

            {/* Filter Modal */}
            {showFilterModal && (
                <div className="fixed inset-0 bg-black opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-lg font-semibold mb-4">Filters</h2>
                        {filters.map((filter) => (
                            <div key={filter.key} className="mb-4">
                                <p className="font-medium">{filter.label}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {filter.options.map((opt) => {
                                        const selected = activeFilters[filter.key]?.includes(opt);
                                        return (
                                            <label
                                                key={opt}
                                                className={`px-3 py-1 border rounded cursor-pointer ${selected ? "bg-blue-500 text-white" : "bg-gray-100"
                                                    }`}
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={selected}
                                                    onChange={(e) => {
                                                        setActiveFilters((prev) => {
                                                            const current = prev[filter.key] || [];
                                                            if (e.target.checked) {
                                                                return { ...prev, [filter.key]: [...current, opt] };
                                                            } else {
                                                                return { ...prev, [filter.key]: current.filter((x) => x !== opt) };
                                                            }
                                                        });
                                                    }}
                                                />
                                                {opt}
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                onClick={() => setShowFilterModal(false)}
                                className="px-3 py-1 border rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setShowFilterModal(false)}
                                className="px-3 py-1 bg-blue-600 text-white rounded-md"
                            >
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-sm font-semibold text-gray-600">
                        <tr>
                            <th className="px-4 py-2">
                                <input
                                    type="checkbox"
                                    ref={selectAllRef}
                                    checked={isAllPageSelected}
                                    onChange={toggleSelectAll}
                                    className="w-4 h-4"
                                />
                            </th>
                            {columns.map((col, i) => (
                                <th key={i} className={`px-4 py-2 ${col.className || ""}`}>
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {pagedData.map((row) => (
                            <TableRow
                                key={row.id}
                                row={row}
                                columns={columns}
                                isSelected={selectedIds.includes(row.id)}
                                onSelect={() => toggleSelect(row.id)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-4">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}
