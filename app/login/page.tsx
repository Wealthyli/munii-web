"use client";

import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { logo_green } from "@/public/images";
import { useAuth } from "@/contexts";
import { useRouter } from "next/navigation";

const page = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Function To Log User In
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      setTimeout(() => {
        router.push("/dashboard");
        setLoading(false);
      }, 2000);
    } catch (error) {
      setLoading(false);
      console.error("Error logging in:", error);
      alert("Login failed");
    }
  };

  return (
    <HStack
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <VStack w="50%">
        <VStack
          mt="50px"
          spacing={3}
          p={["30px 15px", "30px 20px", "30px", "30px"]}
          w={["90%", "90%", "70%", "700px"]}
          rounded="10px"
        >
          <Text
            as="h2"
            color="#000000"
            fontFamily="Poppins"
            fontSize="25px"
            fontWeight="600"
          >
            Admin Panel
          </Text>
          <Box as="form" onSubmit={handleLogin} w="full">
            <FormControl my="20px" isRequired>
              <Input
                borderColor="#808080"
                h="50px"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                focusBorderColor="brand.500"
              />
            </FormControl>
            <FormControl mb="20px" isRequired>
              <Input
                borderColor="#808080"
                h="50px"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                focusBorderColor="brand.500"
              />
            </FormControl>

            <Button
              my="20px"
              type="submit"
              h="50px"
              w="full"
              bg="black"
              color="white"
              _hover={{ bg: "black", color: "brand.500" }}
              isLoading={loading}
              loadingText="Logging In"
            >
              Log In
            </Button>
          </Box>
        </VStack>
      </VStack>
      <VStack
        w="50%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        bg="black"
      >
        <Box as={Link} href="/" width={["100px", "100px", "300px", "300px"]}>
          <Image
            src={logo_green}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="logo"
          />
        </Box>
      </VStack>
    </HStack>
  );
};

export default page;
