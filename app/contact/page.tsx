import { ContactUs, HowCanWeHelp } from '@/components/contact'
import { Header, Footer } from '@/components/main'
import React from 'react'


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