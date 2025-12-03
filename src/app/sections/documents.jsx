import React from "react";

export default function Documents() {
  const documents = [
    { name: "Project Charter", Link: "https://docs.google.com/document/d/1KpUyVkx3WfgXiN4tjjK3m2LJHNmTqozy8qcb0J3X5Ig/edit?usp=sharing" },
    { name: "Team Charter", Link: "https://docs.google.com/document/d/1XzilxrkvBeDOWT4_hUWOGFk7Pw45Rqtq/edit?usp=sharing&ouid=114047811467119915997&rtpof=true&sd=true" },
    { name: "Product Story", Link: "https://docs.google.com/document/d/1MMZzuqh_zIDYdjYZui63rqT38DrZUkNNU7c4e168h2E/edit?usp=sharing" },
    { name: "Requirement Gathering", Link: "https://docs.google.com/spreadsheets/d/1476jAkspe8dR4MzuerrZBJKVP4uhfDvv/edit?usp=sharing&ouid=114047811467119915997&rtpof=true&sd=true" },
    { name: "Risk Management", Link: "https://docs.google.com/spreadsheets/d/1nqk6w9jaSu3SDvy30UKqq5Z_0MhyXKcQ9BRS6PtUGLw/edit?usp=sharing" },
    { name: "Competitive analysis document", Link: "https://docs.google.com/document/d/1htaN7bcKvQznpk8a34SKOkbkSv_Ymc_e/edit?usp=sharing&ouid=114047811467119915997&rtpof=true&sd=true" },
    { name: "Gap Analysis", Link: "https://docs.google.com/spreadsheets/d/1K0nn7nftAPGhkLflWbKOK2YmSBA-7AEH/edit?usp=sharing&ouid=114047811467119915997&rtpof=true&sd=true" },
  ];

  return (
    <div className="px-10 md:px-20 lg:px-20 bg-white dark:bg-black py-10 md:py-20 lg:py-20">
     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center mb-16 text-black dark:text-white">
        Some Documents i Have Worked On
      </h2>
    <div className=" max-w-5xl md:max-w-7xl lg:max-w-7xl mx-auto  flex flex-col items-center gap-12 ">
      
      {/* Top row: 3 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full max-w-5xl">
        {documents.slice(0, 3).map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-center text-purple px-6 py-4 border border-purple rounded-full shadow-md hover:bg-purple hover:text-white transition-all duration-300"
          >
            <a
              href={doc.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-md"
            >
              {doc.name}
            </a>
          </div>
        ))}
      </div>

      {/* Bottom row: 4 items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center w-full max-w-7xl">
        {documents.slice(3).map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-center text-purple px-6 py-4 border border-purple rounded-full shadow-md hover:bg-purple hover:text-white transition-all duration-300"
          >
            <a
              href={doc.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-md"
            >
              {doc.name}
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
