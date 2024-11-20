"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Software Engineer",
    company: "Inkle",
    type: "Full-time",
    startDate: "May 2022",
    endDate: "Present",
    location: "Bengaluru, Karnataka, India",
    duration: {
      years: Math.floor(
        (new Date().getTime() - new Date("04-01-2022").getTime()) /
          (1000 * 60 * 60 * 24 * 30 * 12)
      ),
      months: Math.floor(
        ((new Date().getTime() - new Date("04-01-2022").getTime()) %
          (1000 * 60 * 60 * 24 * 30 * 12)) /
          (1000 * 60 * 60 * 24 * 30)
      ),
    },
    description: [
      "As an Experienced Frontend Developer at inkle.io, I specialized in CSS, JavaScript (ES6), React.js, and React Native, showcasing proficiency in HTML, TypeScript, Redux.js, and Tailwind CSS. I successfully led the development of engaging interfaces, utilizing Web Technologies to deliver responsive and visually captivating designs.",
      "Working collaboratively with cross-functional teams, I contributed to the creation of innovative features while upholding high standards of code quality. My responsibilities also included problem-solving and conducting End-to-End Testing to ensure robust and seamless user experiences. My dedication to staying at the forefront of industry trends drives me to continuously seek opportunities to enhance my skill set and explore new technologies.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My professional journey in software development
          </p>
        </motion.div>

        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-black rounded-xl dark:shadow-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
                      <p className="text-primary font-medium">
                        {job.company} · {job.type}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col items-start md:items-end text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{`${job.startDate} - ${job.endDate} · ${job.duration.years} yrs ${job.duration.months} mos`}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    {job.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-gray-600 dark:text-gray-300 mb-4"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
