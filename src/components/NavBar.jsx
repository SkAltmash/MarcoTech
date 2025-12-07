import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const activeStyle =
    "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3 max-w-6xl mx-auto">

        {/* LOGO */}
        <Link
          to="/home"
          className="text-2xl font-bold text-blue-700 tracking-wide"
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
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="tel:+917447709973"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            <PhoneCall className="w-4 h-4" /> Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? (
            <X className="w-8 h-8 text-gray-800" />
          ) : (
            <Menu className="w-8 h-8 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md animate-slideDown">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href="tel:+917447709973"
            className="block px-6 py-4 text-blue-600 font-semibold flex items-center gap-2"
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
