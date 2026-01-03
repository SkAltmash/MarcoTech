import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  RefreshCcw, 
  Truck, 
  Search, 
  Filter, 
  MessageCircle, 
  Cpu, 
  HardDrive, 
  Monitor 
} from "lucide-react";

const laptopsData = [
  {
    id: 1,
    name: "Lenovo L470",
    brand: "Lenovo",
    specs: { cpu: "Intel i5 7th Gen", ram: "16GB", ssd: "256GB" },
    price: "17,000",
    originalPrice: "56,000",
    condition: "Grade A (Like New)",
    img: "/laptops/lenovo-l470.jpeg", 
  },
  {
    id: 2,
    name: "HP 840 G3 ",
    brand: "HP",
    specs: { cpu: "i5 6th Gen", ram: "8GB", ssd: "256GB" },
    price: "13,500",
    originalPrice: "45,000",
    condition: "Excellent",
    img: "/laptops/hp.jpeg",
  },
  // Add more laptop objects here...
];

const RefurbishedLaptops = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const whatsappNumber = "917447709973";

  return (
    <div className="pt-28 pb-20 bg-gray-50 dark:bg-[#0a1124] min-h-screen">
      
      {/* Header Section */}
      <div className="text-center px-6 mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-white"
        >
          Premium Refurbished Laptops
        </motion.h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          High-performance laptops at a fraction of the cost. Every device undergoes a 
          40-point rigorous quality check.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-16">
        {[
          { icon: <ShieldCheck className="w-8 h-8 text-green-500" />, title: "6-Month Warranty", desc: "Full hardware support" },
          { icon: <RefreshCcw className="w-8 h-8 text-blue-500" />, title: "7-Day Replacement", desc: "No questions asked" },
          { icon: <Truck className="w-8 h-8 text-purple-500" />, title: "Free Shipping", desc: "Safe delivery in Hyderabad" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 p-5 bg-white dark:bg-[#111a33] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            {item.icon}
            <div>
              <h4 className="font-bold dark:text-white">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter & Search Bar */}
      <div className="max-w-6xl mx-auto px-6 mb-10 flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-2/3">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by model (e.g. MacBook, i5, 16GB RAM)..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-[#0e1630] dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 bg-white dark:bg-[#0e1630] border border-gray-200 dark:border-gray-800 px-6 py-3 rounded-xl font-medium">
          <Filter className="w-5 h-5" /> Filter
        </button>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {laptopsData
          .filter(laptop => laptop.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((laptop) => (
          <motion.div 
            key={laptop.id}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-[#111a33] rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 flex flex-col"
          >
            <div className="relative h-48 bg-gray-200 dark:bg-[#1a2442]">
              <img src={laptop.img} alt={laptop.name} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {laptop.condition}
              </span>
            </div>

            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold dark:text-white mb-2">{laptop.name}</h3>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Cpu className="w-4 h-4" /> {laptop.specs.cpu}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Monitor className="w-4 h-4" /> {laptop.specs.ram} RAM
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <HardDrive className="w-4 h-4" /> {laptop.specs.ssd} SSD
                </div>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-gray-400 line-through">₹{laptop.originalPrice}</p>
                  <p className="text-2xl font-black text-blue-700 dark:text-blue-400">₹{laptop.price}</p>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=Hi Marco Tech, I am interested in ${laptop.name}`}
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl shadow-md transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Footer CTA */}
      <div className="mt-20 text-center px-6">
        <h3 className="text-2xl font-bold dark:text-white">Need a specific model?</h3>
        <p className="text-gray-500 mt-2">We can source laptops based on your custom requirements.</p>
        <button className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl font-bold">
          Contact Sales Team
        </button>
      </div>
    </div>
  );
};

export default RefurbishedLaptops;