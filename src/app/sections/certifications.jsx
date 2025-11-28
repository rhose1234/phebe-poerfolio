"use client";

import Image from "next/image";


const certifications = [
  {
    title: "Product Management Internship",
    org: "HNG INTERNSHIP",
    image: "/hng.png",
  },
  {
    title: "Project Management and Business Analysis PRINCE2® and Agile Course",
    org: "Almond Careers UK",
    image: "/almond.png",
  },
  {
    title: "Foundational Startup Education",
    org: "SDC Startup School",
    image: "/sdc.png",
  },
  {
    title: "Project Management Virtual Internship",
    org: "Exelerate",
    image: "/xxlerate.png",
  },
  {
    title: "Professional Development Skills For The Digital Age",
    org: "ALX",
    image: "/alx.png",
  },
];

export default function Certifications() {


  return (
    <section className="py-16 px-10 md:px-20 lg:px-24  ">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto items-center gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="w-full shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="h-object-cover w-full"
              />
            </div>
            <div className="p-6 bg-black text-white ">
              <h3 className="font-semibold text-xl mb-2">{cert.title}</h3>
              <p className="">{cert.description}</p>
              <p className="mt-1 text-sm font-medium">
                {cert.org}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
