"use client";

import React, { useState } from "react";
import {
  DashboardLayout,
  NotificationPage,
  SubscriptionPage,
} from "@/components/dashboard/index";
import { DashboardPage } from "@/components/dashboard/index";
import { BiUser } from "react-icons/bi";
import { IoNotificationsOutline, IoWallet } from "react-icons/io5";
import ProtectedRoute from "@/components/ProtectedRoute";

const page = () => {
  const [navState, setNavState] = useState(false);

  const menuItems = [
    {
      key: "Dashboard",
      content: <DashboardPage setNavState={setNavState} />,
      icon: BiUser,
    },
    {
      key: "Notification",
      content: <NotificationPage setNavState={setNavState} />,
      icon: IoWallet,
    },
    {
      key: "Subscription",
      content: <SubscriptionPage setNavState={setNavState} />,
      icon: IoNotificationsOutline,
    },
  ];

  return (
    <ProtectedRoute>
      <DashboardLayout
        navState={navState}
        setNavState={setNavState}
        menuItems={menuItems}
      />
    </ProtectedRoute>
  );
};

export default page;
