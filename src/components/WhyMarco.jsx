// src/components/WhyMarco.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Clock, IndianRupee, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom"; 
function WhyMarco(showlink) {
  const items = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Chip-Level Repair",
      desc: "Advanced component-level restoring for motherboards & ICs",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Same-Day Service",
      desc: "Fast turnaround for urgent repair needs",
    },
    {
      icon: <IndianRupee className="w-10 h-10" />,
      title: "Affordable Pricing",
      desc: "Genuine parts with the best pricing guarantee",
    },
  ];

  return (
    <section className="py-24 px-6 text-center relative overflow-hidden
      bg-gradient-to-br from-blue-50 via-white to-blue-100 
      dark:from-[#0b1226] dark:via-[#0c142b] dark:to-[#090f20]">

      {/* Soft Gradient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent blur-3xl pointer-events-none"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold
        bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
      >
        Why Choose Us?
      </motion.h2>

      {/* Confidence Badge */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-6 inline-flex gap-3 items-center px-7 py-2 rounded-full
        bg-white/5 backdrop-blur-xl border border-blue-900/40
        shadow-[0_0_18px_rgba(0,115,255,0.25)]"
      >
        <Star className="w-5 text-yellow-400" />
        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
          100+ Happy Customers • 4.9⭐ Google Rating
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            whileHover={{
              scale: 1.08,
              y: -4,
              boxShadow: "0 0 32px rgba(0,115,255,0.45)"
            }}
            className="relative group bg-white/5 backdrop-blur-xl
            rounded-2xl p-8 border border-blue-900/40
            transition-all duration-300 shadow-[0_0_18px_rgba(0,115,255,0.18)]
            hover:shadow-[0_0_30px_rgba(0,115,255,0.35)]"
          >
            {/* Halo Glow */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 
              w-20 h-20 bg-blue-500/30 rounded-full blur-2xl opacity-0
              group-hover:opacity-100 group-hover:animate-pulse"
            ></div>

            <div className="mb-5 flex justify-center z-10 
              text-blue-500 dark:text-blue-300 drop-shadow-[0_0_10px_rgba(0,115,255,0.7)]">
              {item.icon}
            </div>

            <h3 className="font-bold text-xl 
              bg-gradient-to-r from-blue-300 to-blue-500
              bg-clip-text text-transparent">
              {item.title}
            </h3>

            <p className="text-sm mt-3 text-gray-400 dark:text-gray-300 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA – About Button */}
      {showlink&&(
        <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-10 py-3 
          rounded-xl text-lg font-semibold text-white
          bg-gradient-to-r from-blue-500 to-blue-700
          border border-blue-400/40
          shadow-[0_0_25px_rgba(0,115,255,0.45)] relative z-20
          hover:scale-105 hover:shadow-[0_0_40px_rgba(0,115,255,0.65)]
          active:scale-95 transition-all duration-300"
        >
          Learn More About Us
          <ShieldCheck className="w-5" />
        </Link>
      </motion.div>
      )}
     

    </section>
  );
}

export default WhyMarco;
