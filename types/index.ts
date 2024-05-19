import { IconType } from "react-icons"


export interface CardProp {
  title: string
  text: string
}

export interface TestimonialCardProp {
  image: any
  text: string
  name: string
}

// TopBar Props 
export interface TopBarProps {
  setNavState: (state: any) => void;
}

// Sidebar props 
export interface MenuItem {
  key: string;
  icon?: IconType;
}

export interface SideBarProps {
  menuItems: MenuItem[];
  selectedItem: string;
  navState: Boolean;
  setNavState: (state: any) => void;
  onItemClick: (key: string) => void;
}


// Dashboard Layout 
export interface MenuLayoutItem {
  key: string;
  content: React.ReactNode;
  icon?: IconType;
}

export interface DashboardLayoutProps {
  menuItems: MenuLayoutItem[];
}
