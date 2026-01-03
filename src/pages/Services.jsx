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
  CheckCircle2,
  ShoppingBag, 
  ArrowRight    
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import CompanyBrands from "../components/CompanyBrands";
import WhyMarco from "@/components/WhyMarco";

const whatsappNumber = "917447709973";

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceList = [
    {
      icon: <ShoppingBag className="w-7 h-7 text-orange-600 dark:text-orange-400" />,
      title: "Refurbished Laptops",
      desc: "Premium certified pre-owned laptops with testing & warranty.",
      img: "/services/refurbished.png", 
      link: "/refurbished-laptops", 
      featured: true
    },
    {
      icon: <Laptop2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      title: "Laptop Repair",
      desc: "Screen, battery, keyboard, heating & power issues.",
      img: "/services/laptop.jpg",
    },
    {
      icon: <Wrench className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      title: "Desktop Repair",
      desc: "Boot failure, hardware upgrades & deep cleaning.",
      img: "/services/desktop.jpg",
    },
    {
      icon: <Printer className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      title: "Printer Service",
      desc: "Paper jam, scanner issue & cartridge maintenance.",
      img: "/services/printer.jpg",
    },
    {
      icon: <Cpu className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      title: "Chip-Level Repair",
      desc: "BGA, IC repair for dead laptops & desktops.",
      img: "/services/chip.jpeg",
    },
    {
      icon: <HardDrive className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      title: "Data Recovery",
      desc: "Deleted or corrupted data recovery from HDD/SSD.",
      img: "/services/data.jpeg",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
      title: "Software Support",
      desc: "Windows install, drivers update & virus removal.",
      img: "/services/software.jpg",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-[#0a1124] dark:via-[#0e1630] dark:to-[#0b1226] text-gray-900 dark:text-gray-200 min-h-screen pt-32 px-6 overflow-hidden pb-10">

      {/* Floating BG Blur Effects */}
      <motion.div className="absolute -top-20 -right-20 w-[350px] h-[350px] bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto relative z-10">
        <h1 className="text-5xl font-extrabold text-blue-700 dark:text-blue-300">Our Services</h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">
          From expert repairs to premium refurbished devices.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="mt-16 max-w-6xl mx-auto relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList
            .slice(0, showMore ? serviceList.length : 3)
            .map((service, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-white/70 dark:bg-[#101a34] backdrop-blur-xl shadow-lg rounded-2xl 
                border transition-all flex flex-col
                ${service.featured 
                  ? "border-orange-200 dark:border-orange-900/50 ring-1 ring-orange-500/20" 
                  : "border-blue-200/50 dark:border-blue-900/40"}`}
              >
                <div className="overflow-hidden rounded-t-2xl relative">
                  {service.featured && (
                    <span className="absolute top-3 right-3 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider z-20">
                      Best Value
                    </span>
                  )}
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="h-52 w-full object-cover"
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    {service.icon}
                    <h3 className="text-lg font-bold">{service.title}</h3>
                  </div>
                  <p className="text-sm opacity-90 mb-4">{service.desc}</p>
                  
                  {/* Link specific to Refurbished or any item with a 'link' */}
                  {service.link && (
                    <div className="mt-auto">
                      <a 
                        href={service.link} 
                        className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Browse Catalog <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Show More Button */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowMore(prev => !prev)}
            className="px-8 py-3 rounded-xl font-semibold shadow-md
            bg-blue-700 text-white dark:bg-blue-500 hover:scale-105 transition"
          >
            {showMore ? "View All Services" : "Show More Services"}
          </button>
        </div>
      </div>

      <CompanyBrands />
      <WhyMarco showlink={false} />
    
    </section>
  );
};

export default Services;