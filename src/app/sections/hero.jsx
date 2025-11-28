"use client";

import React from "react";
import Image from "next/image";
// import { useRef } from 'react'
import Button from "../components/button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col-reverse gap-2 md:flex-row lg:flex-row items-center justify-center mb-10 items-center mt-8 md:mt-0 lg:mt-0 md:space-x-6 lg:space-x-6 px-10 md:px-20 lg:px-24">
      {/* {
  darkMode ? (
      <Image
        src="/hello.png"
        alt="Phebe waving"
        width={200}
        height={200}
        className="w-20 md:w-30 px-0"
      />
    ) : ( */}
      {/* <Image
        src="/blackwave.png"
        alt="Phebe waving"
        width={200}
        height={200}
        className="w-20 md:w-30 px-0"
      /> */}
      {/* )
}
*/}

      <div className="heroText w-full md:w-[50%] lg:w-[50%] text-left mt-8">
        <div className="mb-1 mt-2">
          <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-6">
            I&apos;m Phebe Testimony Akorede
          </h1>

          <p className="text-sm md:text-sm leading-relaxed mb-10 w-full">
            An IT Project Manager and Startup Operations Specialist with
            hands-on experience leading cross-functional teams, building
            structure for growing startups, and delivering high-impact technical
            projects.
          </p>

          <Button
            className="py-4 px-10 "
            href="https://docs.google.com/document/d/1Ad_OnkCHTzZ9782G7732JNZcOIfW0nmSkfRTYQAopLA/edit?usp=drivesdk"
          >
            Hire Me!
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-[50%] lg:w-[50%] flex justify-center">
        <Image
          src="/testimony.svg"
          alt="Phebe's image"
          width={80}
          height={80}
          className="heroImg  w-full max-w-[330px] lg:max-w-[430px] md:max-w-[400px] "
        />
      </div>
    </div>
  );
}
