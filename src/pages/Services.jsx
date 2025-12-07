import {
  Cpu,
  Wrench,
  Printer,
  Laptop2,
  ShieldCheck,
  HardDrive,
  PhoneCall,
  MessageCircle,
  MapPin,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const whatsappNumber = "917447709973";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceList = [
    {
      icon: <Laptop2 className="w-7 h-7 text-blue-600" />,
      title: "Laptop Repair",
      desc: "Screen, battery, keyboard, heating & power issues.",
      img: "/services/laptop.jpg",
    },
    {
      icon: <Wrench className="w-7 h-7 text-blue-600" />,
      title: "Desktop Repair",
      desc: "Boot failure, hardware upgrades & deep cleaning.",
      img: "/services/desktop.jpg",
    },
    {
      icon: <Printer className="w-7 h-7 text-blue-600" />,
      title: "Printer Service",
      desc: "Paper jam, scanner issue & cartridge maintenance.",
      img: "/services/printer.jpg",
    },
    {
      icon: <Cpu className="w-7 h-7 text-blue-600" />,
      title: "Chip-Level Repair",
      desc: "BGA, IC repair for dead laptops & desktops.",
      img: "/services/chip.jpeg",
    },
    {
      icon: <HardDrive className="w-7 h-7 text-blue-600" />,
      title: "Data Recovery",
      desc: "Deleted or corrupted data recovery from HDD/SSD.",
      img: "/services/data.jpeg",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      title: "Software Support",
      desc: "Windows install, drivers update & virus removal.",
      img: "/services/software.jpg",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 min-h-screen pt-32 px-6 overflow-hidden">

      {/* Floating BG Blur Orbs */}
      <motion.div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-blue-300 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div className="absolute bottom-0 -left-40 w-[420px] h-[420px] bg-blue-200 rounded-full blur-3xl opacity-50"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h1 className="text-5xl font-extrabold text-blue-700">Our Services</h1>
        <p className="mt-4 text-gray-700 text-lg">
          Professional repair solutions with premium support.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {serviceList.map((service, i) => (
          <motion.div key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/60 backdrop-blur-xl shadow-lg rounded-2xl border hover:shadow-blue-300 transition-all"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <motion.img
                src={service.img}
                alt={service.title}
                className="h-52 w-full object-cover"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                {service.icon}
                <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <div className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl font-bold text-blue-700">Why Choose Marco Tech?</h2>

        <div className="grid sm:grid-cols-2 gap-5 mt-8">
          {[
            "Same-Day Fix for Most Issues",
            "Affordable & Transparent Pricing",
            "Warranty on Repair Work",
            "Trusted Chip-Level Technician",
          ].map((point, i) => (
            <motion.div key={i}
              whileHover={{ scale: 1.06 }}
              className="bg-blue-50 py-4 px-5 rounded-xl flex items-center gap-2 shadow-sm border"
            >
              <CheckCircle2 className="text-blue-600 w-6" />
              <span className="text-gray-700 text-sm">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LOCATION */}
      <div className="text-center mt-24 relative z-10">
        <p className="flex justify-center gap-2 text-gray-700 text-lg font-medium">
          <MapPin className="w-6 h-6 text-blue-700" /> Hyderabad, India
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 relative z-20">
        <a href={`https://wa.me/${whatsappNumber}`}
          className="bg-green-600 text-white px-10 py-3 rounded-xl text-lg font-semibold shadow-lg hover:scale-105 transition">
          <MessageCircle className="inline-block w-6 mb-1 mr-1" />
          Chat on WhatsApp
        </a>
      </div>

      {/* Fixed Mobile Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a href={`https://wa.me/${whatsappNumber}`} className="bg-green-600 p-4 rounded-full text-white shadow-lg hover:scale-110 transition">
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href={`tel:+${whatsappNumber}`} className="bg-blue-600 p-4 rounded-full text-white shadow-lg hover:scale-110 transition">
          <PhoneCall className="w-6 h-6" />
        </a>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 py-12 mt-24 border-t relative z-10">
        © {new Date().getFullYear()} Marco Tech. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Services;
