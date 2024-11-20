"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Palette,
  Terminal,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      "React.js",
      "TypeScript",
      "JavaScript (ES6)",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    category: "Mobile",
    icon: Server,
    items: ["React Native", "Mobile-First Design", "Responsive Development"],
  },
  {
    category: "State Management",
    icon: Database,
    items: ["Redux.js", "Context API", "State Machines"],
  },
  {
    category: "Testing",
    icon: Cloud,
    items: ["End-to-End Testing", "Unit Testing", "Integration Testing"],
  },
  {
    category: "Tools",
    icon: Palette,
    items: ["Storybook", "Git", "VS Code", "Chrome DevTools"],
  },
  {
    category: "Soft Skills",
    icon: Terminal,
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Communication",
      "Leadership",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-black rounded-xl p-6 shadow-lg dark:shadow-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-600 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
