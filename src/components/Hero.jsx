import {
  MessageCircle,
  PhoneCall,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const whatsappNumber = "917447709973";

  return (
    <section className="relative pt-24 text-center max-w-3xl mx-auto px-6 z-10">

      {/* Floating Particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-300 dark:bg-blue-600 rounded-full"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3], y: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-7xl font-extrabold text-blue-800 dark:text-white"
      >
        Marco Tech
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
      >
        Hyderabad’s Most Trusted Device Repair Experts
      </motion.p>

      {/* Hero Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mt-6 font-semibold
        text-blue-900 dark:text-blue-300"
      >
        {["Mobile Repair", "Laptop Repair", "MacBook Service", "Data Recovery"].map((item, i) => (
          <span key={i} className="bg-blue-100 dark:bg-blue-900/40 px-4 py-1 rounded-full text-sm shadow">
            <CheckCircle className="inline w-4 mr-1 text-blue-600 dark:text-blue-400" />
            {item}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        <motion.a
          whileHover={{ scale: 1.08 }}
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          className="bg-green-600 dark:bg-green-500 text-white px-7 py-3 rounded-xl shadow-lg text-lg font-semibold"
        >
          <MessageCircle className="inline w-5 mr-1" /> WhatsApp
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.08 }}
          href={`tel:+${whatsappNumber}`}
          className="bg-blue-700 dark:bg-blue-500 text-white px-7 py-3 rounded-xl shadow-lg text-lg font-semibold"
        >
          <PhoneCall className="inline w-5 mr-1" /> Call Now
        </motion.a>
      </div>

      {/* Divider */}
      <div className="mt-28 w-full h-[2px] bg-blue-200 dark:bg-blue-900/50" />
    </section>
  );
};

export default Hero;
