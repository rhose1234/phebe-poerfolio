"use client";

import Image from "next/image";
import { useState } from "react";
import { FiX } from 'react-icons/fi';



const certifications = [
  {
    title: "Project Management and Business Analysis PRINCE2® and Agile Course",
    org: "Almond Careers UK",
    image: "/almond.png",
  },
  {
    title: "Product Management Internship",
    org: "HNG INTERNSHIP",
    image: "/hng.png",
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
  }];



export default function Certifications() {

const [selected , setSelected] = useState(null)

const  openModal = (cert) => setSelected(cert)
const closeModal = () => setSelected(null)


  return (
    <section className=" py-16 px-6 md:px-20 lg:px-20 bg-white dark:bg-black text-black dark:text-white" id="certifications">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center mb-16">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto items-center gap-6">
        {certifications.map((cert, index) => (
          <div
             onClick={() => openModal(cert)}   
            key={index}
            className="w-full shadow-lg rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
            <div className="relative lg:w-full md:w-[500px] w-full h-60 md:h-80">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="h-object-cover w-full"
              />
            </div>
            <div className="p-6 bg-black dark:backdrop-blur-md dark:bg-white/10 text-white ">
              <h3 className="font-semibold text-xl mb-2">{cert.title}</h3>
              <p className="">{cert.description}</p>
              <p className="mt-1 text-sm font-medium">
                {cert.org}
              </p>
            </div>
          </div>
        ))}
      </div>

       {
              selected && (
                <div className='fixed inset-0 backdrop-blur-md bg-white/10  flex justify-center items-center z-50' onClick={closeModal}>
                <div
                        className=' text-white rounded-lg max-w-3xl w-full px-10 py-10 relative'
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <button
                          className='absolute top-4 right-4 text-white'
                          onClick={closeModal}
                        >
                          <FiX size={24} />
                        </button>
            
                        <Image
                          width={800}
                          height={500}
                          src={selected.image}
                          alt={selected.title}
                          className='rounded mb-4 lg:w-[500px] md:w-[500px] w-full h-auto justify-center items-center mx-auto'
                        />
                      </div>
                    </div>
              )}
    </section>
  );
}
