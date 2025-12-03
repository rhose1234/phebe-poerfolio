"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "The Genesis Conference – Project Experience",
      role: "Programs Team Lead",
      type: "Tech & Business Conference",
      methodology: "Kanban",
      img: "/genesis1.jpg",
      link: "",
    },
    {
      title: "TEDx Lagos – Project Experience",
      role: "Operations Team Member (Attendees’ Welfare)",
      type: "Tech Conference",
      methodology: "Kanban",
      img: "/tedx1.jpg",
      link: "",
    },
    {
      title: "Logistics Company Website –  Project Experience",
      role: "IT Project Manager",
      type: "Website Development",
      methodology: "Agile (Scrum)",
      img: "/logistics1.png",
      link: "",
    },
    {
      title: "Travel Booking Website – Project Experience",
      role: "IT Project Manager",
      type: "Website Development",
      methodology: "Agile (Scrum)",
      img: "/travel1.png",
      link: "",
    },
  ];

  return (
    <div className="Projects px-6 md:px-20 lg:px-20 py-20 text-black dark:text-white bg-white dark:bg-black">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center mb-16">
        My Projects
      </h1>

      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-10 pb-6 shadow-lg px-6 md:px-10 lg:px-10 rounded-xl flex flex-col md:flex-row gap-12 items-center 
              bg-white dark:bg-white/10
              min-h-[350px" >
            <Image
              src={project.img}
              alt={project.title}
              width={500}
              height={500}
              className="w-full max-w-md h-auto py-4 rounded mt-4"
            />

            <div className="flex flex-col justify-center h-full">
              <h2 className="text-xl md:text-3xl font-bold mb-2">{project.title}</h2>
              <p className="mb-1">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="mb-1">
                <strong>Type:</strong> {project.type}
              </p>
              <p className="mb-10">
                <strong>Methodology:</strong> {project.methodology}
              </p>
              <Link
                href={project.link}
                className="text-purple underline text-md"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
