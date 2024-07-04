import React from 'react';
import {
    Header,
    Footer,
    BlogPostContent,
    TopReadBlog,
} from "@/components";

const Page = () => {
    return (
        <>
            <Header />
            <main className="">
                <BlogPostContent />
                <TopReadBlog />
            </main>
            <Footer />
        </>
    );
}

export default Page;
