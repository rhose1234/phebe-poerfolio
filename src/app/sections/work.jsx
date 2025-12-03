'use client'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { FiExternalLink, FiX } from 'react-icons/fi';

export default function WorkSample() {
    const worksamples = [
  {
    pic : "/worksample1.webp",
    title : "Product Story and Repository Setup on Github",
    description : "I was in the role of a Product Manager when I documented the full product story of a new digital product on GitHub. I created a clear, organized repository that outlined the product idea, purpose, structure, features, and early direction. Using GitHub’s folders, markdown documentation, and issue tracking, I provided a single source of truth the team could rely on throughout development. I defined the concept, wrote the product narrative, set up initial requirements, and supported the designers and developers as we worked in an Agile, iterative process. This documentation became the blueprint for the project, strengthened team alignment, reduced back-and-forth, and ensured a smooth foundation before development began."
  },
  {
    pic : "/worksample2.webp",
    title : "Project Schedule on a Trello Board",
    description : "I created a Kanban board on Trello   that mapped out every activity across all phases of the project. The board outlined each stage of the event, from initiation to execution.  By structuring the workflow on Trello, I made it easy for all team members to see what needed to happen at each phase,  and how the project was progressing. This visual system improved alignment, reduced confusion, and kept the entire event process organized from start to finish."
  },
  {
    pic : "/worksample3.webp",
    title : "Backlog Created on Azure Devops",
    description : "I created a structured backlog on Azure DevOps to support our development sprints and ensure the team had a clear, prioritized list of work items. As part of my role, I broke down the product requirements into user stories, tasks, and acceptance criteria, then organized them into a backlog that the developers could easily pull from during each sprint. Using Azure DevOps Boards, I set up work item categories, defined priorities, and aligned each story with the sprint goals. This made it easier for the team to understand what needed to be done, track progress, and maintain consistency throughout our Agile workflow. The backlog became the foundation of our sprint planning sessions and improved transparency and coordination across the entire team."
  },
  {
    pic : "/worksample4.webp",
    title : "User Flow Created Using Draw.io",
    description : "I acted in the role of a Business Analyst during the early stages of a software product when we were gathering requirements and defining how the application would function. At this point, the product did not yet have a clear vision, so my responsibility was to work with the team to understand user needs, identify key processes, and map out the flow of the future screens. Through collaborative discussions and analysis, we defined a structured process flow that clearly represented how users would interact with the product. This exercise helped the team align on the product’s functionality and laid the foundation for future design and development decisions."
  }
]

const [selected, setSelected] = useState(null)

const openModal = (work) => setSelected(work)
const closeModal = () => setSelected(null)

  return (
    <div>
      {/* Work samples section */}
      <div className='workSamples px-6 md:px-20 lg:px-20 py-20 text-black dark:text-white bg-white dark:bg-black'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center mb-16'>Work Samples</h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 md:gap-2 lg:gap-8'>
      {
       worksamples.map((work, index) => (
        <div key={index} className='rounded '>
          <Image width={500} height={400} src={work.pic} alt={work.title} className='rounded' onClick={() => openModal(work)}></Image>
          <h4 className='text-xl font-bold text-start mt-4'>{work.title}</h4>
      <div
                      className='flex justify-start items-center gap-2 text-purple font-semibold mt-3'
                      onClick={() => openModal(work)}
                    >
                      <span className='text-sm'>View Sample</span>
                      <FiExternalLink />
                    </div>
      
        </div>
       ))
      }
      </div>
      
      {
        selected && (
          <div className='fixed inset-0 bg-white/30 flex justify-center items-center z-50 ' onClick={closeModal}>
          <div
                  className='bg-white text-black dark:bg-black dark:text-white rounded-lg max-w-4xl shadow-xl w-full px-10 py-10 relative'
                  onClick={(e) => e.stopPropagation()} 
                >
                  <button
                    className='absolute top-4 right-4 text-black dark:text-white hover:text-purple transition'
                    onClick={closeModal}
                  >
                    <FiX size={24} />
                  </button>
      
                  <h2 className='text-4xl font-bold mb-8 text-center'>{selected.title}</h2>
                  <Image
                    width={800}
                    height={500}
                    src={selected.pic}
                    alt={selected.title}
                    className='rounded mb-4 w-[500px] justify-center items-center mx-auto'
                  />
                  <p className='text-start'>{selected.description}</p>
                </div>
              </div>
        )}
      </div>
    </div>
  )
}
