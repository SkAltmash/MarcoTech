// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    rating: 5,
    review: "Quick service and my laptop feels brand new again. Highly recommended!",
  },
  {
    name: "Sana Fatima",
    rating: 5,
    review: "Chip-level repair done perfectly. Honest and transparent.",
  },
  {
    name: "Vikas Yadav",
    rating: 4,
    review: "Affordable pricing and fast delivery. Definitely trustworthy!",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto mt-24 px-6 text-center relative overflow-hidden">
      
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold
        bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
      >
        Loved by Customers ❤️
      </motion.h2>

      {/* Sub label */}
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
        100+ Verified Happy Clients
      </p>

      <div className="grid sm:grid-cols-3 gap-8 mt-14">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            whileHover={{
              scale: 1.07,
              y: -6,
              boxShadow: "0 0 30px rgba(0,115,255,0.45)",
            }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl p-6
            border border-blue-900/40 shadow-[0_0_18px_rgba(0,115,255,0.2)]
            transition-all"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 text-yellow-400">
              {[...Array(r.rating)].map((_, j) => (
                <Star
                  key={j}
                  className="w-5 fill-yellow-400 stroke-none 
                  drop-shadow-[0_0_6px_rgba(255,215,0,0.7)]"
                />
              ))}
            </div>

            {/* Verified */}
            <p className="text-xs text-green-400 font-medium text-center mt-2">
              <CheckCircle className="inline w-4 mr-1" /> Verified Customer
            </p>

            {/* Review */}
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              “{r.review}”
            </p>

            {/* Reviewer */}
            <p className="text-blue-400 font-semibold text-sm mt-4">
              — {r.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
