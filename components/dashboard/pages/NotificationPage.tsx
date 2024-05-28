import { ChatBox, NotificationList } from "@/components/notification";
import { notificationData } from "@/data";

import { NotificationPageProps } from "@/types";
import { HStack } from "@chakra-ui/react";
import React, { useState } from "react";

const NotificationPage: React.FC<NotificationPageProps> = ({ setNavState }) => {
  // usestate for current chat data
  const [currentChat, setCurrentChat] = useState({
    title: "",
    tag: "",
    content: "",
    timestamp: "",
  });
  // state to handle page toggle on mobile
  const [view, setView] = useState(0);

  return (
    <HStack w="full" alignItems="flex-start">
      <NotificationList
        view={view}
        setView={setView}
        setCurrentChat={setCurrentChat}
        setNavState={setNavState}
        notificationData={notificationData}
      />
      <ChatBox {...currentChat} view={view} setView={setView} />
    </HStack>
  );
};

export default NotificationPage;
