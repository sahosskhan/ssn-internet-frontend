import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, Headset } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-[#0b1320] via-[#111b2f] to-[#0b1320] text-white pt-16 pb-12 overflow-hidden">
      
      {/* Animated background circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 md:w-72 md:h-72 bg-teal-400/20 rounded-full blur-3xl animate-wave-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 md:w-80 md:h-80 bg-indigo-400/20 rounded-full blur-3xl animate-wave-slow"></div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-10">
        
        {/* 1st Card: Office Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg hover:scale-105 transition-transform duration-500 animate-wave">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">SSN Internet</h2>
          <p className="text-gray-200 leading-relaxed mb-2 text-sm md:text-base">📌 Khan Super Market, Samu Malitha More, Bhahirchor, Bheramara, Kushtia, Khulna, Bangladesh-7040</p>
          <p className="flex items-center gap-2 text-gray-200 mb-1 text-sm md:text-base">
            <Headset className="w-5 h-5" /> Hotline: 16590
          </p>
          <p className="flex items-center gap-2 text-gray-200 mb-1 text-sm md:text-base">
            <Phone className="w-5 h-5" /> +880 1234 567890
          </p>
          <p className="flex items-center gap-2 text-gray-200 text-sm md:text-base">
            <Mail className="w-5 h-5" /> info@ssninternet.com
          </p>
        </div>

        {/* 2nd Card: Quick Links */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg hover:scale-105 transition-transform duration-500 flex flex-wrap justify-center gap-4 md:gap-8 animate-wave">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Career", path: "/career" },
            { name: "Services", path: "/service" },
            { name: "Coverage Area", path: "/coverage-area" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-200 hover:text-teal-400 transition-all duration-300 relative group text-sm md:text-base"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* 3rd Card: Social Links */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg hover:scale-105 transition-transform duration-500 flex flex-wrap justify-center gap-4 md:gap-6 animate-wave">
          {[
            { icon: <Facebook className="w-5 md:w-6 h-5 md:h-6" />, username: "@ssninternet", color: "hover:text-blue-600" },
            { icon: <Instagram className="w-5 md:w-6 h-5 md:h-6" />, username: "@ssninternet", color: "hover:text-pink-400" },
            { icon: <Twitter className="w-5 md:w-6 h-5 md:h-6" />, username: "@ssninternet", color: "hover:text-blue-400" },
            { icon: <Linkedin className="w-5 md:w-6 h-5 md:h-6" />, username: "@ssninternet", color: "hover:text-blue-500" },
          ].map((social, idx) => (
            <a
              key={idx}
              href="#"
              className={`flex items-center gap-2 text-gray-200 transition-transform transform hover:scale-110 ${social.color} text-sm md:text-base`}
            >
              {social.icon} {social.username}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-400 text-xs md:text-sm animate-wave">
        &copy; {new Date().getFullYear()} SSN Internet. All rights reserved.
      </div>

      {/* Tailwind custom wave animation */}
      <style>
        {`
          @keyframes wave {
            0%,100% { transform: translateY(0); }
            25% { transform: translateY(-4px); }
            50% { transform: translateY(2px); }
            75% { transform: translateY(-2px); }
          }
          .animate-wave { animation: wave 4s ease-in-out infinite; }
          .animate-wave-slow { animation: wave 8s ease-in-out infinite; }
        `}
      </style>
    </footer>
  );
};

export default Footer;
