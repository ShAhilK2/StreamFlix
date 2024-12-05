import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const showGpt = useSelector((state) => state.gpt.showGpt);
  return (
    <footer
      className={` ${
        showGpt ? "bg-opacity-20" : "bg-black"
      } text-gray-200 py-10 px-5 sm:px-16`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-white text-3xl font-bold mb-8">
          Streamflix with GPT
        </h1>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
          <a href="#" className="hover:underline">
            FAQ
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
          <a href="#" className="hover:underline">
            Account
          </a>
          <a href="#" className="hover:underline">
            Media Center
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
          <a href="#" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Ways to Watch
          </a>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Cookie Preferences
          </a>
          <a href="#" className="hover:underline">
            Corporate Information
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>

        {/* Language Selection */}
        <div className="mt-8">
          <button className="border border-gray-500 px-4 py-2 rounded text-sm">
            English
          </button>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-sm">© 2024 Streamflix, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
