"use client";

import React, { useState, ReactElement, cloneElement } from "react";
import { Box, HStack, VStack } from "@chakra-ui/react";
import { SideBar } from "./index";
import { DashboardLayoutProps } from "@/types";

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ menuItems }) => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [navState, setNavState] = useState(false);

  const handleItemClick = (key: string) => {
    setSelectedItem(key);
    setNavState(false);
  };

  const SelectedContent = menuItems.find(
    (item) => item.key === selectedItem
  )?.content;

  return (
    <HStack alignItems="flex-start" spacing={0}>
      <SideBar
        menuItems={menuItems}
        selectedItem={selectedItem}
        navState={navState}
        setNavState={setNavState}
        onItemClick={handleItemClick}
      />
      <VStack ml={["0px", "0px", "250px", "250px"]} minH="100vh" w="100%">
        <Box w="100%">
          {React.isValidElement(SelectedContent) &&
            cloneElement(SelectedContent as ReactElement<any>, { setNavState })}
        </Box>
      </VStack>
    </HStack>
  );
};

export default DashboardLayout;
