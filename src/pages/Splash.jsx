// src/pages/Splash.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";

const Splash = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 60);

    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => {
      clearInterval(loadingInterval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-white text-gray-900
      dark:bg-[#020713] dark:text-gray-100
      transition-colors duration-700 ease-in-out"
    >

      {/* Glow Orb */}
      <motion.div
        className="absolute w-[430px] h-[430px] rounded-full blur-[200px]
        bg-blue-500/30 dark:bg-cyan-300/20"
        animate={{ scale: [0.85, 1.05, 0.85], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Rotating Frame */}
      <motion.div
        className="absolute w-[290px] h-[290px] rounded-2xl 
        border border-blue-500/30 dark:border-cyan-400/35
        shadow-[0_0_18px_rgba(0,145,255,0.2)] dark:shadow-[0_0_28px_rgba(0,255,255,0.25)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Marco Tech Logo"
        className="relative z-20 w-40 h-40
        drop-shadow-[0_0_18px_rgba(0,115,255,0.5)]
        dark:drop-shadow-[0_0_30px_rgba(0,255,255,0.45)]
        transition-all"
        initial={{ scale: 0.45, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.3, type: "spring" }}
      />

      {/* Progress Bar */}
      <div className="absolute top-[63%] w-44 sm:w-52 h-[6px] rounded-full 
      bg-gray-300/40 dark:bg-gray-700/60 backdrop-blur-md overflow-hidden">
        <motion.div
          className="h-full
          bg-gradient-to-r from-blue-500 to-blue-400
          dark:from-cyan-400 dark:to-blue-400
          shadow-[0_0_12px_rgba(0,115,255,0.4)]
          dark:shadow-[0_0_20px_rgba(0,255,255,0.45)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      {/* Tagline */}
      <motion.span
        className="absolute bottom-24 text-sm sm:text-lg font-semibold
        text-blue-600 transition-colors
        dark:bg-gradient-to-r dark:from-cyan-300 dark:to-blue-400
        dark:bg-clip-text dark:text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        Repairing Technology, Restoring Life ✨
      </motion.span>

    </section>
  );
};

export default Splash;
