'use client'
import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion"; // استخدمنا حركة فريمر لتحسين التفاعل
const stats = [
  {
    num: 2,
    text: "Years of Experience",
  },
  {
    num: 10,
    text: "Projects Completed",
  },
  {
    num: 6,
    text: "Technologies Mastered",
  },
  {
    num: 24,
    text: "The Age",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-5 xl:pb-5 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-7 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center md:flex-row flex-col gap-4 flex-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 1 }}
            >
              <div className="flex flex-col items-center">
                <motion.div
                  className="text-4xl font-extrabold xl:text-6xl text-accent-Default mb-2"
                  whileHover={{ scale: 1.1, color: "#00fff7" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl font-extrabold xl:text-6xl"
                  />
                </motion.div>
                <p className="text-white/80 text-center max-w-[120px] leading-snug text-lg">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
