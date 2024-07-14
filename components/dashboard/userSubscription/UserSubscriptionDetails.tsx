import React, { useState, useEffect, useRef } from "react";
import ButtonComponent from "../ButtonComponent";
import { Input, Select } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { UserSubscriptionDetail } from "../../../data/index";
import { motion } from "framer-motion";

const UserSubscriptionDetails: React.FC = () => {
  const [selected, setSelected] = useState<string>("All Subscribers");
  const [search, setSearch] = useState<boolean>(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearch(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const data = [
    { text: "All Subscribers", count: UserSubscriptionDetail.length },
    {
      text: "Active Subscribers",
      count: UserSubscriptionDetail.filter(
        (detail) => detail.status === "Active"
      ).length,
    },
    {
      text: "Cancelled Subscribers",
      count: UserSubscriptionDetail.filter(
        (detail) => detail.status === "Cancelled"
      ).length,
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center gap-[29px] w-full">
      <div className="flex items-start justify-between w-full flex-wrap sm:flex-row flex-col gap-4">
        <div className="rounded-3xl border border-dark-gray shadow-2xl text-[14px] text-grey/01 w-full flex items-start justify-between sm:w-[621px]">
          {data.map((item, index) => (
            <ButtonComponent
              key={index}
              text={item.text}
              count={item.count}
              onClick={() => setSelected(item.text)}
              selected={selected === item.text}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <motion.div
            ref={searchRef}
            className={`rounded-full border border-grey/10 ${search ? "w-[130px] rounded-2xl pr-[10px]" : "w-[45px] rounded-full pr-0"}  h-[45px] flex items-center justify-center`}
            initial={{ width: "45px" }}
            animate={{ width: search ? "130px" : "45px" }}
            transition={{ duration: 0.5 }}
          >
            {search && (
              <Input
                variant="unstyled"
                placeholder="Search"
                pl="8px"
                pr="0"
                w="100%"
              />
            )}
            <BiSearch onClick={() => setSearch(true)} />
          </motion.div>

          <div>
            <Select
              w="180px"
              rounded="16px"
              borderColor="rgba(85, 85, 85, 0.2)"
              focusBorderColor="rgba(85, 85, 85, 0.2)"
              placeholder="Filter"
            ></Select>
          </div>
        </div>
      </div>
      <div className="w-full border border-dark-gray shadow-2xl rounded-3xl flex flex-col items-start p-2  overflow-x-auto">
        <h2 className="text-[20px] text-grey/01 pl-[21px] py-2">{selected}</h2>
        <div className="w-full h-[1px] bg-dark-gray"></div>
        <table className="w-full">
          <thead className="w-full">
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Status</th>
              <th>Customer</th>
              <th>Plan</th>
              <th>Revenue</th>
            </tr>
          </thead>
          <tbody>
            {UserSubscriptionDetail.filter(
              (detail) =>
                selected === "All Subscribers" ||
                (selected === "Active Subscribers" &&
                  detail.status === "Active") ||
                (selected === "Cancelled Subscribers" &&
                  detail.status === "Cancelled")
            ).map((details) => (
              <tr key={details.id} className="border-t border-dark-gray">
                <td>{details.id}</td>
                <td>{details.date}</td>
                <td>
                  <span
                    className={`${details.status === "Active" ? "bg-[#00C608]" : "bg-[#CC3333]"} text-white px-[8px] py-[4px]`}
                  >
                    {details.status}
                  </span>
                </td>
                <td>
                  <div className="flex items-center gap-[6px]">
                    <img
                      src={details.avatar}
                      alt="avatar"
                      className="rounded-full w-8 h-8"
                    />{" "}
                    <span>{details.customer}</span>
                  </div>
                </td>
                <td>{details.plan}</td>
                <td>{details.revenue}/month</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSubscriptionDetails;
