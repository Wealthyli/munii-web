import { client } from "@/sanity/lib/client";
import { Post, PostRaw } from "@/types";
import { urlForImage } from '@/sanity/lib/image';


/**
 * Fetches blog content from Sanity and maps it to a strongly typed object
 *
 * @returns {Promise<{props: {posts: Post[]}}>} - A promise resolving to an object with a single property, `props`, which is an object containing a single property, `posts`, which is an array of `Post` objects.
 */
export async function getBlogContent(): Promise<{ props: { posts: Post[] } }> {
  const CONTENT_QUERY = `*[_type == "post"] {
    _createdAt,
    slug,
    title,
    body,
    categories[]-> {
      _id,
      title
    },
    publishedAt,
    author-> {
      name,
      image {
        asset {
        _ref
        }
      }
    },
    mainImage {
      asset-> {
        url
      }
    },
    _id
  }`;

  try {
    const content: PostRaw[] = await client.fetch(CONTENT_QUERY);

    const createSnippet = (text: string, limit: number) => {
      return text.length > limit ? text.slice(0, limit) + '...' : text;
    };


    // Map data to include only the relevant information
    const mappedPosts: Post[] = content.map(post => ({
      createdAt: post._createdAt,
      slug: post.slug.current,
      title: post.title,
      body: createSnippet(post.body[0]?.children[0]?.text|| '', 250),
      categories: post.categories.map(category => ({
        id: category._id,
        title: category.title
      })),
      publishedAt: post.publishedAt,
      author: post.author.name,
      authorImage: urlForImage(post.author.image.asset._ref),      
      mainImageUrl: post.mainImage?.asset?.url,
      id: post._id
    }));

    return {
      props: {
        posts: mappedPosts
      }
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);
    return {
      props: {
        posts: [] 
      }
    };
  }
}


export async function getBlogCategories() {
  const CONTENT_QUERY = `*[_type == "category"] { 
    title,
    _id
  }`;

  try {
    const content = await client.fetch(CONTENT_QUERY);
    const mappedContent = content.map((category: { _id: any; title: any; }) => ({
      id: category._id,
      title: category.title
    }));
    return mappedContent;
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return []; // Return empty array 
  }
}

export async function getBlogById(id: string): Promise<{ props: { post: Post | null } }> {
  const CONTENT_QUERY = `*[_type == "post" && _id == $id] {
    _createdAt,
    slug,
    title,
    body,
    categories[]-> {
      _id,
      title
    },
    publishedAt,
    author-> {
      name,
      image {
        asset {
          _ref
        }
      }
    },
    mainImage {
      asset-> {
        url
      }
    },
    _id
  }[0]`; // [0] to ensure we get only one result

  try {
    const post: PostRaw = await client.fetch(CONTENT_QUERY, { id });

    if (!post) {
      return {
        props: {
          post: null
        }
      };
    }

    const mappedPost: Post = {
      createdAt: post._createdAt,
      slug: post.slug.current,
      title: post.title,
      body: post.body[0]?.children[0]?.text,
      categories: post.categories.map(category => ({
        id: category._id,
        title: category.title
      })),
      publishedAt: post.publishedAt,
      author: post.author.name,
      authorImage: urlForImage(post.author.image.asset._ref), 
      mainImageUrl: post.mainImage?.asset?.url,
      id: post._id,
      snippet: post.body[0]?.children[0]?.text.slice(0, 250) + '...',   
    };

    return {
      props: {
        post: mappedPost
      }
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return {
      props: {
        post: null
      }
    };
  }
}