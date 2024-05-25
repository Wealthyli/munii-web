import React from "react";
import { NotificationItemProps } from "@/types";
import { Checkbox, HStack, Text, VStack } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  tag,
  content,
  timestamp,
  setView,
  setCurrentChat,
}) => {
  return (
    <HStack w="full" borderBottom="1px solid rgba(85, 85, 85, 0.2)" p="20px">
      <HStack pr="10px">
        <BsThreeDotsVertical />
        <Checkbox
          shadow="sm"
          colorScheme="brand"
          bg="white"
          rounded="8px"
          size="md"
          // defaultChecked
        ></Checkbox>
      </HStack>
      <VStack
        spacing={1.5}
        w="full"
        alignItems="flex-start"
        cursor="pointer"
        // Function to set the view state for mobile and to set chat data
        onClick={() => {
          setView(1);
          setCurrentChat({ title, tag, content, timestamp });
        }}
      >
        <HStack w="full" justifyContent="space-between">
          <Text
            as="span"
            fontSize={["13px", "14px", "15px", "15px"]}
            fontWeight="400"
            color="#555555"
          >
            {tag}
          </Text>
          <Text
            as="span"
            fontSize={["13px", "14px", "15px", "15px"]}
            fontWeight="400"
            color="#555555"
          >
            {timestamp}
          </Text>
        </HStack>
        <Text as="h2" fontSize="18px" fontWeight="500" color="#555555">
          {title}
        </Text>
        <Text
          as="h4"
          fontSize={["13px", "14px", "15px", "15px"]}
          fontWeight="400"
          color="#555555"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 1,
            whiteSpace: "normal",
          }}
        >
          {content}
        </Text>
      </VStack>
    </HStack>
  );
};

export default NotificationItem;
