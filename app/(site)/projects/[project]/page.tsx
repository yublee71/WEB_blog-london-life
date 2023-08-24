import { getProject } from "@/sanity/sanity-utils";
import project from "@/sanity/schemas/project-schema";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

//href={`projects/${project.slug}`}

type Props = {
  params: { project: string }; //이해 필요
};

export default async function Project({ params }: Props) {
  //이해함 {params를 변수로 받을거고, 이 변수의 type은 Props}

  const slug = params.project; //이해함 (slug를 params 객체의 [project]값으로 assign 함)
  const project2 = await getProject(slug); //이해함 (위에서 받은 slug로 project를 받아 오는 것)

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow-lg font-extrabold">
          {project2.name}
        </h1>
        <a
          href={project2.url}
          title="View my project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project2.content} />
      </div>
      <Image
        src={project2.image}
        alt={project2.name}
        height={400}
        width={400}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
