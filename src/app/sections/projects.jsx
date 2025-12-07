import Link from "next/link";
import { projectsData } from "../../../data/projectsData";
import Image from "next/image";

export default function Projects() {
  return (
    <div className=" px-6 md:px-20 py-20 bg-white dark:bg-black" id="projects">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center mb-16">My Projects</h1>

      <div className="grid gap-10">
        {projectsData.map(project => (
          <div
            key={project.slug}
            className="shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-white/10"
          >
            <Image
              width={400}
              height={300}
              src={project.images[0]}
              alt={project.title}
              className="w-full max-w-md h-64 object-cover rounded"
            />

            <div className="flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h2>
              <p><strong>Role:</strong> {project.role}</p>
              <p><strong>Type:</strong> {project.type}</p>
              <p><strong>Methodology:</strong> {project.methodology}</p>

            <Link href={`/projects/${project.slug}`} className="text-purple underline mt-4"> Read More </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
