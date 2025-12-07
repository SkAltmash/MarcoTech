import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Glow Animation */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-blue-500/20 blur-3xl"
        initial={{ scale: 0.3, opacity: 0.4 }}
        animate={{ scale: 1.2, opacity: 0.8 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Rotating Chip Background */}
      <motion.div
        className="absolute border-[2px] border-blue-500/20 w-[300px] h-[300px] rounded-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Logo Animation */}
      <motion.img
        src={logo}
        alt="Marco Tech Logo"
        className="w-44 h-44 relative z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, type: "spring" }}
      />

      {/* Tagline */}
      <motion.span
        className="absolute bottom-20 text-gray-700 text-md font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        Repairing Technology, Restoring Life 💻✨
      </motion.span>
    </section>
  );
};

export default Splash;
