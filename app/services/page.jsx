'use client'
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    num: "01",
    title: "Front-End Development",
    description: "I provide interactive and easy-to-use user interfaces that enhance visitor experience and increase engagement.",
    href: "",
  },
  {
    num: "02",
    title: "Correcting Code Errors",
    description: "I offer software debugging services to ensure your applications run smoothly and efficiently.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "I design unique logos that express your brand identity and leave a lasting impression.",
    href: "",
  },
  {
    num: "04",
    title: "Video Design",
    description: "I create engaging visual content that reflects your vision and engages your audience professionally.",
    href: "",
  },
]

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 ">
      <div className="container mx-auto px-4 xl:px-0">
        <h1 className="text-4xl xl:text-5xl font-bold text-center text-accent-Default mb-12 neon-text">
          My Services
        </h1>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative flex flex-col gap-6 p-10 rounded-2xl group bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-transform duration-500 shadow-2xl"
            >
              {/* رقم الخدمة مع أيقونة */}
              <div className="flex items-center justify-between w-full">
                <div className="text-6xl font-extrabold text-white/10 select-none group-hover:text-white leading-none">
                  {service.num}
                </div>
              </div>

              {/* عنوان الخدمة */}
              <h2 className="text-2xl xl:text-3xl font-bold text-white hover:text-black transition-colors duration-500 neon-text">
                {service.title}
              </h2>

              {/* وصف الخدمة */}
              <p className="text-white/70 text-lg">{service.description}</p>

              <div className="w-full border-b border-white/20 mt-2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .neon-text {
          text-shadow:
            0 0 5px #00fff7,
            0 0 10px #00fff7,
            0 0 20px #00fff7,
            0 0 40px #00fff7;
        }
        .glow {
          box-shadow: 0 0 10px #00fff7, 0 0 20px #00fff7, 0 0 30px #00fff7;
        }
      `}</style>
    </section>
  )
}

export default Services
