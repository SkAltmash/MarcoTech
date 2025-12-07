// src/pages/Contact.jsx
import {
  Mail,
  PhoneCall,
  MapPin,
  MessageCircle,
  Clock,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const whatsappNumber = "917447709973";

const faqs = [
  {
    q: "Do you provide pickup & drop?",
    a: "Yes! We offer pickup and delivery service within Hyderabad city limits."
  },
  {
    q: "Is diagnosis free?",
    a: "Inspection is FREE if you go ahead with repair. Otherwise just ₹99."
  },
  {
    q: "Do you use original parts?",
    a: "We always use original or high-quality OEM compatible parts with warranty."
  },
  {
    q: "Do you give repair warranty?",
    a: "Yes — part & service warranty depends on issue type."
  }
];

const Contact = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFAQToggle = (i) => {
    setOpenFAQ(openFAQ === i ? null : i);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 
    dark:from-[#0a1124] dark:via-[#0e1630] dark:to-[#0b1226] min-h-screen py-32 px-6 text-gray-900 dark:text-gray-200">

      {/* Background Glow */}
      <motion.div
        className="absolute -top-28 right-0 w-[350px] h-[350px] 
        bg-blue-400 dark:bg-blue-900 rounded-full blur-[160px] opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-300">
            Contact Us
          </h1>
          <p className="text-lg mt-3 text-gray-700 dark:text-gray-300">
            Quick support for any hardware issue — reach us instantly!
          </p>
        </div>

        {/* Contact Info + WhatsApp Only */}
        <div className="max-w-4xl mx-auto bg-white/70 dark:bg-white/10 backdrop-blur-xl 
        rounded-2xl shadow-xl border dark:border-blue-900/40 p-8">

          <h2 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center">
            Get in Touch
          </h2>

          <div className="space-y-5 text-center">
            <p className="flex justify-center items-center gap-3 text-gray-800 dark:text-gray-300">
              <PhoneCall className="text-blue-700 dark:text-blue-300" /> +91 {whatsappNumber}
            </p>
            <p className="flex justify-center items-center gap-3 text-gray-800 dark:text-gray-300">
              <Mail className="text-blue-700 dark:text-blue-300" /> support@marcotech.in
            </p>
            <p className="flex justify-center items-center gap-3 text-gray-800 dark:text-gray-300">
              <MapPin className="text-blue-700 dark:text-blue-300" />
              Shastripuram, Hyderabad – Telangana
            </p>
            <p className="flex justify-center items-center gap-3 text-gray-800 dark:text-gray-300">
              <Clock className="text-blue-700 dark:text-blue-300" />
              Mon – Sat: 10:00 AM – 8:00 PM
            </p>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="flex items-center justify-center gap-2 mt-8 
            bg-green-600 dark:bg-green-500 text-white px-10 py-3 
            rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 space-y-4 max-w-3xl mx-auto">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-xl 
                p-4 rounded-xl shadow border dark:border-blue-900/40 cursor-pointer"
                onClick={() => handleFAQToggle(i)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {item.q}
                  </span>
                  <ChevronRight
                    className={`w-5 text-blue-600 dark:text-blue-400 transition-transform 
                    ${openFAQ === i ? "rotate-90" : ""}`}
                  />
                </div>

                {openFAQ === i && (
                  <motion.p
                    className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.a}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-6 text-center">
            Find Us Here
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border dark:border-blue-900/40">
            <iframe
              className="w-full h-[320px] sm:h-[380px]"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4129.677880425848!2d78.31378599061105!3d17.388050779159997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1765079205308!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-500 
      py-12 mt-24 border-t dark:border-blue-900/40">
        © {new Date().getFullYear()} Marco Tech. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Contact;
