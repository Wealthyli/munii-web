"use client"

import { Blog, BlogPost } from '@/components/blog'
import { Header, Footer } from '@/components/main'
import React from 'react'


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
