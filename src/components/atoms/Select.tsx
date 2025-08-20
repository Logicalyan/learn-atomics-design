interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, options, ...props }) => {
    return (
        <div className="flex flex-col gap-1">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <select
                className={`border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                {...props}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}