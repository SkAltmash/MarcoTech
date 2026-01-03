import {
  MessageCircle,
  PhoneCall,
  CheckCircle,
  ShoppingBag,
  Laptop
} from "lucide-react"; // Added Laptop icon
import { motion } from "framer-motion";
import TextType from "./TextType";

const Hero = () => {
  const whatsappNumber = "917447709973";

  return (
    <section className="relative pt-24 text-center max-w-4xl mx-auto px-6 z-10">

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 min-h-[1.5em]"
      >
        <TextType
          text={[
            "Hyderabad’s Most Trusted Device Repair Experts",
            "Premium Refurbished Laptops at Unbeatable Prices",
            "Fast & Reliable MacBook Services"
          ]}
          typingSpeed={70}
          pauseDuration={2000}
          showCursor={true}
          cursorCharacter="|"
        />
      </motion.div>

      {/* Hero Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mt-8 font-semibold
        text-blue-900 dark:text-blue-300"
      >
        {[
          "Laptop Repair", 
          "Refurbished Laptops", 
          "MacBook Service", 
          "Data Recovery", 
          "Desktop Repair", 
          "Printer Service"
        ].map((item, i) => (
          <span 
            key={i} 
            className={`px-4 py-1 rounded-full text-sm shadow flex items-center gap-1
            ${item === "Refurbished Laptops" 
              ? "bg-blue-600 text-white dark:bg-blue-500" // Highlighted badge
              : "bg-blue-100 dark:bg-blue-900/40"}`}
          >
            {item === "Refurbished Laptops" ? (
              <ShoppingBag className="w-4 h-4" />
            ) : (
              <CheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            )}
            {item}
          </span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mt-10 flex-wrap">
        {/* NEW: Refurbished Laptops Link */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/refurbished-laptops" // Change this to your actual route
          className="bg-white dark:bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-7 py-3 rounded-xl shadow-lg text-lg font-bold flex items-center"
        >
          <Laptop className="w-5 h-5 mr-2" /> Shop Laptops
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          className="bg-green-600 dark:bg-green-500 text-white px-7 py-3 rounded-xl shadow-lg text-lg font-semibold flex items-center"
        >
          <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`tel:+${whatsappNumber}`}
          className="bg-blue-700 dark:bg-blue-500 text-white px-7 py-3 rounded-xl shadow-lg text-lg font-semibold flex items-center"
        >
          <PhoneCall className="w-5 h-5 mr-2" /> Call Now
        </motion.a>
      </div>

      {/* Divider */}
      <div className="mt-28 w-full h-[2px] bg-blue-200 dark:bg-blue-900/50" />
    </section>
  );
};

export default Hero;