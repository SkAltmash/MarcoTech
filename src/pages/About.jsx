// src/pages/About.jsx
import {
  ShieldCheck,
  Star,
  Wrench,
  Cpu,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import CountUp from "@/components/CountUp";
import TiltedCard from '@/components/TiltedCard'
const whatsappNumber = "917447709973";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Google Rating", value: "4.9⭐", desc: "100+ Verified Reviews" },
    { label: "Years Experience", value: "3+ Years", desc: "Chip-Level Expertise" },
    { label: "Devices Repaired", value: "200+", desc: "Trusted Customers" },
  ];

  const skills = [
    "Troubleshooting & Diagnostics",
    "Laptop & Desktop Hardware Repair",
    "Chip-Level Board Repair",
    "Printer & Peripheral Support",
    "Hardware Installation & Upgrades",
    "Customer Communication",
  ];

  const education = [
    {
      title: "Certification in IT Hardware Support",
      org: "MKCL · YCMOU Recognized",
      period: "Nov 2024 – Feb 2025",
    },
    {
      title: "BCA (Bachelor of Computer Applications)",
      org: "Wahed Khan College, Amravati",
      period: "2022 – Ongoing",
    },
  ];

  const experience = [
    {
      role: "Computer Hardware Technician",
      company: "Computer Hardware Service Shop",
      location: "Hyderabad & Wardha",
      period: "Jan 2023 – Present",
      desc: "Daily service experience repairing laptops, desktops & printers for real customers.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 
      dark:from-[#0b1226] dark:via-[#0c142b] dark:to-[#090f20] 
      text-gray-900 dark:text-gray-200 min-h-screen pt-28 px-6 overflow-hidden">

      {/* 🌈 Light Glow BG */}
      <motion.div
        className="absolute -top-52 right-0 w-[60vw] max-w-[430px] h-[60vw] 
        bg-blue-500/30 dark:bg-blue-800/40 rounded-full blur-[180px] opacity-40"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* ============================= */}
      {/* 🎯 Section 1: About Marco Tech */}
      {/* ============================= */}

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-blue-300"
        >
          Marco Tech — Trusted Hardware Repair Service
        </motion.h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          Hyderabad’s reliable repair partner for laptops, desktops & printers with genuine parts & transparent pricing.
        </p>
      </div>

      {/* 🔒 Trust Stats */}
      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14 text-center">
        {stats.map((st, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/70 dark:bg-white/10 backdrop-blur-xl py-6 
            rounded-2xl shadow border dark:border-blue-900/40"
          >
            <p className="text-3xl font-extrabold text-blue-700 dark:text-blue-300">
             <CountUp
                from={0}
                to={st.value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </p>
            <p className="font-semibold mt-1">{st.label}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{st.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ============================= */}
      {/* 👨‍🔧 Section 2: About Technician */}
      {/* ============================= */}

      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-blue-700 dark:text-blue-300 text-center"
        >
          Meet Your Technician — Sheikh Ibrahim
        </motion.h2>

        {/* Profile Card */}
        <div className="mt-12 bg-white/75 dark:bg-white/5 backdrop-blur-xl 
          rounded-2xl shadow-lg border dark:border-blue-900/40 p-8 md:p-10 max-w-4xl mx-auto">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Placeholder Image */}
<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={true}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
    </p>
  }
/>
  

            <div className="text-center md:text-left">
              <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Chip-Level Repair Specialist
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                Passionate about fixing complex hardware issues with accuracy & transparency.
                Strong grounding in diagnostics, motherboard repairs & customer support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ⚙ Skills */}
      <div className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 gap-6">
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow p-6 border dark:border-blue-900/40">
          <div className="flex items-center gap-3 mb-3">
            <Wrench className="text-blue-700 dark:text-blue-300" />
            <h3 className="font-bold text-lg">Technical Skills</h3>
          </div>
          <div className="space-y-2">
            {skills.map((skill, i) => (
              <p key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 text-blue-600 dark:text-blue-400" />
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow p-6 border dark:border-blue-900/40">
          <div className="flex items-center gap-3 mb-3">
            <BriefcaseBusiness className="text-blue-700 dark:text-blue-300" />
            <h3 className="font-bold text-lg">Experience</h3>
          </div>
          {experience.map((exp, i) => (
            <div key={i} className="text-sm leading-relaxed">
              <p className="font-semibold text-gray-900 dark:text-gray-200">{exp.role}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {exp.company} · {exp.location}
              </p>
              <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎓 Education */}
      <div className="max-w-4xl mx-auto mt-16 bg-white/70 dark:bg-white/10 
        backdrop-blur-xl rounded-2xl shadow p-6 border dark:border-blue-900/40">
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap className="text-blue-700 dark:text-blue-300" />
          <h3 className="font-bold text-lg">Education</h3>
        </div>
        {education.map((edu, i) => (
          <div key={i} className="mb-4 text-sm">
            <p className="font-semibold">{edu.title}</p>
            <p className="text-gray-600 dark:text-gray-400">{edu.org}</p>
            <p className="text-xs text-gray-500">{edu.period}</p>
          </div>
        ))}
      </div>

      {/* 📍 Location + CTA */}
      <div className="text-center mt-20">
        <p className="flex justify-center items-center gap-2 text-lg font-medium">
          <MapPin className="w-6 text-blue-700 dark:text-blue-300" />
          Service available in Hyderabad, India
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="bg-green-600 dark:bg-green-500 text-white px-10 py-3
            rounded-xl shadow-lg text-lg font-semibold hover:scale-105 transition"
          >
            <MessageCircle className="inline-block w-5 mr-1" /> WhatsApp
          </a>
          <a
            href={`tel:+${whatsappNumber}`}
            className="bg-blue-700 dark:bg-blue-500 text-white px-10 py-3
            rounded-xl shadow-lg text-lg font-semibold hover:scale-105 transition"
          >
            <PhoneCall className="inline-block w-5 mr-1" /> Call Now
          </a>
        </div>
      </div>

      <footer className="text-center text-gray-600 dark:text-gray-500 py-12 mt-20 border-t dark:border-blue-900/40">
        © {new Date().getFullYear()} Marco Tech. All Rights Reserved.
      </footer>

    </section>
  );
};

export default About;