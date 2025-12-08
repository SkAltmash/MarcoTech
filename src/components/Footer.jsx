// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Mail,
  Navigation,
} from "lucide-react";

const whatsappNumber = "917447709973";
const logo = "/logo.png";

export default function Footer() {
  return (
    <footer
      className="
      bg-gray-100 text-gray-700 border-t border-gray-300 pt-16 pb-6 px-6
      dark:bg-gradient-to-r dark:from-[#0a1223] dark:via-[#0c1833] dark:to-[#07101f]
      dark:text-gray-300 dark:border-blue-900/40
      transition-colors duration-300
    "
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo & About */}
        <div>
          <img
            src={logo}
            alt="MarcoTech Logo"
            className="h-28 drop-shadow-[0_0_10px_rgba(0,115,255,0.6)]"
          />

          <p className="text-sm mt-3 leading-relaxed text-gray-600 dark:text-gray-400">
            Trusted repairs for Laptops, Desktops & Printers —
            Chip-Level expertise with transparency.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-blue-700 dark:text-blue-300 text-lg mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:text-blue-500 dark:hover:text-blue-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 dark:hover:text-blue-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 dark:hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Repair Services */}
        <div>
          <h4 className="font-bold text-blue-700 dark:text-blue-300 text-lg mb-4">
            Repair Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Laptop Repairs</li>
            <li>Desktop Repairs</li>
            <li>Chip-Level Fixing</li>
            <li>Data Recovery</li>
            <li>Printer Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-blue-700 dark:text-blue-300 text-lg mb-4">
            Contact Us
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <PhoneCall className="w-4 text-blue-600 dark:text-blue-400" />
              +91 {whatsappNumber}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 text-blue-600 dark:text-blue-400" />
             s38888732@gmail.com           
              </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 text-blue-600 dark:text-blue-400" />
              Hyderabad, India
            </li>
          </ul>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex justify-center flex-wrap gap-6 mt-12">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="px-8 py-3 rounded-full text-sm font-semibold text-white
          bg-green-600 hover:bg-green-500 hover:scale-105 transition
          shadow-md dark:shadow-[0_0_20px_rgba(0,255,120,0.35)] flex items-center gap-2"
        >
          <MessageCircle className="w-5" />
          WhatsApp
        </a>

        <a
          href="https://maps.google.com?q=Hyderabad"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full text-sm font-semibold text-white
          bg-blue-600 hover:bg-blue-500 hover:scale-105 transition
          shadow-md dark:shadow-[0_0_20px_rgba(0,115,255,0.35)] flex items-center gap-2"
        >
          <Navigation className="w-5" />
          Get Directions
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 dark:border-blue-900/40 mt-12 pt-6
        w-full flex flex-col text-center items-center">

        <p className="text-xs text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Marco Tech — All Rights Reserved.
        </p>

        <p className="text-xl mt-2 text-gray-600 dark:text-gray-400">
          Designed & Developed by{" "}
          <a
            href="https://altamashdev.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 font-medium
            hover:text-blue-500 dark:hover:text-blue-300 underline
            drop-shadow-[0_0_6px_rgba(0,115,255,0.6)] transition"
          >
            Sk Altamash
          </a>
        </p>

      </div>

    </footer>
  );
}
