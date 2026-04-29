import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-cyan-400">
              Devfolio&trade;
            </Link>
            <p className="text-sm text-slate-300 mt-2">
              &copy; {new Date().getFullYear()} Devfolio. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://github.com/bismahashmi2"
              className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FaGithub />
            </Link>
            <Link
              href=""
              className="text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
