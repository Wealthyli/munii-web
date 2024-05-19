import React from "react";
import {UserSubscriptionStats, UserubscriptionGraph, UserSubscriptionDetails} from "@/components/dashboard/index";

const SubscriptionPage = () => {
  return (
    <div className=" flex flex-col justify-center items-start gap-8 w-full">
      <h2 className="text-[24px] font-semibold  text-lgrey/01">Subscription Management</h2>
      <UserSubscriptionStats />
      <UserubscriptionGraph />
      <UserSubscriptionDetails/>
    </div>
  );
};

export default SubscriptionPage;
