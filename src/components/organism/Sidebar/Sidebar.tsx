import React from 'react'
import type { SidebarProps } from './Sidebar.types'
import { NavItem } from '@/components/Sidebar/atoms/NavItem'
const Sidebar: React.FC<SidebarProps> = ({ items, collapsed = false }) => {
  return (
    <aside
      className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}
    >
      {/* Logo / Header */}
      <div className="p-4 font-bold text-lg">
        {!collapsed ? 'My Dashboard' : 'MD'}
      </div>    
      {/* Navigation */}
      <nav className="flex-1">
        {items.map((item) => (
          <NavItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            href={item.href}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Footer or Collapse Button (optional) */}
      <div className="p-4 text-sm opacity-70">© 2025</div>
    </aside>
  )
}

export default Sidebar