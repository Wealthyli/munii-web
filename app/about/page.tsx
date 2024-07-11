import React from 'react'
import { Header, Footer } from '@/components/main'
import { AboutUs, FrequentAskQuestion, MeetOurTeam, OurCustomerStory, OurMission, OurValues } from '@/components/about'

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