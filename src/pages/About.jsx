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
import TiltedCard from "@/components/TiltedCard";
import RotatingText from "@/components/RotatingText";

const whatsappNumber = "917447709973";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Google Rating", value: "4.9", sufix: "⭐", desc: "100+ Verified Reviews" },
    { label: "Years Experience", value: "3", prefix: "+", desc: "Chip-Level Expertise" },
    { label: "Devices Repaired", value: "200", prefix: "+", desc: "Trusted Customers" },
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
      title: "BAC (Bachelor of Computer Applications)",
      org: "Wahed Khan College, Amravati",
      period: "2022 – 2025",
    },
    {
      title: "12th",
      org: "Imam wali Ullah JR College .Sonor TQ Murtizapur,dist Akola",
      period: "2020 - 2022"
    }
    ,
    {
      title: "10",
      org: "Sanjay Gandhi High School, Hinganghat dist Wardha",
      period: "2019 - 2020"
    }
  ];

  const experience = [
    {
      role: "Computer Hardware Technician",
      company: "Computer Hardware Service Shop",
      location: "Wardha",
      period: "Jan 2022 - 2024",
      desc: "Daily service experience repairing laptops, desktops & printers for real customers.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 
    dark:from-[#0b1226] dark:via-[#0c142b] dark:to-[#090f20] text-gray-900 dark:text-gray-200 
    min-h-screen pt-28 px-6 overflow-hidden pb-10">

      {/* Light Glow BG */}
      <motion.div
        className="absolute -top-52 right-0 w-[60vw] max-w-[430px] h-[60vw] 
        bg-blue-600/30 dark:bg-blue-900/40 rounded-full blur-[180px] opacity-40"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Header */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Marco Tech — Trusted Hardware Repair Service
        </motion.h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          Hyderabad’s reliable repair partner for laptops, desktops & printers with genuine parts & transparent pricing.
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14 text-center">
        {stats.map((st, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-xl 
            py-6 rounded-2xl border border-blue-900/40
            shadow-[0_0_20px_rgba(0,115,255,0.18)]"
          >
            <p className="text-3xl font-extrabold text-blue-500 dark:text-blue-300">
              {st.prefix && st.prefix}
              <CountUp
                from={0}
                to={st.value}
                separator=","
                duration={1}
                className="count-up-text"
              />
              {st.sufix && st.sufix}
            </p>
            <p className="font-semibold mt-1">{st.label}</p>
            <p className="text-xs text-gray-500 mt-1">{st.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Technician Section */}
      <div className="relative z-10 max-w-6xl mx-auto mt-28">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-center 
          bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
        >
          Meet Your Technician 
        </motion.h2>

        {/* Profile Card */}
        <div className="mt-16 max-w-5xl mx-auto bg-white/5 dark:bg-gray-900/40 
        backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_0_25px_rgba(0,115,255,0.15)]
        border border-blue-900/40 transition-all">

          <div className="flex flex-col md:flex-row items-center gap-10">
            <TiltedCard
              imageSrc="/ibrahim.png"
              altText="Sheik Ibrahim"
              captionText="Sheik Ibrahim"
              containerHeight="400px"
              containerWidth="300px"
              imageHeight="400px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={true}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text m-5 bg-black/50 p-2 rounded-2xl">
                  Sheik Ibrahim
                </p>
              }
            />


            <div className="text-center md:text-left max-w-lg">
              <p className="text-2xl font-bold flex flex-wrap gap-2 items-center 
              justify-center md:justify-start text-white mt-3 tracking-wide">
               <p className="text-black dark:text-white">Specialist in</p>
                <RotatingText
                  texts={[
                    "Chip-Level Repairs",
                    "Motherboard Repair",
                    "Micro-Soldering",
                    "Data Recovery",
                    "Diagnostics",
                  ]}
                  mainClassName="px-3 py-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                  text-white rounded-lg border border-blue-400/30
                  shadow-[0_0_20px_rgba(0,115,255,0.45)]"
                  staggerDuration={0.03}
                  rotationInterval={2000}
                />
              </p>

              <p className="dark:text-gray-300 mt-4 leading-relaxed text-lg">
                Diagnosing and repairing advanced hardware faults with precision & transparency —
                ensuring devices work like brand new.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Skills & Experience */}
      <div className="max-w-5xl mx-auto mt-16 grid sm:grid-cols-2 gap-6">

        {/* Skills */}
        <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl 
        border border-blue-900/40 p-6 shadow-[0_0_20px_rgba(0,115,255,0.18)]">
          <div className="flex items-center gap-3 mb-4">
            <Wrench className="w-6 h-6 text-blue-400 drop-shadow-[0_0_6px_rgba(0,115,255,0.6)]" />
            <h3 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-600 
            bg-clip-text text-transparent">
              Technical Skills
            </h3>
          </div>

          <div className="space-y-2">
            {skills.map((skill, i) => (
              <p key={i} className="flex items-center gap-2 text-sm dark:text-gray-200">
                <CheckCircle2 className="w-4 text-blue-400 drop-shadow-[0_0_6px_rgba(0,115,255,0.6)]" />
                {skill}
              </p>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-2xl 
        border border-blue-900/40 p-6 shadow-[0_0_20px_rgba(0,115,255,0.18)]">
          <div className="flex items-center gap-3 mb-4">
            <BriefcaseBusiness className="w-6 h-6 text-blue-400 drop-shadow-[0_0_6px_rgba(0,115,255,0.6)]" />
            <h3 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-600 
            bg-clip-text text-transparent">
              Experience
            </h3>
          </div>

          {experience.map((exp, i) => (
            <div key={i}>
              <p className="font-semibold text-white">{exp.role}</p>
              <p className="dark:text-gray-400">{exp.company} · {exp.location}</p>
              <p className="text-xs dark:text-blue-300  text-blue-800 mt-1">{exp.period}</p>
              <p className="dark:text-gray-300 mt-2 leading-relaxed">{exp.desc}</p>
              {i !== experience.length - 1 && <div className="border-b border-blue-900/40 mt-4"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="max-w-4xl mx-auto mt-16 bg-white/5 dark:bg-white/5 
      backdrop-blur-xl rounded-2xl p-6 border border-blue-900/40 
      shadow-[0_0_20px_rgba(0,115,255,0.18)]">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="w-6 h-6 text-blue-400 drop-shadow-[0_0_6px_rgba(0,115,255,0.6)]" />
          <h3 className="font-bold text-lg bg-gradient-to-r from-blue-400 to-blue-600 
          bg-clip-text text-transparent">
            Education
          </h3>
        </div>

        {education.map((edu, i) => (
          <div key={i} className="mb-4 text-sm">
            <p className="font-semibold text-white">{edu.title}</p>
            <p className="dark:text-gray-400">{edu.org}</p>
            <p className="text-xs dark:text-blue-300 text-blue-700">{edu.period}</p>
          </div>
        ))}
      </div>


       
     

    </section>
  );
};

export default About;
