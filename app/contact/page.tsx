import React from 'react'
import {
    Header,
    Footer,
    ContactUs,
    HowCanWeHelp
} from "@/components";


const page = () => {
    return (
        <>
            <Header />
            <main className="">
                <ContactUs />
                <HowCanWeHelp />
            </main>
            <Footer />
        </>
    )
}

export default page