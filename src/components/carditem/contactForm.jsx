import React from "react";

const ContactForm = () => {
  return (
    <div className="border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-4 bg-white/5 backdrop-blur-md text-white rounded-xl row-span-3 col-span-2 flex flex-col gap-3">
      <div className="bg-pink-200 h-30 rounded-md flex flex-row justify-center items-center px-3 text-lg text-pink-950 font-semibold italic font-serif">"I learn from every mistake. <br/>Stay Foolish Stay hungry"</div>
      <form className="space-y-3">
        <div>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full mt-1 p-2 text-white bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-white/60"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full mt-1 p-2 text-white bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-white/60"
          />
        </div>
        <div>
          <textarea
            id="message"
            rows="4"
            placeholder="Your message..."
            className="w-full mt-1 p-2 text-white bg-transparent border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-white/60"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-pink-700 hover:bg-pink-600 text-white font-semibold rounded-md transition w-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
