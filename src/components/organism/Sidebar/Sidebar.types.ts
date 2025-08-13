import type { ReactNode } from "react";

export interface NavItemData {
  id: number;
  label: string;
  icon: ReactNode;
  to: string;
}

export interface SidebarProps {
  items: NavItemData[];

  /** Desktop collapsed state */
  collapsed?: boolean;                // now optional
  defaultCollapsed?: boolean;         // for uncontrolled mode
  onToggle?: () => void;               // triggered when toggled

  /** Mobile drawer state */
  mobileOpen?: boolean;                // now optional
  defaultMobileOpen?: boolean;         // for uncontrolled mode
  onToggleMobile?: () => void;         // triggered when toggled
}
