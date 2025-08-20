import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/atoms/Input";

interface TableSearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const TableSearch: React.FC<TableSearchProps> = ({
    value,
    onChange,
    placeholder = "Search...",
}) => {
    return (
        <div className="w-full max-w-sm">
            <Input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                icon={<Search size={16} />}
                iconPosition="left"
                size="md"
            />
        </div>
    );
};

export default TableSearch;
