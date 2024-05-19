"use client";

import { useState } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { SideBar, TopBar } from "./index";
import { DashboardLayoutProps } from "@/types";


const DashboardLayout: React.FC<DashboardLayoutProps> = ({ menuItems }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [navState, setNavState] = useState(false);

  const handleItemClick = (key: string) => {
    setSelectedItem(key);
    setNavState(false);
  };

  return (
    <HStack alignItems="flex-start" spacing={0}>
      <SideBar
        menuItems={menuItems}
        selectedItem={selectedItem}
        navState={navState}
        setNavState={setNavState}
        onItemClick={handleItemClick}
      />
      <VStack
        ml={["0px", "0px", "250px", "250px"]}
        minH="100vh"
        w="100%"
        // bg="#F4F2EE"
      >
        <Box w="100%">
          <TopBar setNavState={setNavState} />
          <Box p={["10px", "10px", "20px", "20px"]}>
            {menuItems.find((item) => item.key === selectedItem)?.content}
          </Box>
        </Box>
      </VStack>
    </HStack>
  );
};

export default DashboardLayout;
