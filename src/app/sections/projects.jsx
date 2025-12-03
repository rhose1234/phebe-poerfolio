import Image from 'next/image'
import React from 'react'

export default function Projects() {
  const projects = [
    {
      title : "The Genesis Conference – Project Experience",
      role : "Programs Team Lead",
      type : "Tech & Business Conference",
      methodology : "Kanban",
      img : "/genesis1.jpg"
    },
    {
      title : "TEDx Lagos – Project Experience",
      role : "Operations Team Member (Attendees’ Welfare)",
      type : "Tech Conference",
      methodology : "Kanban",
      img : "/tedx1.jpg"
    },
    {
      title : "Logistics Company Website –  Project Experience",
      role : "IT Project Manager",
      type : "Website Development",
      methodology : "Scrum",
      img : "/logistics1.png"
    },
    {
      title : "Travel Booking Website – Project Experience",
      role : "IT Project Manager",
      type : "Website Development",
      methodology : "Scrum",
      img : "/travel1.png"
    },
  ]
  
  return (
    <div className='Projects px-6 md:px-20 lg:px-20 py-20 text-black dark:text-white bg-white dark:bg-black'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center mb-16'>My Projects</h1>

      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-10  pb-6 flex flex-col md:flex-row lg:flex-row gap-12 items-center">
            <Image 
              src={project.img} 
              alt={project.title} 
              width={500} 
              height={500} 
              className="mt-4 w-full max-w-md" 
            />

            <div>
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-1"><strong>Role:</strong> {project.role}</p>
              <p className="mb-1"><strong>Type:</strong> {project.type}</p>
              <p className="mb-1"><strong>Methodology:</strong> {project.methodology}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
