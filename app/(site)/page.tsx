"use client";
import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const revalidate = 60;
  return (
    <div>
      <h1 className="text-4xl md:text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Nicolas!
        </span>
      </h1>

      <p className="mt-1 md:mt-3 text-xs md:text-xl text-gray-600">
        {" "}
        Thank you for visiting my blog.{" "}
      </p>

      <h2 className="mt-10 md:mt-24 font-bold text-gray-700 text-lg md:text-3xl">
        My Posts
      </h2>

      <div className="mt-5 grid grid-cols-3 gap-3 md:gap-8">
        {projects.map((project) => (
          <Link
            href={`projects/${project.slug}`}
            key={project._id}
            className="border border-gray-400 p-2 md:p-4 text-center hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={40}
                className="object-cover h-24 md:h-60 w-200 border border-gray-400"
              />
            )}
            <div className="font-extrabold text-gray-700 text-sm pt-1 md:text-2xl md:pt-2">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
