"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "cars website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
        level: "😀", // مبتدئ
    image: "/asset/car.png",
    live: "https://ahmad655656.github.io/Fifth-project/",
    github: "https://github.com/ahmad655656/Fifth-project.git",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "games website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
        level: "😀", // مبتدئ
    image: "/asset/game.png",
    live: "https://ahmad655656.github.io/gameWebsite/",
    github: "https://github.com/ahmad655656/gameWebsite.git",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "portfolio website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
        level: "😀", // مبتدئ

    image: "/asset/portfolio.png",
    live: "https://ahmad655656.github.io/The-fourth-project/",
    github: "https://github.com/ahmad655656/The-fourth-project.git",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description: "Medical website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
    ],
        level: "😀", // مبتدئ

    image: "/asset/medical.png",
    live: "",
    github: "https://github.com/ahmad655656/medical.git",
  },
   {
    num: "05",
    category: "full-stack",
    title: "project 5",
    description: "Ecommerce website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Stripe" },
    ],
        level: "😎", // متوسط

    image: "/asset/fullstack.mp4",
    live: "https://photoland-five.vercel.app/",
    github: "https://github.com/ahmad655656/photoland.git",
  },
   {
    num: "06",
    category: "frontend",
    title: "project 6",
    description: "carland website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
        level: "😎", // متوسط

    image: "/asset/carland.png",
    live: "https://car-ashy-nine.vercel.app/",
    github: "https://github.com/ahmad655656/car.git",
  },
  {
    num: "07",
    category: "frontend",
    title: "project 7",
    description: "constructions website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
        level: "😎", // متوسط

    image: "/asset/constructions.png",
    live: "https://urban-build-phi.vercel.app/",
    github: "https://github.com/ahmad655656/urbanBuild.git",
  },
  {
    num: "08",
    category: "frontend",
    title: "project 8",
    description: "Games website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
        level: "😎", // متوسط

    image: "/asset/TypeScriptGame.png",
    live: "https://game-chi-ashen-73.vercel.app/",
    github: "https://github.com/ahmad655656/game.git",
  },
  {
    num: "09",
    category: "frontend",
    title: "project 9",
    description: "Software Landing Page .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
        level: "😎", // متوسط

    image: "/asset/softwareLandingPage.png",
    live: "https://software-landing-page-1n9g.vercel.app/",
    github: "https://github.com/ahmad655656/softwareLandingPage.git",
  },
   {
    num: "10",
    category: "frontend",
    title: "project 10",
    description: "Ai_Image Generator website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
        level:"🏆",

    image: "/asset/aiImage.png",
    live: "https://ai-image-iota-five.vercel.app/",
    github: "https://github.com/ahmad655656/aiImage.git",
  },
   {
    num: "11",
    category: "frontend",
    title: "project 11",
    description: "Foodie Landing Page .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
        level:"🏆", 

    image: "/asset/foodie.png",
    live: "https://foodie-mauve-two.vercel.app",
    github: "https://github.com/ahmad655656/foodie.git",
  },
  {
    num: "12",
    category: "fullstack",
    title: "project 12",
    description: "CodeSync Website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Clerk" },
      { name: "Convex" },
    ],
        level:"🏆", 

    image: "/asset/codesync.png",
    live: "https://condesync.vercel.app/",
    github: "https://github.com/ahmad655656/condesync.git",
  },
  {
    num: "13",
    category: "fullstack",
    title: "project 13",
    description: "Socially Website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Clerk" },
      { name: "Prisma" },
    ],
        level:"🏆", 

    image: "/asset/socially.png",
    live: "https://socially-indol.vercel.app/",
    github: "https://github.com/ahmad655656/socially.git",
  },
  {
    num: "14",
    category: "fullstack",
    title: "project 14",
    description: "SleepTracker Website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Typescript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Clerk" },
      { name: "Prisma" },
    ],
        level:"🏆", 

    image: "/asset/sleeptracker.png",
    live: "https://sleeptracker-rho.vercel.app/",
    github: "https://github.com/ahmad655656/sleeptracker.git",
  },
   {
    num: "15",
    category: "frontend",
    title: "project 15",
    description: "Courses Website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    level:"🏆", 
    image: "/asset/courses.png",
    live: "https://maiskejani.vercel.app/",
    github: "https://github.com/ahmad655656/maiskejani.git",
  },
  {
    num: "16",
    category: "frontend",
    title: "project 16",
    description: "Intelligence games Website .",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind css" },
      { name: "React.js" },
      { name: "Next.js" },
    ],
    level:"🏆", 
    image: "/asset/IntelligenceGames.png",
    live: "https://gamingapp-one.vercel.app/",
    github: "https://github.com/ahmad655656/gamingapp.git",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center py-16 bg-gradient-to-br from-gray-900 via-gray-950 to-black"
    >
      <div className="container mx-auto px-4 xl:px-0">
        <h1 className="text-4xl xl:text-5xl font-bold text-center text-accent-Default mb-12 neon-text">
          My Projects
        </h1>

        <div className="flex flex-col xl:flex-row xl:gap-20 items-center">
          
          {/* تفاصيل المشروع */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full xl:w-1/2 flex flex-col gap-6 text-white"
          >
            <div className="text-[7rem] font-extrabold text-white/10 select-none leading-none">
              {project.num}
            </div>
            <h2 className="text-3xl xl:text-4xl font-bold capitalize text-accent-Default">
              {project.category} Project <span>{project.level}</span>
            </h2>
            <p className="text-white/70 text-lg">{project.description}</p>
            <ul className="flex flex-wrap gap-3 mt-2">
              {project.stack.map((item, idx) => (
                <li key={idx} className="text-sm text-white/80 font-semibold">
                  {item.name}
                  {idx !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>

            {/* أزرار Live و GitHub */}
            <div className="flex gap-5 mt-6">
              {project.live && (
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-full bg-accent-Default flex justify-center items-center hover:scale-110 transition-transform duration-300 glow">
                        <BsArrowUpRight className="text-2xl text-black" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-full bg-accent-Default flex justify-center items-center hover:scale-110 transition-transform duration-300 glow">
                        <BsGithub className="text-2xl text-black" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </motion.div>

          {/* عرض المشروع */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full xl:w-1/2 relative"
          >
            <Swiper
              onSlideChange={handleSlideChange}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[500px]"
            >
              {projects.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[500px] flex justify-center items-center group">
                    <div className="absolute h-fit inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-xl"></div>
                    <div className="relative w-full h-full">
                      {item.category !== "full-stack" ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-contain rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <video
                          controls
                          muted
                          autoPlay
                          loop
                          className="w-full h-[90%] rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500"
                          src={item.image}
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                btnStyles="bg-accent-Default p-3 hover:bg-accent-hover text-black text-[22px] w-12 h-12 flex justify-center items-center rounded-full shadow-lg transition-all glow"
                containerStyles="flex gap-2 absolute right-0 bottom-[50%] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              />
            </Swiper>
          </motion.div>
        </div>
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
    </motion.section>
  );
};


export default Work;
