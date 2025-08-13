import React from 'react';

interface IconProps {
  children: React.ReactNode; // usually an SVG
  size?: number; // in px
  className?: string;
}

const Icon: React.FC<IconProps> = ({ children, size = 20, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  );
};

export default Icon;
