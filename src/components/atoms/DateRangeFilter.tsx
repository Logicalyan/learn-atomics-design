import DatePicker from "react-datepicker";

interface DateRangeFilterProps {
  label: string;
  value: { start: Date | null; end: Date | null };
  onChange: (val: { start: Date | null; end: Date | null }) => void;
}

export default function DateRangeFilter({ label, value, onChange }: DateRangeFilterProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <DatePicker
        selectsRange
        startDate={value.start}
        endDate={value.end}
        onChange={(dates) => {
          const [start, end] = dates as [Date | null, Date | null];
          onChange({ start, end });
        }}
        isClearable
        placeholderText="Select date range"
        className="w-[220px] px-3 py-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
      />
    </div>
  );
}
