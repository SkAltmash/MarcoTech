// src/pages/About.jsx
import {
  Cpu,
  ShieldCheck,
  Wrench,
  MapPin,
  GraduationCap,
  BriefcaseBusiness,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const whatsappNumber = "917447709973";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    "Troubleshooting & Diagnostics",
    "Laptop & Desktop Hardware Repair",
    "Printer & Peripheral Support",
    "Hardware Installation & Upgrades",
    "Soldering & Component-Level Repair",
    "Customer Service & Communication",
  ];

  const certifications = [
    {
      title: "KLiC Certificate in IT Hardware Support (85%)",
      org: "Maharashtra Knowledge Corporation Limited (MKCL)",
      details: "120+ hours of practical hardware support training.",
    },
    {
      title: "Advanced Diploma in Laptop & MacBook Chip-Level Training",
      org: "ECS Institute of Digital Technologies, Hyderabad",
      details: "Focused chip-level diagnostics and motherboard repair.",
    },
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
      period: "Aug 2022 – Ongoing",
    },
    {
      title: "12th",
      org: "Imam Wali Ullah Public School & Jr College, Akola",
      period: "Aug 2020 – Aug 2022",
    },
  ];

  const experience = [
    {
      role: "Computer Hardware Technician",
      company: "Computer Hardware Service Shop",
      location: "Hyderabad & Wardha",
      period: "Jan 2023 – Present",
      desc: "Hands-on experience handling laptop, desktop and printer issues for local customers and small businesses.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 min-h-screen pt-28 px-6 overflow-hidden">

      {/* Soft Background Glow */}
      <motion.div
        className="absolute -top-32 right-0 w-[60vw] max-w-[360px] h-[60vw] max-h-[360px] bg-blue-300 rounded-full blur-[150px] opacity-40"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* HERO */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-800"
        >
          About Marco Tech
        </motion.h1>
        <p className="mt-4 text-gray-700 text-lg">
          Marco Tech is a dedicated IT hardware service provider focused on
          reliable laptop, desktop and printer repair with chip-level expertise
          in Hyderabad.
        </p>
      </div>

      {/* TWO COLUMN: COMPANY + TECHNICIAN */}
      <div className="relative z-10 max-w-6xl mx-auto mt-14 grid lg:grid-cols-2 gap-10">
        {/* Company Overview */}
        <motion.div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-7 h-7 text-blue-700" />
            <h2 className="text-xl font-bold text-gray-900">Who We Are</h2>
          </div>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Marco Tech delivers structured, process-driven repair services for
            individuals and small businesses. From basic hardware issues to
            complex chip-level motherboard faults, the focus is on accurate
            diagnosis, genuine guidance and clear communication with every
            customer.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
            The objective is simple: provide dependable technical support that
            keeps systems stable and productive, without unnecessary upselling
            or hidden charges.
          </p>
        </motion.div>

        {/* Technician Profile (Text Only) */}
        <motion.div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="w-7 h-7 text-blue-700" />
            <h2 className="text-xl font-bold text-gray-900">About the Technician</h2>
          </div>
          <p className="text-gray-800 font-semibold">
            Sheikh Ibrahim — Laptop & Desktop Hardware Technician
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
            Ibrahim is a trained computer hardware technician with a strong
            foundation in IT hardware support and chip-level repair. His work
            combines structured training with real-world shop experience across
            Hyderabad and Wardha.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-2 leading-relaxed">
            With a focus on practical problem-solving, Ibrahim specialises in
            diagnosing faults, repairing motherboards, handling component-level
            issues and ensuring that each device is returned in a stable,
            service-ready condition.
          </p>
        </motion.div>
      </div>

      {/* SKILLS SECTION */}
      <div className="relative z-10 max-w-6xl mx-auto mt-20 grid lg:grid-cols-2 gap-10">
        <motion.div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <Wrench className="w-7 h-7 text-blue-700" />
            <h2 className="text-xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mt-3">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm md:text-base text-gray-700"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <BriefcaseBusiness className="w-7 h-7 text-blue-700" />
            <h2 className="text-xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          <div className="space-y-4 mt-2">
            {experience.map((exp, i) => (
              <div key={i} className="text-left">
                <p className="font-semibold text-gray-900">{exp.role}</p>
                <p className="text-sm text-gray-600">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-xs text-gray-500 mt-1">{exp.period}</p>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* EDUCATION & CERTIFICATIONS */}
      <div className="relative z-10 max-w-6xl mx-auto mt-20 grid lg:grid-cols-2 gap-10">
        {/* Education */}
        <motion.div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <GraduationCap className="w-7 h-7 text-blue-700" />
            <h2 className="text-xl font-bold text-gray-900">Education</h2>
          </div>
          <div className="space-y-4 mt-2">
            {education.map((edu, i) => (
              <div key={i} className="text-left">
                <p className="font-semibold text-gray-900">{edu.title}</p>
                <p className="text-sm text-gray-600">{edu.org}</p>
                <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg border p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-7 h-7 text-blue-700" />
            <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
          </div>
          <div className="space-y-4 mt-2">
            {certifications.map((cert, i) => (
              <div key={i} className="text-left">
                <p className="font-semibold text-gray-900">{cert.title}</p>
                <p className="text-sm text-gray-600">{cert.org}</p>
                <p className="text-sm text-gray-700 mt-1">{cert.details}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* LOCATION & CTA */}
      <div className="relative z-10 max-w-4xl mx-auto mt-20 text-center">
        <p className="flex justify-center items-center gap-2 text-gray-700 text-lg font-medium">
          <MapPin className="w-6 h-6 text-blue-700" />
          Service available in Hyderabad · India
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            <MessageCircle className="inline-block w-5 h-5 mb-1 mr-1" />
            Chat on WhatsApp
          </a>
          <a
            href={`tel:+${whatsappNumber}`}
            className="bg-white text-blue-700 border border-blue-500 px-8 py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-50 transition"
          >
            <PhoneCall className="inline-block w-5 h-5 mb-1 mr-1" />
            Call Marco Tech
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 text-center text-gray-500 py-12 mt-20 border-t">
        © {new Date().getFullYear()} Marco Tech. All Rights Reserved.
      </footer>
    </section>
  );
};

export default About;
