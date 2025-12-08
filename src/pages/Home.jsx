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
import WhyMarco from "@/components/WhyMarco";
import Testimonials from "@/components/Testimonials";
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
    <section className="mt-12 relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-[#0a1124] dark:via-[#0e1630] dark:to-[#0b1226] text-gray-900 dark:text-gray-200 overflow-hidden pb-10">

      {/* Background Blur */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-900 dark:to-blue-700 opacity-40 blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* HERO */}
      <Hero />
   
      {/* WHY CHOOSE US */}
    <WhyMarco showlink={true} />

    
      {/* TESTIMONIALS */}
     <Testimonials />

      {/* CTA */}
      <div className="text-center mt-24">
        <Link to="/services"
          className="bg-blue-700 dark:bg-blue-500 text-white px-12 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Explore Services →
        </Link>
      </div>

    
    </section>
  );
};

export default Home;
