import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PhoneCall, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeStyle =
    "text-blue-600 dark:text-blue-400 font-semibold pb-1 border-b-2 border-blue-600 dark:border-blue-400";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 dark:bg-[#0b1020]/70 backdrop-blur-lg shadow-lg z-50 transition">
      <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto">

        {/* LOGO */}
        <Link
          to="/home"
          className="text-2xl font-bold text-blue-700 dark:text-blue-400 tracking-wide"
        >
          MarcoTech
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-blue-900 shadow hover:scale-105 transition"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>

          <a
            href="tel:+917447709973"
            className="flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <PhoneCall className="w-4 h-4" /> Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <X className="w-8 h-8 text-gray-800 dark:text-gray-300" />
          ) : (
            <Menu className="w-8 h-8 text-gray-800 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-[#0b1226] border-t dark:border-blue-900 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-3 px-6 py-4 w-full text-gray-800 dark:text-gray-200"
          >
            {darkMode ? (
              <>
                <Sun className="w-5 h-5 text-yellow-400" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-blue-500" /> Dark Mode
              </>
            )}
          </button>

          <a
            href="tel:+917447709973"
            className="block px-6 py-4 text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
