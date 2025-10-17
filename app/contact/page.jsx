"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+963) 983 796 029" },
  { icon: <FaEnvelope />, title: "Email", description: "haedarahasan69@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Syria, Tartous, AlSheikh-Badr" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_a0qqwbf",
        "template_jiml93v",
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          to_name: "Ahmad Salloum",
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: "haedarahasan69@gmail.com",
        },
        "GMi_Grh4yynlwtzVU"
      )
      .then((response) => {
        console.log("Message sent successfully!", response.status, response.text);
        setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
      })
      .catch((err) => console.error("Failed to send message:", err));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } }}
      className="py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black min-h-screen"
    >
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col justify-center gap-10">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 bg-[#27272c] p-4 xl:p-6 rounded-xl hover:shadow-neon transition-shadow duration-300"
                >
                  <div className="w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] bg-[#1f1f24] text-accent-Default rounded-lg flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{item.title}</p>
                    <h3 className="text-lg xl:text-xl font-semibold text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-8 xl:p-10 bg-[#27272c] rounded-2xl shadow-lg hover:shadow-neon transition-shadow duration-300"
            >
              <h3 className="text-4xl text-accent-Default font-bold">Let's work together</h3>
              <p className="text-white/60 mb-4">Haedara Hasan Salloum</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="bg-[#1f1f24] text-white placeholder:text-white/50 focus:border-accent-Default"
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="bg-[#1f1f24] text-white placeholder:text-white/50 focus:border-accent-Default"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[#1f1f24] text-white placeholder:text-white/50 focus:border-accent-Default"
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[#1f1f24] text-white placeholder:text-white/50 focus:border-accent-Default"
                />
              </div>

              <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger className="w-full bg-[#1f1f24] text-white focus:border-accent-Default">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Front-End Development">Front-End Development</SelectItem>
                    <SelectItem value="Correcting Code Errors">Correcting Code Errors</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="Video Design">Video Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#1f1f24] text-white placeholder:text-white/50 focus:border-accent-Default h-[180px]"
              />

              <Button
                type="submit"
                className="bg-accent-Default text-black hover:bg-accent-hover hover:text-white p-3 rounded-lg font-semibold transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover\\:shadow-neon:hover {
          box-shadow: 0 0 20px #00fff7, 0 0 40px #00fff7, 0 0 60px #00fff7;
        }
      `}</style>
    </motion.section>
  );
};

export default Contact;
