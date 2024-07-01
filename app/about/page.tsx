import React from 'react'
import {
    Header,
    Footer,
    AboutUs,
    OurValues,
    OurMission,
    MeetOurTeam,
    FrequentAskQuestion,
    OurCustomerStory
} from "@/components";


const page = () => {
    return (
        <>
            <Header />
            <main className="">
                <AboutUs />
                <OurValues />
                <OurMission />
                <MeetOurTeam />
                <FrequentAskQuestion />
                <OurCustomerStory />
            </main>
            <Footer />
        </>
    )
}

export default page