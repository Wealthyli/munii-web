import React from "react";
import {
  DashboardLayout,
  NotificationPage,
  SubscriptionPage,
} from "@/components/dashboard/index";
import { DashboardPage } from "@/components/dashboard/index";
import { BiUser } from "react-icons/bi";

const page = () => {
  const menuItems = [
    { key: "Dashboard", content: <DashboardPage /> },
    { key: "Notification", content: <NotificationPage /> },
    { key: "Subscription", content: <SubscriptionPage /> },
  ];

  return <DashboardLayout menuItems={menuItems} />;
};

export default page;
