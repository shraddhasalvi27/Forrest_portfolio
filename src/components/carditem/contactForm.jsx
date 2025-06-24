import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          alert("Message sent! ✅");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. ❌");
          setLoading(false);
        }
      );
  };

  return (
    <div className="text-sm border border-white/10 outline-1 outline-white/5 outline-offset-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-6 bg-white/5 backdrop-blur-md text-white rounded-2xl flex flex-col gap-4">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="text-sm w-full px-4 py-2 text-white bg-white/10 border border-white/10 rounded-md placeholder:text-white/60"
        />
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="text-sm w-full px-4 py-2 text-white bg-white/10 border border-white/10 rounded-md placeholder:text-white/60"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your message..."
          required
          className="text-sm w-full px-4 py-2 text-white bg-white/10 border border-white/10 rounded-md placeholder:text-white/60"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-2 font-semibold rounded-md bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 text-white hover:brightness-110 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
