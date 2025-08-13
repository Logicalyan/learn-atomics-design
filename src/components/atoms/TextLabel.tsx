import React from 'react';

interface TextLabelProps {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const sizeClasses: Record<TextLabelProps['size'], string> = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
};

const TextLabel: React.FC<TextLabelProps> = ({ text, size = 'md', className = '' }) => {
    return <span className={`${sizeClasses[size]} ${className}`}>{text}</span>;
};

export default TextLabel;
