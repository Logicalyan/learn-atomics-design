import { useState } from "react";
import { Input } from "./Input";

interface DatePickerProps{
    value?: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function DatePicker({
    value,
    onChange,
    className =""
}: DatePickerProps) {
    const [selected, setSelected] = useState(value || '');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(e.target.value);
        onChange(e.target.value || '');
    };
    
    return (
        <Input
            type="date"
            value={selected}
            onChange={handleChange}
            className={className}
        />
    )
}