import { IconType } from "react-icons"
// import { notificationData } from '../data/index';


export interface CardProp {
  title: string;
  text: string;
}

export interface TestimonialCardProp {
  image: any;
  text: string;
  name: string;
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
  navState: Boolean;
  setNavState: (state: any) => void;
}

// Dashboard Page props

export interface DashboardPageProps {
  setNavState: (state: any) => void;
}

//Subscription Page Props

export interface SubscriptionPageProps {
  setNavState: (state: any) => void;
}



//Notification Page Props

export interface NotificationPageProps {
  setNavState: (state: any) => void;
}

// Notification Item Props
export interface NotificationItemProps {
  title: string
  tag: string
  content: string
  timestamp: string
  setView: (state: any) => void;
  setCurrentChat: (state: any) => void;
}
export interface NotificationDataProps {
  title: string
  tag: string
  content: string
  timestamp: string
}
export interface ChatBoxProps {
  title: string
  tag: string
  content: string
  timestamp: string
  view: Number
  setView: (state: any) => void;
}

export interface NotificationListProps {
  view: Number
  notificationData: NotificationDataProps[];
  setNavState: (state: any) => void;
  setCurrentChat: (state: any) => void;
  setView: (state: any) => void;
}


export interface SubscriptionDetail {
  id: number;
  date: string;
  status: string;
  avatar: string;
  customer: string;
  plan: string;
  revenue: string;
}


export interface Stat {
  title: string;
  value: string;
  percentage: string;
  comparedTo: string;
  color: string;
}

export interface UserStatProps {
  title: string;
  value: string;
  percentage: string;
  comparedTo: string;
  color: string;
  key: number;
}