import React from "react";

const ContactForm = () => {
  return (
    <div className=" text-sm border border-white/10  outline-1 outline-white/5 outline-offset-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-6 bg-white/5 backdrop-blur-md text-white rounded-2xl row-span-3 col-span-2 flex flex-col gap-4">
      <form className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="text-sm font-inter w-full px-4 py-2 text-white bg-white/10 border border-white/10  outline-1 outline-white/5 outline-offset-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-white/60 transition"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className=" font-inter w-full px-4 py-2 text-white bg-white/10 border border-white/10 outline-1 outline-white/5 outline-offset-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-white/60 text-sm transition "
          />
        </div>
        <div>
          <textarea
            id="message"
            rows="4"
            placeholder="Your message..."
            className=" font-inter w-full px-4 py-2 text-white bg-white/10 border border-white/10  outline-1 outline-white/5 outline-offset-2 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-white/60 transition"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-6 py-2 font-semibold rounded-md bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 text-white hover:brightness-110 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
