import Image from "next/image";

export default function Home() {
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
      <section className="flex flex-col gap-2">
        <h2 className="font-header text-xl sm:text-2xl md:text-3xl">
          Lorem ipsum dolor
        </h2>
        <p className="font-par text-sm sm:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ab
          sapiente, non doloremque repudiandae incidunt natus, voluptatum rerum
          quod asperiores autem officiis alias distinctio assumenda provident
          cupiditate quam nemo facere.
        </p>
        <hr className="border-t-1 mt-4 border-zinc-300" />
      </section>
    </>
  );
}
