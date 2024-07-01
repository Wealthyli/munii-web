import React from 'react'
import {
    Header,
    Footer,
    Blog,
    BlogPost,
} from "@/components";
const page = () => {
    return (
        <>
            <Header />
            <main className="">
                <Blog />
                <BlogPost />
            </main>
            <Footer />
        </>
    )
}

export default page
