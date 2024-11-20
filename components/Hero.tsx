"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Terminal, Cpu } from "lucide-react";
import Image from "next/image";
import raoImage from "@/public/rao.jpeg";
import { contactInfo } from "./Contact";
import { Fragment } from "react";

export default function Hero() {
  return (
    <section className="min-h-screen relative pt-20 dark:bg-black" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:w-1/2"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
            >
              👋 Hello, I&apos;m Sandeep Yadav
            </motion.span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Frontend
              <span className="block gradient-text">Developer</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Experienced Frontend Developer with two years at inkle.io,
              specializing in CSS, JavaScript (ES6), React.js, and React Native.
              Passionate about creating responsive and visually captivating
              designs.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                Get in Touch
              </motion.a>
            </div>
            <div className="mt-8 flex space-x-4">
              {Object.values(contactInfo).map((info) => (
                <motion.a
                  href={info.href}
                  key={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  <info.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/30 rounded-full filter blur-3xl opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-gray-800">
                <div className="relative w-full aspect-square">
                  <Image
                    src={raoImage}
                    alt="Sandeep Yadav"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 flex space-x-3">
                {[Code2, Terminal, Cpu].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    className="w-14 h-14 bg-white dark:bg-black rounded-2xl shadow-lg flex items-center justify-center"
                  >
                    <Icon className="text-primary w-6 h-6" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
