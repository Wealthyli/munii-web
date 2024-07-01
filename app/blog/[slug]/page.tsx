import React from 'react';
import {
    Header,
    Footer,
    Blog,
    BlogPost,
    BlogPostContent,
} from "@/components";

const Page = () => {
    return (
        <>
            <Header />
            <main className="">
                <BlogPostContent />
                {/* <BlogPost /> */}
            </main>
            <Footer />
        </>
    );
}

export default Page;
