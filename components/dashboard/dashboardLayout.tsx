"use client";

import { useState } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { SideBar, TopBar } from "./index";
import { IconType } from "react-icons";

interface MenuItem {
  key: string;
  content: React.ReactNode;
  icon?: IconType;
}

interface DashboardLayoutProps {
  menuItems: MenuItem[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ menuItems }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [navState, setNavState] = useState(false);

  const handleItemClick = (key: string) => {
    setSelectedItem(key);
  };

  return (
    <HStack alignItems="flex-start" spacing={0}>
      <SideBar
        menuItems={menuItems}
        navState={navState}
        setNavState={setNavState}
        onItemClick={handleItemClick}
      />
      <VStack
        ml={["0px", "0px", "250px", "250px"]}
        minH="100vh"
        w="100%"
        bg="#F4F2EE"
      >
        <Box w="100%" p="0px 20px" mt="10px">
          <TopBar />
          {menuItems.find((item) => item.key === selectedItem)?.content}
        </Box>
      </VStack>
    </HStack>
  );
};

export default DashboardLayout;
