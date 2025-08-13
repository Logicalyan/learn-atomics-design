import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}
const PaginationButton: React.FC<Props> = ({ active, className = '', ...props }) => (
  <button
    {...props}
    className={`px-3 py-1 rounded-md text-sm transition-colors
      ${active ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
      ${className}`}
  />
);
export default PaginationButton;
