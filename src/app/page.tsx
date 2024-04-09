"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import Button from "@/components/Button";

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(false);

  const addNewPost = () => {
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const body = (document.getElementById("body") as HTMLInputElement).value;
    const newPost = { title, body };

    if (title && body) {
      posts.unshift(newPost);
      setDisplay(false);
    }
  };

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
        <h1 className="font-header text-3xl sm:text-3xl md:text-4xl">
          fake blog
        </h1>
        <Button onClick={() => setDisplay(true)} text="New post" />
        {display && (
          <div
            className={`fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70`}
          >
            <form className="flex w-9/12 items-start justify-start rounded-md bg-white p-5 shadow-lg md:w-4/12">
              <div className="flex w-full flex-col gap-2 text-xl">
                <div className="item-center flex justify-between">
                  <h4 className="mb-2 font-semibold">Title</h4>
                  <button
                    onClick={() => setDisplay(false)}
                    type="button"
                    className="text-red-600"
                  >
                    <MdCancel />
                  </button>
                </div>
                <input
                  id="title"
                  type="text"
                  className="mb-4 w-full rounded-md bg-gray-200 px-3 py-2"
                  placeholder="Insert here..."
                />
                <h4 className="mb-2 font-semibold">Subtitle</h4>
                <input
                  id="body"
                  type="text"
                  className="mb-4 w-full rounded-md bg-gray-200 px-3 py-2"
                  placeholder="Insert here..."
                />
                <Button onClick={() => addNewPost()} text="Add" />
              </div>
            </form>
          </div>
        )}
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
            <h3 className="font-header text-2xl">{post.title}</h3>
            <p className="font-par text-base sm:text-lg">{post.body}</p>
            <hr className="border-t-1 mt-1 border-[#ccc]" />
          </article>
        ))}
      </section>
    </>
  );
}
