import {
  Mail,
  PhoneCall,
  MapPin,
  MessageCircle,
  Clock,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const whatsappNumber = "917447709973";
// ⚠️ Add this at top (after imports)
const faqs = [
  {
    q: "Do you provide pickup & drop?",
    a: "Yes! We offer pickup and delivery service within Hyderabad city limits."
  },
  {
    q: "Is there any inspection charge?",
    a: "Diagnosis is FREE when you proceed with repair. Otherwise minimal ₹99 applies."
  },
  {
    q: "Do you replace with genuine parts?",
    a: "We always use high-quality and original or OEM-compatible parts with warranty."
  },
  {
    q: "Do you give warranty on repair?",
    a: "Yes! Warranty depends on the type of part replaced and nature of repair."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    device: "",
    model: "",
    issue: "",
    city: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const message = `
📌 *New Repair Inquiry – Marco Tech*
------------------------------------
👤 Name: ${formData.name}
🖥 Device: ${formData.device}
💻 Model: ${formData.model}
⚠ Issue: ${formData.issue}
📍 City/Area: ${formData.city}
------------------------------------
    `;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen pt-28 pb-20 px-6">
      
      {/* Background Glow */}
      <motion.div className="absolute -top-28 right-0 w-[350px] h-[350px] bg-blue-200 rounded-full blur-[140px] opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">Contact Us</h1>
          <p className="text-gray-700 mt-3 text-lg">
            Have a device issue? Share with us — we’ll help quickly.
          </p>
        </div>

        {/* Glass Form + Info Layout */}
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Contact Form Glass Card */}
          <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border p-8 space-y-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              Repair Request Form
            </h2>

            {["name", "device", "model", "issue", "city"].map((field) => (
              <input
                key={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={
                  "Enter " +
                  (field === "name"
                    ? "your full name"
                    : field === "device"
                    ? "Laptop / Desktop / Printer"
                    : field === "model"
                    ? "Model No. (optional)"
                    : field === "issue"
                    ? "Device Issue (short description)"
                    : "City / Area")
                }
                className="w-full px-4 py-3 border rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:border-blue-600 outline-none transition"
              />
            ))}

            <button
              onClick={sendToWhatsApp}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              <MessageCircle className="inline-block w-5 h-5 mb-1 mr-1" />  
              Send on WhatsApp
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-xl border p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-xl font-bold text-blue-700 mb-4">Contact Information</h2>

            <div className="space-y-5">
              <p className="flex items-center gap-3 text-gray-700">
                <PhoneCall className="text-blue-700" /> +91 {whatsappNumber}
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <Mail className="text-blue-700" /> support@marcotech.in
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-blue-700" />
                Shastripuram, Hyderabad – Telangana
              </p>

              <p className="flex items-center gap-3 text-gray-700">
                <Clock className="text-blue-700" />
                Mon – Sat: 10:00 AM – 8:00 PM
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              className="flex items-center justify-center gap-2 mt-6 bg-green-600 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>

    {/* FAQ Section */}
<div className="mt-24">
  <h2 className="text-2xl font-bold text-blue-700 text-center">
    Frequently Asked Questions
  </h2>

  <div className="mt-8 space-y-4 max-w-3xl mx-auto">
    {faqs.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-white p-4 rounded-xl shadow-sm border cursor-pointer"
        onClick={() =>
          setFormData((prev) => ({
            ...prev,
            [`faq_${index}`]: !prev[`faq_${index}`],
          }))
        }
      >
        <div className="flex justify-between items-center">
          <span className="text-gray-900 font-medium">{item.q}</span>
          <ChevronRight
            className={`w-5 text-blue-600 transition-transform ${
              formData[`faq_${index}`] ? "rotate-90" : ""
            }`}
          />
        </div>

        {formData[`faq_${index}`] && (
          <motion.p
            className="mt-3 text-gray-600 text-sm leading-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
          >
            {item.a}
          </motion.p>
        )}
      </motion.div>
    ))}
  </div>
</div>

        {/* Map */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Location on Google Maps
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl border">
            <iframe
              className="w-full h-[320px] sm:h-[380px]"
              allowFullScreen
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4129.677880425848!2d78.31378599061105!3d17.388050779159997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1765079205308!5m2!1sen!2sin"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-12 mt-24 border-t">
        © {new Date().getFullYear()} Marco Tech. All Rights Reserved.
      </footer>
    </section>
  );
};

export default Contact;
