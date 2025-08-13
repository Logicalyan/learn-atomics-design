import React from "react";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}


export const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors
        ${active ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
    >
      <Icon size={20} />
      {label}
    </button>
  );
};
