// src/pages/Contact.jsx
import {
  Mail,
  PhoneCall,
  MapPin,
  MessageCircle,
  SendHorizonal,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Footer from "../components/Footer";

const whatsappNumber = "917447709973";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="
      min-h-screen pt-40 pb-24 px-6
      bg-gray-100 text-gray-800
      dark:bg-[#070d19] dark:text-gray-200
      transition-colors duration-500
    "
    >
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold 
          text-blue-700 dark:text-white">
          Get In{" "}
          <span className="text-blue-600">Touch</span>
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Reach out anytime — We’re here to help you fix your devices fast!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Card – Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
          bg-white border border-blue-200/40 text-gray-800
          dark:bg-black/30 dark:border-cyan-400/20 dark:text-gray-200
          backdrop-blur-xl p-8 rounded-2xl shadow-xl
          transition-colors duration-500
        "
        >
          <h2 className="text-xl font-bold text-blue-700  mb-4">
            Let’s Connect
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Have a device that needs fixing? Want a repair quote?
            Contact us and we will assist you right away.
          </p>

          {/* Contact Items */}
          <div className="flex flex-col gap-4">

            {/* 📧 Email */}
            <div
              onClick={() =>
                window.location.href =
                "mailto:s38888732@gmail.com?subject=Device Repair Inquiry"
              }
              className="
    group cursor-pointer p-4 rounded-lg flex items-center gap-4
    border border-blue-400/30 hover:bg-blue-100/50
    dark:border-cyan-400/20 dark:hover:bg-cyan-500/10 dark:hover:border-cyan-400/50
    transition-all duration-300
    "
            >
              <Mail
                className="
      w-6 text-blue-600
      dark:text-cyan-400
      group-hover:scale-110 transition
      "
              />
              <div>
                <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Email Us
                </p>
                <p className="text-blue-600 dark:text-cyan-300 text-sm">
                  s38888732@gmail.com
                </p>
              </div>
            </div>

            {/* 📞 Call */}
            <div
              onClick={() => window.location.href = `tel:+91${whatsappNumber}`}
              className="
    group cursor-pointer p-4 rounded-lg flex items-center gap-4
    border border-blue-400/30 hover:bg-blue-100/50
    dark:border-cyan-400/20 dark:hover:bg-cyan-500/10 dark:hover:border-cyan-400/50
    transition-all duration-300
    "
            >
              <PhoneCall
                className="
      w-6 text-blue-600
      dark:text-cyan-400
      group-hover:scale-110 transition
      "
              />
              <div>
                <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Call Anytime
                </p>
                <p className="text-blue-600 dark:text-cyan-300 text-sm">
                  +91 {whatsappNumber}
                </p>
              </div>
            </div>

            {/* 📍 Directions */}
            <div
              onClick={() =>
                window.open(
                  "https://www.google.com/maps?q=Shastripuram+Hyderabad",
                  "_blank"
                )
              }
              className="
    group cursor-pointer p-4 rounded-lg flex items-center gap-4
    border border-blue-400/30 hover:bg-blue-100/50
    dark:border-cyan-400/20 dark:hover:bg-cyan-500/10 dark:hover:border-cyan-400/50
    transition-all duration-300
    "
            >
              <MapPin
                className="
      w-6 text-blue-600
      dark:text-cyan-400
      group-hover:scale-110 transition
      "
              />
              <div>
                <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Visit Store
                </p>
                <p className="text-blue-600 dark:text-cyan-300 text-sm">
                  Shastripuram, Hyderabad
                </p>
              </div>
              
            </div>
             <a
            href={`https://wa.me/${whatsappNumber}`}
            className="
            w-full mt-6 py-3 rounded-lg text-center font-semibold
            bg-green-600 text-white hover:bg-green-500
           
            transition shadow-lg
            "
          >
            <MessageCircle className="w-5 inline-block mr-1" />
            Chat on WhatsApp
          </a>
          </div>


          {/* WhatsApp CTA */}
         
        </motion.div>

        {/* Right Card – Form */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="
          bg-white border border-blue-200/40 text-gray-800
          dark:bg-black/30 dark:border-cyan-400/20 dark:text-gray-200
          backdrop-blur-xl p-8 rounded-2xl shadow-xl
          transition-colors duration-500
        "
        >
          <h2 className="text-xl font-bold text-blue-700  mb-4">
            Send a Message
          </h2>

          <form className="space-y-4">
            {["Your Name", "Your Email", "What's this about?"].map(
              (placeholder, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  className="
                  w-full text-sm rounded-lg p-3 outline-none
                  border border-blue-300/40 bg-white text-gray-800
                  focus:border-blue-500
                  dark:border-cyan-400/20 dark:bg-transparent dark:text-gray-200
                  dark:focus:border-cyan-400
                  transition
                  "
                />
              )
            )}

            <textarea
              placeholder="Tell us your issue or ask a question..."
              className="
              w-full h-28 resize-none text-sm rounded-lg p-3 outline-none
              border border-blue-300/40 bg-white text-gray-800
              focus:border-blue-500
              dark:border-cyan-400/20 dark:bg-transparent dark:text-gray-200
              dark:focus:border-cyan-400
              transition
              "
            />

            <button
              type="button"
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsappNumber}?text=Hi! I need help with a repair.`,
                  "_blank"
                )
              }
              className="
              w-full py-3 rounded-lg text-sm font-bold
              bg-blue-600 text-white hover:bg-blue-500
        
              transition shadow-lg flex items-center justify-center gap-2
              "
            >
              <SendHorizonal className="w-5" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      
          </section>
  );
};

export default Contact;
