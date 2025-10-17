'use client'
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaIdBadge, FaGraduationCap } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: "I'm a full stack developer passionate about building scalable and efficient applications.",
  info: [
    { fieldName: "Name", fieldValue: "Haedara Salloum" },
    { fieldName: "Phone", fieldValue: "(+963) 983 796 029" },
    { fieldName: "Experience", fieldValue: "2+ Years" },
    { fieldName: "WhatsApp", fieldValue: "(+963) 983 796 029" },
    { fieldName: "Nationality", fieldValue: "Syrian" },
    { fieldName: "Email", fieldValue: "haedarahasan69@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, English (Intermediate)" },
  ],
};

const experience = {
  icon: <FaIdBadge />,
  title: "My Experience",
  description: "2+ years developing scalable and efficient applications.",
  items: [
    { company: "Syrian Telecommunication Establishment", position: "Junior FrontEnd Developer", duration: "2023 - 2025" },
  ],
};

const education = {
  icon: <FaGraduationCap />,
  title: "My Education",
  description: "Bachelor's degree in Computer Science from University of Latakia.",
  items: [
    { institution: "University of Latakia", degree: "Bachelor's degree in Computer Science", duration: "2026" },
  ],
};

const skills = {
  title: "My Skills",
  description: "Strong background in FrontEnd and understanding of BackEnd development.",
  skilList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <RiNextjsFill />, name: "Next.js" },
  ],
};

const Resume = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.6 } }}
      className="min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black"
    >
      <div className="container mx-auto px-4 xl:px-0">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-12">
          {/* Tabs Navigation */}
          <TabsList className="flex flex-col w-full xl:w-[320px] gap-4">
            <TabsTrigger value="experience" className="hover:bg-accent-Default transition-all rounded-xl">Experience</TabsTrigger>
            <TabsTrigger value="education" className="hover:bg-accent-Default transition-all rounded-xl">Education</TabsTrigger>
            <TabsTrigger value="skills" className="hover:bg-accent-Default transition-all rounded-xl">Skills</TabsTrigger>
            <TabsTrigger value="about" className="hover:bg-accent-Default transition-all rounded-xl">About Me</TabsTrigger>
          </TabsList>

          {/* Tabs Content */}
          <div className="flex-1">
            {/* Experience */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl xl:text-5xl font-bold text-start text-accent-Default mb-5 neon-text">{experience.title}</h3>
                <p className="text-white/70">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-6">
                    {experience.items.map((item, idx) => (
                      <li key={idx} className="bg-[#232329] p-6 rounded-2xl flex flex-col gap-3 shadow-lg hover:shadow-accent-Default transition-shadow duration-300">
                        <span className="text-accent-Default">{item.duration}</span>
                        <h4 className="text-xl font-semibold">{item.position}</h4>
                        <p className="text-white/60">{item.company}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl xl:text-5xl font-bold text-start text-accent-Default mb-5 neon-text">{education.title}</h3>
                <p className="text-white/70">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-6">
                    {education.items.map((item, idx) => (
                      <li key={idx} className="bg-[#232329] p-6 rounded-2xl flex flex-col gap-3 shadow-lg hover:shadow-accent-Default transition-shadow duration-300">
                        <span className="text-accent-Default">{item.duration}</span>
                        <h4 className="text-xl font-semibold">{item.degree}</h4>
                        <p className="text-white/60">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl xl:text-5xl font-bold text-start text-accent-Default mb-5 neon-text">{skills.title}</h3>
                <p className="text-white/70">{skills.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {skills.skilList.map((skill, idx) => (
                      <li key={idx}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="bg-[#232329] rounded-xl p-8 flex justify-center items-center hover:bg-accent-Default transition-all duration-300 glow">
                              <div className="text-5xl text-white group-hover:text-black transition-all">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about">
              <div className="flex flex-col gap-8">
                <h3 className="text-4xl xl:text-5xl font-bold text-start text-accent-Default mb-5 neon-text">{about.title}</h3>
                <p className="text-white/70">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[700px]">
                  {about.info.map((info, idx) => (
                    <li key={idx} className="flex justify-between xl:justify-start gap-4">
                      <span className="text-white/60 w-32">{info.fieldName}</span>
                      <span className="text-white font-semibold">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <style jsx>{`
        .glow {
          box-shadow: 0 0 15px #00fff7, 0 0 25px #00fff7, 0 0 35px #00fff7;
        }
         .neon-text {
          text-shadow:
            0 0 5px #00fff7,
            0 0 10px #00fff7,
            0 0 20px #00fff7,
            0 0 40px #00fff7;
        }
      `}</style>
    </motion.section>
  );
};

export default Resume;
