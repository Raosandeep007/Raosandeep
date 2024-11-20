"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export const contactInfo = {
  email: {
    icon: Mail,
    label: "Email",
    value: "yadavsandeep775@gmail.com",
    href: "mailto:yadavsandeep775@gmail.com",
  },
  location: {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, Karnataka, India",
    href: "https://maps.app.goo.gl/ssM42d5HBSUjRbFa9",
  },
  github: {
    icon: Github,
    label: "GitHub",
    value: "@Raosandeep007",
    href: "https://github.com/Raosandeep007",
  },
  linkedin: {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sandeep Yadav",
    href: "https://www.linkedin.com/in/sandeep-yadav-828779149/",
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let&apos;s discuss your next project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {Object.values(contactInfo).map((info) => (
              <div key={info.label} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <info.icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{info.label}</h3>
                  <a
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" spellCheck="false" id="name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" spellCheck="false" type="email" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea spellCheck="false" id="message" rows={4} />
            </div>
            <Button type="submit">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
