import { useState } from "react";
import type { SidebarProps } from "./Sidebar.types";
import NavItem from "@/components/molecules/NavItem";
import Icon from "@/components/atoms/Icon";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar({
  items,
  collapsed: collapsedProp,
  defaultCollapsed = false,
  onToggle,

  mobileOpen: mobileOpenProp,
  defaultMobileOpen = false,
  onToggleMobile
}: SidebarProps) {
  // Manage internal state if parent doesn't control it
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const [internalMobileOpen, setInternalMobileOpen] = useState(defaultMobileOpen);

  const collapsed = collapsedProp ?? internalCollapsed;
  const mobileOpen = mobileOpenProp ?? internalMobileOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalCollapsed((prev) => !prev);
    }
  };

  const handleToggleMobile = () => {
    if (onToggleMobile) {
      onToggleMobile();
    } else {
      setInternalMobileOpen((prev) => !prev);
    }
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white text-red-500 flex flex-col transition-all duration-300 z-40
          ${collapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo + collapse button */}
        <div
          className={`p-4 px-6 font-bold text-lg ${collapsed
            ? "flex flex-col items-center gap-2"
            : "flex items-center justify-between"
            }`}
        >
          {/* Logo */}
          {!collapsed ? (
            <span>My Dashboard</span>
          ) : (
            <span className="text-sm">MD</span>
          )}

          {/* Collapse Toggle */}
          <button
            onClick={handleToggle}
            className={`p-1 rounded bg-white hover:bg-red-300 transition-colors hidden md:inline-flex ${collapsed ? "order-first" : ""
              }`}
            aria-label="Toggle Sidebar"
          >
            <Icon size={20}>
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Icon>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-1 px-2">
          {items.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              to={item.to}
              collapsed={collapsed}
              onClick={() => handleToggleMobile()} // close on mobile when link clicked
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 text-sm opacity-70">© 2025</div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={handleToggleMobile}
        />
      )}
    </>
  );
}
