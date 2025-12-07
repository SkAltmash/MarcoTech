import {
  MessageCircle,
  PhoneCall,
  Cpu,
  Clock,
  IndianRupee,
  Star,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const whatsappNumber = "917447709973";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reviews = [
    { name: "Rohit Kumar", review: "Laptop fixed in just 2 hours! Highly impressed.", rating: 5 },
    { name: "Ayesha", review: "Best repair service in Hyderabad!", rating: 5 },
    { name: "Sanjay", review: "Chip-level repair done perfectly!", rating: 4 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 pt-24 overflow-hidden">

      {/* ⭐ Floating Particles */}
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-300 rounded-full"
          initial={{ opacity: 0.4, y: 0 }}
          animate={{ opacity: [0.4, 1, 0.4], y: [-20, 20, -20] }}
          transition={{ duration: 5, repeat: Infinity, delay: i * 0.3 }}
          style={{
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
        />
      ))}

      {/* 🌊 Wavy Gradient */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-r 
        from-blue-200 to-blue-400 opacity-40 blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* HERO */}
      <div className="text-center max-w-3xl mx-auto relative px-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-7xl font-extrabold text-blue-800 tracking-tight"
        >
          Marco Tech
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-xl md:text-2xl font-medium text-gray-700"
        >
          Hyderabad’s Most Trusted Device Repair Experts
        </motion.p>

        {/* CTA */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <motion.a
            whileHover={{ scale: 1.08 }}
            className="bg-gradient-to-r from-green-600 to-green-500 text-white px-7 py-3 rounded-xl shadow-lg text-lg font-semibold"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
          >
            <MessageCircle className="inline w-5 mr-1" /> WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-7 py-3 rounded-xl shadow-lg text-lg font-semibold"
            href={`tel:+${whatsappNumber}`}
          >
            <PhoneCall className="inline w-5 mr-1" /> Call Now
          </motion.a>
        </div>
      </div>

      {/* Divider Wave */}
      <svg className="w-full mt-28" viewBox="0 0 1440 80">
        <path fill="#ffffff" fillOpacity="1"
          d="M0,64L120,53.3C240,43,480,21,720,21.3C960,21,1200,43,1320,53.3L1440,64V0H0Z" />
      </svg>

      {/* Highlights */}
      <div className="bg-white pb-20 pt-8">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Why Choose Us?</h2>

        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-6">
          {[
            { icon: <Cpu className="w-12 h-12 text-blue-700" />, title: "Chip-Level Repair" },
            { icon: <Clock className="w-12 h-12 text-blue-700" />, title: "Same Day Service" },
            { icon: <IndianRupee className="w-12 h-12 text-blue-700" />, title: "Affordable Cost" },
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-white shadow-lg border 
              rounded-2xl p-8 backdrop-blur-xl hover:shadow-blue-200 transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-blue-700 text-center">
          Loved by Customers ❤️
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
            >
              <div className="flex justify-center text-yellow-400">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} fill="gold" stroke="none" className="w-5" />
                ))}
              </div>
              <p className="text-gray-700 text-sm mt-3">“{r.review}”</p>
              <p className="text-blue-700 font-semibold mt-3">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto mt-28 px-6">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Our Location</h2>

        <div className="rounded-2xl overflow-hidden shadow-xl border mt-8">
          <iframe
            className="w-full h-[300px] sm:h-[360px]"
            allowFullScreen
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4129.677880425848!2d78.31378599061105!3d17.388050779159997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1765079205308!5m2!1sen!2sin"
          ></iframe>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-20">
        <Link
          to="/services"
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-12 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Explore Services →
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 py-12 mt-24 border-t">
        © {new Date().getFullYear()} Marco Tech. All Rights Reserved.
      </footer>

    </section>
  );
};

export default Home;
