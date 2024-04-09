"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );
        const json = await response.json();
        setPosts(json);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header className="flex w-full flex-row items-center justify-between">
        <h1 className="font-header text-2xl sm:text-3xl md:text-4xl">
          fake blog
        </h1>
        <button
          type="button"
          className="rounded-md px-4 py-2 text-sm text-black sm:text-lg"
        >
          Add post
        </button>
      </header>
      <picture>
        <Image
          width={896}
          height={600}
          className="h-full w-full rounded-md bg-cover"
          src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="vinyl records"
        />
      </picture>
      <section className="flex flex-col gap-4">
        {posts.map((post) => (
          <article className="flex flex-col gap-4" key={post.id}>
            <h3 className="font-header text-3xl">{post.title}</h3>
            <p className="font-par">{post.body}</p>
            <hr className="border-t-1 mt-1 border-[#ccc]" />
          </article>
        ))}
      </section>
    </>
  );
}
