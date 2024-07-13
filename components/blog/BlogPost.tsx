"use client";
import { Select, Button, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BlogPostCard } from "../cards";
import TopReadBlog from "./TopReadBlog";
import { getBlogCategories, getBlogContent } from "@/utils";
import { Post } from "@/types";

const BlogPost = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<{ id: string; title: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedCategories, { props: { posts: fetchedPosts } }] = await Promise.all([
          getBlogCategories(),
          getBlogContent()
        ]);

        setCategories(fetchedCategories);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCatId = event.target.value;
    setSelectedCategory(selectedCatId === "" ? null : selectedCatId);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.categories.some(category => category.id === selectedCategory))
    : posts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="p-4 lg:px-[5rem] md:py-[1.5rem]">
        <nav className="flex items-center justify-between w-full ">
          <h1 className="text-4xl font-medium">Latest Articles</h1>
          <ul className="hidden md:flex gap-4 text-lg ">
            {categories.map(category => (
              <li key={category.id}>{category.title}</li>
            ))}
          </ul>
          <Select
            w="147px"
            h="48px"
            rounded="12px"
            borderColor="rgba(85, 85, 85, 0.2)"
            focusBorderColor="rgba(85, 85, 85, 0.2)"
            placeholder="Latest"
            onChange={handleCategoryChange}
            value={selectedCategory || ""}
          >
            <option value="">Latest</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.title}</option>
            ))}
          </Select>
        </nav>
        <div className="my-8 flex flex-wrap gap-4 items-center justify-evenly">
          {currentPosts.length > 0 ? (
            currentPosts.map(blog => (
              <BlogPostCard key={blog.id} {...blog} shareCount={10} />
            ))
          ) : (
            <p>No posts found for selected category.</p>
          )}
        </div>
        <Stack direction="row" spacing={4} align="center" justify="center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </Button>
          ))}
        </Stack>
      </section>
      <TopReadBlog />
    </>
  );
};

export default BlogPost;
