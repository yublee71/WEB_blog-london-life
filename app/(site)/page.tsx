import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Nicolas!
        </span>
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        {" "}
        Thank you for visiting my blog.{" "}
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Posts</h2>

      <div className="mt-5 grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`projects/${project.slug}`}
            key={project._id}
            className="border border-gray-500 rounded-lg p-3 text-center hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={40}
                className="h-60 w-200 object-contain rounded-lg border border-gray-500"
              />
            )}
            <div className="font-extrabold text-gray-700 text-2xl py-2">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
