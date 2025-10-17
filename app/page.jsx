"use client"
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import ProcessComponent from "@/components/ProcessComponent";
import Link from "next/link";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }}
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-black"
    >
      <div className="container mx-auto px-4 xl:px-0 pt-5 flex flex-col xl:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div className="order-2 text-center xl:text-left xl:order-none flex-1">
          <span className="text-lg text-white/60 uppercase tracking-widest">
            FrontEnd Developer
          </span>
          <h1 className="mb-6 mt-3 text-5xl xl:text-6xl font-extrabold text-white leading-tight">
            Hello I'm <br />
            <span className="neon-text">Haedara Salloum</span>
          </h1>
          <p className="max-w-[550px] mb-9 text-white/70 text-lg">
            I am a software engineer with a strong passion for programming and
            web development. I have about two years of experience in front-end
            website design and development.
          </p>

          {/* Button and Socials */}
          <div className="flex flex-col xl:flex-row items-center gap-6 xl:gap-8">
            <a href="/cv.pdf" download>
            <Button
  variant="outline"
  size="lg"
  className="flex items-center gap-3 text-lg p-4 uppercase border-accent-Default text-accent-Default hover:bg-accent-Default hover:text-black hover:scale-105 transition-all duration-500"
>
  Download CV <FiDownload />
</Button>

            </a>

            <div>
              <Social
                containerStyles={"flex gap-6"}
                iconStyles={
                  "w-10 h-10 border border-accent-Default rounded-full flex justify-center items-center text-accent-Default hover:bg-accent-Default hover:text-black transition-all duration-500"
                }
              />
            </div>
          </div>
        </div>

        {/* Photo Section */}
<div className="order-1 xl:order-none flex-1 flex justify-center xl:justify-end mb-8 xl:mb-0 transition-all transform hover:scale-105">
          <Photo />
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 xl:mt-24">
        <Stats />
      </div>
       {/* Stats Section */}
      <div className="mt-16 xl:mt-24">
        <ProcessComponent />
      </div>
      <div className="mt-16 xl:mt-24 text-center">
  <h3 className="text-3xl font-bold text-white mb-8">آراء العملاء</h3>
  <div className="flex flex-col xl:flex-row gap-12 justify-center">
    {/* Testimonial 1 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="text-white/70 mb-4">"كان العمل مع Haedara ممتعًا للغاية. الموقع الذي تم تطويره كان أكثر مما كنت أتوقع!"</p>
      <span className="text-accent-Default font-bold">أحمد المير</span>
    </div>
    {/* Testimonial 2 */}
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <p className="text-white/70 mb-4">"التصميم كان مذهلاً، والواجهة سهلة الاستخدام للغاية. بالتأكيد سأعود للعمل معه مرة أخرى!"</p>
      <span className="text-accent-Default font-bold">سارة إبراهيم</span>
    </div>
  </div>
</div>
<div className="text-center flex flex-col items-center mt-16 pb-10">
  <h2 className="text-3xl font-bold text-white mb-4">هل ترغب في بدء مشروعك الآن؟</h2>
  <p className="text-lg text-white/70 mb-6">اتصل بي الآن لنبدأ في بناء موقعك الرائع!</p>
  <Button variant="outline" size="lg" 
  className="flex items-center gap-3 text-lg p-4 uppercase border-accent-Default text-accent-Default hover:bg-accent-Default hover:text-black hover:scale-105 transition-all duration-500"
  >
    <Link href={"/contact"}>تواصل معي</Link>
  </Button>
</div>


    </motion.section>
  );
}
