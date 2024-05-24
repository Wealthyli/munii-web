import React from "react";
import { SubscriptionPageProps } from "@/types";
import { UserSubscriptionStats, UserubscriptionGraph, UserSubscriptionDetails } from "@/components/dashboard/index";
import { Select } from '@chakra-ui/react'
import { SubscriptionPageProps } from "@/types";


const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ setNavState }) => {
  return (
    <div className=" flex flex-col justify-center items-start gap-8 w-full overflow-hidden p-[18.03px]">
      <div className="flex items-start justify-between w-full">
        <h2 className="text-[24px] font-semibold  text-lgrey/01">Subscription Management</h2>
        <div className="flex gap-4">
          <div>
            <Select
              maxW="130px"
              h="35px"
              bg="rgba(85, 85, 85, 0.1)"
              placeholder="All Plans "
              focusBorderColor="black"
            >
              <option value='option1'>All Plans </option>

            </Select>
          </div>
          <div>
            <Select
              maxW="130px"
              h="35px"
              bg="rgba(85, 85, 85, 0.1)"
              placeholder="Monthly"
              focusBorderColor="black"
            >
              <option value='option1'>Monthly </option>

            </Select>
          </div>
        </div>
      </div>
      <UserSubscriptionStats />
      <UserubscriptionGraph />
      <UserSubscriptionDetails />
    </div>
  );
};

export default SubscriptionPage;
