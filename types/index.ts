import { IconType } from "react-icons"
import { ReactNode, CSSProperties } from 'react';



export interface CardProp {
  title: string;
  text: string;
  icon: any
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

const colors = {
  primary: "btn-brand bg-primary text-black ",
  default: "btn-brand text-primary bg-black",
};

export interface CustomButtonProp {
  color?: keyof typeof colors;
  disabled?: boolean | undefined;
  routeTo?: string;
  action?: (key?: any) => void;
  children?: any;
  overrideStyle?: any;
  [key: string]: any;
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



export interface SeriesCardProp {
  blogImage: any;
  title: string;
  date: any;
}

export interface SeriesBlogCardProp {
  title?: string;
  data: any;
}

export interface FAQCardProp {
  questionText: string;
  answerText: string;
}



/**
 * A raw post object from Sanity
 */
export interface PostRaw {
  _createdAt: string;
  slug: { current: string };
  title: string;
  body: {
    _type: string;
    _key: string;
    style: string;
    children: {
      _type: string;
      _key: string;
      text: string
    }[];
  }[];
  categories: { _id: string, title: string }[];
  publishedAt: string;
  author: { name: string, image: { asset: { _ref: string } } };
  mainImage: { asset: { url: string } };
  _id: string;
}

/**
 * A strongly typed post object
 */
export interface Post {
  createdAt?: string;
  slug?: string;
  title: string;
  body: string;
  categories: { id: string, title: string }[];
  publishedAt: string;
  author: string;
  authorImage?: string,
  mainImageUrl: string;
  id: string;
  shareCount?: number | string;
  snippet?: string
}

export interface BlogPostProp extends Post { }

export interface Comment {
  _id: string;
  name: string;
  email: string;
  comment: string;
  createdAt: string;
}