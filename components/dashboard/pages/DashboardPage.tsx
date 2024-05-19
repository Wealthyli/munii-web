import { DashInfo } from "@/components/cards";
import { UserJoinedChart } from "@/components/charts";
import PerformanceChart from "@/components/charts/PerformanceChart";
import { HStack,  VStack } from "@chakra-ui/react";
import React from "react";

const DashboardPage = () => {
  return (
    <VStack w="full">
      <HStack
        w="full"
        justifyContent={["center", "center", "space-between", "space-between"]}
        flexWrap="wrap"
      >
        <DashInfo />
        <DashInfo />
        <DashInfo />
      </HStack>
      <HStack
        spacing={8}
        alignItems="flex-start"
        w="full"
        mt="10px"
        flexDirection={["column", "column", "row", "row"]}
      >
        <UserJoinedChart />
        <PerformanceChart />
      </HStack>
    </VStack>
  );
};

export default DashboardPage;
