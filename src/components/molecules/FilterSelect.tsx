export interface FilterOption {
    value: string;
    label: string;
}

interface FilterSelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: FilterOption[];
}

export const FilterSelect: React.FC<FilterSelectProps> = ({ label, value, onChange, options }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <select
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
            </select>
        </div>
    );
}

