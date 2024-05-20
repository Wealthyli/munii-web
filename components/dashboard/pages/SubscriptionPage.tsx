import React from "react";
import {UserSubscriptionStats, UserubscriptionGraph, UserSubscriptionDetails} from "@/components/dashboard/index";
import DropDownMenu from "../DropDownMenu";

const menuData = [
  {
    text: 'Download',
    onClick: () => console.log('Download clicked'),
  },
  {
    text: 'Create a Copy',
    onClick: () => console.log('Create a Copy clicked'),
  },
  {
    text: 'Mark as Draft',
    onClick: () => console.log('Mark as Draft clicked'),
  },
  {
    text: 'Delete',
    onClick: () => console.log('Delete clicked'),
  },
  {
    text: 'Attend a Workshop',
    onClick: () => console.log('Attend a Workshop clicked'),
  },
];

const Monthly = [
  {
    text: 'Monthly',
    onClick: () => console.log('Monthly clicked'),
  },
  {
    text: 'Yearly',
    onClick: () => console.log('Yearly clicked'),
  },
];


const SubscriptionPage = () => {
  return (
    <div className=" flex flex-col justify-center items-start gap-8 w-full overflow-hidden">
      <div className="flex items-start justify-between w-full">
        <h2 className="text-[24px] font-semibold  text-lgrey/01">Subscription Management</h2>
        <div className="flex gap-4">
        <div>
          <DropDownMenu menuItems={menuData} buttonText="All Plans" />
        </div>
        <div>
          <DropDownMenu menuItems={Monthly} buttonText="Monthly" />
        </div>
        </div>
      </div>
      <UserSubscriptionStats />
      <UserubscriptionGraph />
      <UserSubscriptionDetails/>
    </div>
  );
};

export default SubscriptionPage;
