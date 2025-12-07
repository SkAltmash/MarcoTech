import Hero from "../components/Hero";
import {
  Cpu,
  Clock,
  IndianRupee,
  Star,
  CheckCircle,
  Wrench,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CompanyBrands from "../components/CompanyBrands";

const Home = () => {

  const reviews = [
    { name: "Rohit Kumar", review: "Laptop fixed in just 2 hours!", rating: 5 },
    { name: "Ayesha", review: "Highly trusted repair center!", rating: 5 },
    { name: "Sanjay", review: "Chip-level repair done perfectly!", rating: 4 },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-12 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-[#0a1124] dark:via-[#0e1630] dark:to-[#0b1226] text-gray-900 dark:text-gray-200 overflow-hidden">

      {/* Background Blur */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-900 dark:to-blue-700 opacity-40 blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* HERO */}
      <Hero />

      {/* WHY CHOOSE US */}
      <div className="py-20">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 text-center">
          Why Choose Us?
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6">
          {[
            { icon: <Cpu />, title: "Chip-Level Repair", desc: "Expert motherboard IC solutions" },
            { icon: <Clock />, title: "Same Day Service", desc: "Quick delivery for urgent repairs" },
            { icon: <IndianRupee />, title: "Affordable Pricing", desc: "Best cost with genuine parts" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-white dark:bg-[#111a33] shadow-lg border dark:border-blue-900/30 rounded-2xl p-8 text-center"
            >
              <div className="mb-4 flex justify-center text-blue-700 dark:text-blue-300">{item.icon}</div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm mt-2 opacity-80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    
      {/* TESTIMONIALS */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 text-center">
          Loved by Customers ❤️
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-[#111a33] p-6 rounded-2xl shadow-md border dark:border-blue-800"
            >
              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} fill="gold" stroke="none" className="w-5" />
                ))}
              </div>

              <p className="text-xs text-green-700 dark:text-green-400 text-center mt-2">
                <CheckCircle className="inline w-4" /> Verified Customer
              </p>

              <p className="text-sm text-center opacity-80 mt-3">
                "{r.review}"
              </p>

              <p className="text-blue-700 dark:text-blue-300 text-center font-semibold mt-3">
                — {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24">
        <Link to="/services"
          className="bg-blue-700 dark:bg-blue-500 text-white px-12 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Explore Services →
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 dark:text-gray-400 py-12 mt-24 border-t dark:border-blue-900/40">
        © {new Date().getFullYear()} Marco Tech. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Home;
