import React from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  Box,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import NotificationItem from "./NotificationItem";
import { BiSearch } from "react-icons/bi";
import { NotificationListProps } from "@/types";
import { GiHamburgerMenu } from "react-icons/gi";

const NotificationList: React.FC<NotificationListProps> = ({
  setCurrentChat,
  view,
  setView,
  setNavState,
  notificationData,
}) => {
  // Determine display value based on the current breakpoint
  const displayValue = useBreakpointValue({
    base: "none",
    md: "none",
    lg: "block",
    xl: "block",
  });

  return (
    <VStack
      alignItems="flex-start"
      w={["full", "full", "40%", "40%"]}
      // condition to toggle responsive view
      display={
        displayValue === "none" ? (view === 1 ? "none" : "flex") : "flex"
      }
      h="100vh"
      bg="#E9EBE3"
    >
      <Box w="full" p="20px">
        <HStack alignItems="center" justifyContent="flex-start">
          {/* Hamburger Toggle For Mobile  */}
          <Box mr="8px" display={["block", "block", "none", "none"]}>
            <GiHamburgerMenu
              fontSize="20px"
              onClick={() => setNavState(true)}
            />
          </Box>
          <Text
            as="h1"
            fontSize={["20px", "20px", "24px", "24px"]}
            fontWeight="600"
            color="#555555"
          >
            Notification
          </Text>
        </HStack>

        <InputGroup mt="20px" rounded="12px" bg="white">
          <Input h="50px" focusBorderColor="brand.500" placeholder="Search" />
          <InputRightElement h="50px">
            <BiSearch />
          </InputRightElement>
        </InputGroup>
      </Box>
      <VStack w="full" maxHeight="80vh" overflowY="scroll">
        {/* Mapping the Notification Item Component */}
        {notificationData.map((item, i) => {
          return (
            <NotificationItem
              key={i}
              title={item.title}
              tag={item.tag}
              content={item.content}
              timestamp={item.timestamp}
              setCurrentChat={setCurrentChat}
              setView={setView}
            />
          );
        })}
      </VStack>
    </VStack>
  );
};

export default NotificationList;
