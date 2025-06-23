import React from "react";
import Profile from "./carditem/Profile";
import Second from "./carditem/second";
import ContactForm from "./carditem/contactForm";
import galaxy from "../assets/galaxy1.jpg";
import MusicCard from "./carditem/music";

const Bento = () => {
  return (
    <div className=" font-inter flex flex-col min-h-screen gap-5">
      <div className="flex gap-3">
         <Profile />
         <MusicCard/>
      </div>
     
      <Second/>
      
      <div className="flex gap-5">
        <div className="flex-[4]">
                <ContactForm/>
              </div>
        <div className=" rounded-xl shadow flex-[3] ">
                {/* <div className="w-full bg-amber-100">hii</div> */}
                <img src={galaxy} className="object-cover rounded-md" />
              </div>
              
        
      </div>
    </div>
  );
};
export default Bento;
