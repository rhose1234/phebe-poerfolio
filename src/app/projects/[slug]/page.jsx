import { projectsData } from "../../../../data/projectsData";
import Image from "next/image";

export default async function ProjectPage({ params }) {
  
    const { slug } = await params;


  const project = projectsData.find(p => p.slug === slug);

  if (!project)
    return (
      <p className="text-center py-20 text-purple text-5xl">
        Project Not Found!
      </p>
    );

  return (
    <div className="px-6 md:px-20 py-20 text-black dark:text-white bg-white dark:bg-black">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>


     {/* Image  Section */}
      {project.images && project.images.length > 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-10">
          {project.images.slice(0).map((img, idx) => (
            <Image
              key={idx}
              src={img}
              alt={`${project.title} screenshot ${idx + 1}`}
              width={800} 
              height={500}
              className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      )}


      <div className="space-y-4">
        <p><strong>Role:</strong> {project.role}</p>
        <p><strong>Project Type:</strong> {project.type}</p>
        <p><strong>Team Size:</strong> {project.teamSize}</p>
        <p><strong>Methodology:</strong> {project.methodology}</p>
        <p><strong>Project Duration:</strong> {project.duration}</p>

        <h2 className="text-2xl font-bold mt-6">Project Description</h2>
        <p>{project.description}</p>

        <h2 className="text-2xl font-bold mt-6">Key Responsibilities</h2>
        <ul className="list-disc ml-6">
          {project.responsibilities.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="text-2xl font-bold mt-6">Key Metrics</h2>
        <ul className="list-disc ml-6">
          {project.metrics.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="text-2xl font-bold mt-6">Results & Impact</h2>
        <ul className="list-disc ml-6">
          {project.results?.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="text-2xl font-bold mt-6">Personal Reflection</h2>
        <p>{project.personalReflection}</p>
      </div>
    </div>
  );
}
