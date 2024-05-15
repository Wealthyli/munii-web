"use client";

import React from "react";
import {
  DashboardLayout,
  NotificationPage,
  SubscriptionPage,
} from "@/components/dashboard/index";
import { DashboardPage } from "@/components/dashboard/index";
import { BiUser } from "react-icons/bi";
import { IoNotificationsOutline, IoWallet } from "react-icons/io5";

const page = () => {
  
  const menuItems = [
    { key: "Dashboard", content: <DashboardPage />, icon: BiUser },
    { key: "Notification", content: <NotificationPage />, icon: IoWallet },
    {
      key: "Subscription",
      content: <SubscriptionPage />,
      icon: IoNotificationsOutline,
    },
  ];

  return <DashboardLayout menuItems={menuItems} />;
};

export default page;
