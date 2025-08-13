import React, { type ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'dark';
type ButtonShape = 'rounded' | 'squared';
type IconPosition = 'left' | 'right';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    onClick?: () => void;
    variant?: ButtonVariant;
    shape?: ButtonShape;
    icon?: ReactNode;
    iconPosition?: IconPosition;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    type = 'button',
    variant = 'primary',
    shape = 'rounded',
    icon,
    iconPosition = 'left',
    className = '',
    ...rest
}) => {
    const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 font-medium transition-colors';

    const variantClasses: Record<ButtonVariant, string> = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
        success: 'bg-green-500 hover:bg-green-600 text-white',
        dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    };

    const shapeClasses: Record<ButtonShape, string> = {
        rounded: 'rounded-lg',
        squared: 'rounded-none',
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClasses} ${variantClasses[variant]} ${shapeClasses[shape]} ${className}`}
            {...rest}
            >
            {icon && iconPosition === 'left' && <span className='flex-shrink-0'>{icon}</span>}
            {label && <span>{label}</span>}
            {icon && iconPosition === 'right' && <span className='flex-shrink-0'>{icon}</span>}
        </button>
    );
};

export default Button;