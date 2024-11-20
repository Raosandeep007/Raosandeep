"use client";

import React from "react";
import { motion } from "framer-motion";
import Avatar from "@/public/avatar.png";
import Image from "next/image";
import { ModeToggle } from "./ThemeSwitcher";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm dark:bg-black/80"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-gray-900 dark:text-white/90 flex items-center gap-2"
          >
            <Image src={Avatar} alt="Sandeep yadav" width={40} height={40} />
            Sandeep yadav
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-gray-900 dark:text-white/70 dark:hover:text-white/90"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
          <ModeToggle />

          {/* <div className="flex items-center space-x-4">
            {[
              { Icon: Github, href: "https://github.com" },
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Twitter, href: "https://twitter.com" },
              { Icon: Mail, href: "mailto:contact@example.com" },
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-gray-900 dark:text-white/60 dark:hover:text-white/90"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div> */}
        </div>
      </nav>
    </motion.header>
  );
}
