import React from 'react';


type InputVariant = 'default' | 'error' | 'success';
type InputSize = 'sm' | 'md' | 'lg';
type IconPosition = 'left' | 'right';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: InputVariant;
    size?: InputSize;
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
}

export const Input: React.FC<InputProps> = ({
    variant = 'default',
    size = 'md',
    icon,
    iconPosition = 'left',
    className = '',
    ...props
}) => {
    const baseClasses = ' border rounded focus:outline-none focus:ring-2 transation-all w-full'

    const variantClasses: Record<InputVariant, string> = {
        default: 'border-gray-300 focus:border-blue-500 focus:ring-blue-300',
        error: 'border-red-500 focus:border-red-500 focus:ring-red-300',
        success: 'border-green-500 focus:border-green-500 focus:ring-green-300',
    };

    const iconColorClasses: Record<InputVariant, string> = {
        default: 'text-gray-500',
        error: 'text-red-500',
        success: 'text-green-500',
    };

    const sizeClasses: Record<InputSize, string> = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-md',
        lg: 'px-4 py-3 text-lg',
    };

    return (
        <div className='relative w-full'>
            {icon && iconPosition === 'left' && (
                <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconColorClasses[variant]}`}>
                    {icon}
                </span>
            )}

            <input
                className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : ''
                    } ${className}`}
                {...props}
            />

            {icon && iconPosition === 'right' && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    {icon}
                </span>
            )}
        </div>
    )
}