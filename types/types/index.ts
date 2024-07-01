import { IconType } from "react-icons"
import { ReactNode, CSSProperties } from 'react';



export interface CardProp {
  title: string;
  text: string;
}

export interface TestimonialCardProp {
  image: any;
  text: string;
  name: string;
}

export interface ButtonProp {
  btnName: string;
  onclick: (key: any) => void;
  className: any;
}

export interface CustomButtonProp {
  color: string;
  disabled: any;
  routeTo: string;
  action: (key: any) => void;
  children: any;
  overrideStyle: any;
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
  opened: Boolean
}
export interface NotificationDataProps {
  title: string
  tag: string
  content: string
  timestamp: string
  opened: Boolean
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


export interface UserStatProps {
  title: string;
  value: string;
  percentage: string;
  comparedTo: string;
}


//Auth Props

export interface User {
  name: string;
  email: string;
}

export interface AuthContextProps {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

//About page props

export interface ValueCardProp {
  icon: any;
  title: string;
  description: string;
}

export interface MemberCardProp {
  name: string;
  title: string;
  image: any;
}

//input props
export interface TextInputProp {
  inputLabel?: string;
  overrideStyles?: any;
  placeholder?: string;
  formType?: string;
  required?: boolean;
  children?: ReactNode;
  [key: string]: any;
}

export interface BlogPostProp {
  id: number;
  slug: any;
  title: string;
  category: string;
  coverImage: any;
  coverText: string;
  authorName: string;
  authorAvatar: any;
  date: any;
  shareCount: number;
  viewCount: number;
  readTime: any;
  blogContent: string;
  faceBookCount: number;
  pinterestCount: number;
  linkDlnCount: number;
}

export interface SeriesCardProp {
  blogImage: any;
  title: string;
  date: any;
}
