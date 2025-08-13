// components/molecules/FormField/FormField.tsx
import React from 'react';
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';
import { ErrorMessage } from '../atoms/ErrorMessage';
import type { InputProps } from '../atoms/Input';

interface FormFieldProps extends Omit<InputProps, 'id'> {
    id: string;
    label: string;
    error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ id, label, error, ...inputProps }) => {
    return (
        <div className="flex flex-col gap-1">
            <Label htmlFor={id} text={label} />
            <Input id={id} {...inputProps} variant={error ? 'error' : inputProps.variant} />
            <ErrorMessage message={error} />
        </div>
    );
};
