import React from "react";
import { Header, Footer } from "@/components/main";
import {
  AboutUs,
  MeetOurTeam,
  OurMission,
  OurValues,
} from "@/components/about";
import CTA from "@/components/main/CTA";
const page = () => {
  return (
    <>
      <Header />
      <main className="">
        <AboutUs />
        <OurValues />
        <OurMission />
        <MeetOurTeam />
        {/* <FrequentAskQuestion />
        <OurCustomerStory /> */}
        <div className="mt-12">
            <CTA /> 
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
