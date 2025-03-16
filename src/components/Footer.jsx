import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg py-6">
      <div className="max-w-5xl mx-auto px-4 text-center text-gray-300">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-blue-500 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-pink-500 transition">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Pure Infinity. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
