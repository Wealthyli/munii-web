"use client";

import React from "react";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  Button,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { GiStack } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IconType } from "react-icons";
import { logo } from "@/public/images/index";
import Image from "next/image";

interface MenuItem {
  key: string;
  icon?: IconType;
}

interface SideBarProps {
  menuItems: MenuItem[];
  navState: Boolean;
  setNavState: (state: any) => void;
  onItemClick: (key: string) => void;
}

// navData, navState, setNavState

const SideBar: React.FC<SideBarProps> = ({
  menuItems,
  navState,
  setNavState,
  onItemClick,
}) => {
  const width = navState ? "250px" : "0px";

  return (
    <VStack
      justifyContent="space-between"
      w={[width, width, "250px", "250px"]}
      bg="black"
      h="100vh"
      position="fixed"
      transition="0.5s"
      overflowX="hidden"
      top={"0px"}
      bottom={"0px"}
      color="white"
      whiteSpace="nowrap"
      zIndex={100}
      shadow="md"
    >
      <Box w="100%">
        <HStack
          alignItems="center"
          p="20px"
          pb="0"
          justifyContent="space-between"
        >
          <Image width={120} alt="logo" src={logo} />
          <Box color="black" display={["block", "block", "none", "none"]}>
            <IoMdClose onClick={() => setNavState(false)} />
          </Box>
        </HStack>
        <List pt="50px" spacing={2}>
          {menuItems?.map((item, i) => {
            return (
              <ListItem
                key={i}
                display="flex"
                alignItems="center"
                fontSize="15px"
                fontWeight="700"
                pl="20px"
                py="10px"
                cursor="pointer"
                onClick={() => onItemClick(item.key)}
                // bg={isActive(item.activeKey) ? "#EBE6DF" : "#FFFFFF"}
                // color={isActive(item.activeKey) ? "#FF9205" : "#191919"}
                // _hover={{ borderLeft: "3px solid #FF9205" }}
              >
                {/* <ListIcon as={item.icon} color="inherit" fontSize="20px" /> */}
                {item.key}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </VStack>
  );
};

export default SideBar;
