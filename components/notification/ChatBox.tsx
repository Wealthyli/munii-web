import { ChatBoxProps } from "@/types";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiArrowBack, BiTrash } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrAttachment, GrEmoji } from "react-icons/gr";
// Chat Component To Handle Message

const ChatBox: React.FC<ChatBoxProps> = ({
  title,
  tag,
  content,
  timestamp,
  view,
  setView,
}) => {
  return (
    <VStack
      w={["full", "full", "60%", "60%"]}
      p="20px"
      // condition to toggle responsive view
      display={view === 0 ? "none" : "flex"}
    >
      <HStack
        fontSize="20px"
        w="full"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* arrow back function  */}
        <BiArrowBack cursor="pointer" onClick={() => setView(0)} />
        <HStack>
          <BiTrash cursor="pointer" />
          <BsThreeDotsVertical cursor="pointer" />
        </HStack>
      </HStack>
      <VStack
        w="full"
        mt="30px"
        border="1px solid rgba(85, 85, 85, 0.2)"
        shadow="md"
        rounded="12px"
        p="20px"
      >
        <HStack
          borderBottom="1px solid rgba(85, 85, 85, 0.2)"
          w="full"
          justifyContent="flex-start"
        >
          <Text as="h2">To:</Text>
          <Input pl="0" variant="ghost" defaultValue={tag} />
        </HStack>
        <Textarea
          pr="0"
          pl="0"
          fontSize="16px"
          fontWeight="400"
          defaultValue={content}
          color="#555555"
          variant="ghost"
          minH={["350px", "350px", "280px", "280px"]}
          maxH={["350px", "350px", "280px", "280px"]}
          mb="10px"
          w="full"
        />
        <HStack w="full" justifyContent="space-between">
          <HStack fontSize="22px">
            <FormControl w="30px">
              <FormLabel mb="0" htmlFor="attachment">
                {" "}
                <GrAttachment fontSize="20px" cursor="pointer" />
              </FormLabel>
              <Input
                display={"none"}
                id="attachment"
                name="attachment"
                type="file"
              />
            </FormControl>

            <GrEmoji fontSize="22px" cursor="pointer" />
          </HStack>
          <Button
            bg="black"
            color="brand.500"
            p="10px 25px"
            _hover={{ color: "grey.500" }}
            rounded="10px"
          >
            Send
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ChatBox;
