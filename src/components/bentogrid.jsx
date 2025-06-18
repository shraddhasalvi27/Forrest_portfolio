import React from "react";
import books from "../assets/books.jpg";
import LinksCard from "./carditem/Links";
import galaxy from "../assets/galaxy1.jpg";
import TechStackCard from "./carditem/techstacks";
import ContactForm from "./carditem/contactForm";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-6 gap-3 p-6 min-h-screen text-white">
      {/* Row 1: info */}
      <div className=" col-span-4 row-span-1 rounded-xl px-5 flex justify-between border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-4 bg-white/5 backdrop-blur-md text-white">
        {/* Profile + Role */}

        <div className="space-x-2 items-center">
          <img src={books} alt="Profile" className="w-30 h-20  object-cover" />
          <div>
            <h2 className="text-lg font-semibold mt-1">Shraddha Salvi</h2>
          </div>
          <div className="bg-pink-800 px-2  rounded-full mt-2 text-sm">
            fullstack Developer
          </div>
          {/* <div className="mt-5"><p className="text-xs text-gray">Stay foolish Stay Hungry</p></div> */}
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-1 text-sm text-white">
            <p>
              * Full Stack Developer (MERN) with hands-on project experience
            </p>
            <p>
              * From rural Ratnagiri, driven to build and uplift through tech
            </p>
            <p>* Always learning — React, Web3, automation, open source</p>
            <p>* Creative thinker blending logic, design, and curiosity</p>
          </div>
          <div className="ml-2">how to center a div?</div>
        </div>

        {/* Location + Time */}
        <div className="text-right space-y-1 flex items-end">
          <p className="text-sm text-gray-300 items-end"> Mumbai, India</p>
        </div>
      </div>

      {/* Row 2: time, links, photo */}
      <div className="col-span-1 row-span-1 rounded-xl flex flex-col space-y-2 text-center">
        {/* Time Display Row */}
        <div className="flex w-full gap-1">
          {/* Hour Block */}
          <div className="relative bg-pink-950 h-24 w-full rounded-md font-mono text-5xl font-bold flex items-center justify-center text-white">
            10
            <span className="absolute bottom-1 left-2 text-xs font-medium text-gray-200">
              PM
            </span>
          </div>

          {/* Minute Block */}
          <div className="relative bg-pink-950 h-24 w-full rounded-md font-mono text-5xl font-bold flex items-center justify-center text-white">
            33
            <span className="absolute bottom-1 right-2 text-xs font-medium text-gray-200">
              2025
            </span>
          </div>
        </div>

        {/* Footer Text */}
        <div className="w-full h-18 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Mumbai Location"
            className="w-full h-full black contrast-125"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120594.24800534273!2d72.74109994488365!3d19.082522313748853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63d59c8c39f%3A0xceb4b5b5c20483f6!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718703000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <LinksCard />

      <div className="col-span-1 row-span-1 rounded-xl shadow flex  justify-center ">
        {/* <div className="w-full bg-amber-100">hii</div> */}
        <img src={galaxy} className="object-cover rounded-md" />
      </div>

      <TechStackCard />

      {/* Row 3–4: project card + contact */}
      <div className="col-span-1 row-span-3 rounded-xl shadow p-4 flex items-center justify-center row-start-3 col-start-1 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        <span>Project Card</span>
      </div>

      <div className="col-span- row-span-1 rounded-xl shadow p-4 flex items-center justify-center row-start-2 col-start-2 animate-gradient text-white backdrop-blur-md border border-white/10">
 <span className="font-bold">Projects</span>
</div>


      {/* <div className="col-span-3 row-span-2 rounded-xl shadow p-4 row-start-4 col-start-2 bg-transparent"> */}

      <ContactForm/>
      <div className="col-span-1 row-span-1 rounded-xl shadow p-4 flex items-center justify-center row-start-3 col-start-2 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        <span>Project Card</span>
      </div>

      {/* </div> */}

      {/* Galaxy photo */}
      
    </div>
  );
};

export default BentoGrid;
