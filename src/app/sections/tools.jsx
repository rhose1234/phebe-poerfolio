'use client'

import React from 'react'
import {  useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap/all';

export default function Tools() {

     const tools = [
        {
          image : "/asana.png",
          text : "Asana"
        },
         {
          image : "/azure.png",
          text : "Azure Devops"
        },
         {
          image : "/basecamp.png",
          text : "BaseCamp"
        },
         {
          image : "/clickup.png",
          text : "Clickup"
        },
         {
          image : "/draw.io.png",
          text : "Draw.io"
         },
          {
          image : "/github.png",
          text : "Github"
        },
         {
          image : "/googleworkspace.png",
          text : "Google Workspace"
        },
         {
          image : "/jira.png",
          text : "Jira"
        },
         {
          image : "/moqups.png",
          text : "Moqups"
        },
         {
          image : "/slack.png",
          text : "Slack"
        },
         {
          image : "/smartsheet.png",
          text : "Smart Sheet"
        },
         {
          image : "/teams.png",
          text : "Microsoft Teams"
        },
         {
          image : "/asana.png",
          text : "Asana"
        },
         {
          image : "/trello.png",
          text : "Trello"
        },
         {
          image : "/zoom.jpeg",
          text : "Zoom"
        }
      ]
    
    const fullTools = [...tools, ...tools]
    const toolsRef = useRef(null)
    useEffect(() => {
      if (!toolsRef.current) return;
    
      const container = toolsRef.current;
    
      gsap.to(container, {
        x: "-50%",
        duration: 10,
        repeat: -1,
        ease: "linear"
      });
    }, []);
    
    
  return (
    <div>
      {/* Tools section */}
      <div className="overflow-hidden w-full py-20 dark:bg-background bg-white ">
        <div
          className="toolsContainer flex gap-6 min-w-max"
          ref={toolsRef}
        >
          {fullTools.map((tool, index) => (
            <div
              key={index}
              className="bg-white dark:bg-background text-background dark:text-white shadow-md rounded-xl flex flex-col items-center text-center w-28 px-4 py-3
               shrink-0 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl" >
              <Image
                src={tool.image}
                alt={tool.text}
                width={70}
                height={70}
                className="w-16 h-16 object-contain mb-2"
              />
              <h5 className="font-semibold text-sm ">{tool.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
