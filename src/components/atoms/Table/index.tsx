import React from 'react';

export const Table: React.FC<React.HTMLAttributes<HTMLTableElement>> = ({ className = '', ...props }) => (
  <table className={`min-w-full text-left text-sm ${className}`} {...props} />
);

export const THead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className = '', ...props }) => (
  <thead className={`bg-gray-100 text-gray-700 ${className}`} {...props} />
);

export const TBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className = '', ...props }) => (
  <tbody className={className} {...props} />
);

export const TR: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ className = '', ...props }) => (
  <tr className={`border-b last:border-0 border-gray-200 ${className}`} {...props} />
);

export const TH: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({ className = '', ...props }) => (
  <th className={`px-4 py-2 font-semibold select-none ${className}`} {...props} />
);

export const TD: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({ className = '', ...props }) => (
  <td className={`px-4 py-2 align-middle ${className}`} {...props} />
);
