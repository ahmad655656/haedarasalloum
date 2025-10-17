"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ProcessComponent = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      className="min-h-screen flex flex-col justify-center py-16 "
    >
      <div className="container mx-auto px-4 xl:px-0 text-center">
        <h2 className="text-4xl font-bold text-accent-Default mb-10 neon-text animate__animated animate__fadeIn">
          كيف أصمم المواقع؟ 🤔💻
        </h2>
        <p className="text-lg text-white/70 mb-12 animate__animated animate__fadeIn animate__delay-1s">
          عندما تبدأ مشروع ويب، تكون الأمور أكثر من مجرد كتابة الأكواد! إليك كيف أعالج كل جانب
          من عملية التصميم بطريقة مبتكرة ومرحة.
        </p>

        <div className="flex flex-col xl:flex-row justify-center gap-12">
          {/* Step 1: Planning */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full xl:w-1/4 flex flex-col items-center text-white"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-6xl text-accent-Default mb-4 hover:text-blue-400 transform hover:scale-125 transition-all duration-500">
                  <FaLaptopCode />
                </TooltipTrigger>
                <TooltipContent>
                  <p>التخطيط</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h3 className="text-3xl font-bold mb-4 text-accent-Default">1. التخطيط</h3>
            <p className="text-white/70">
              قبل أن أبدأ الكتابة، أضع خطة وأرسم هيكل الموقع (Wireframe) حتى أضمن لك تجربة مستخدم
              رائعة.
            </p>
          </motion.div>

          {/* Step 2: Design */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full xl:w-1/4 flex flex-col items-center text-white"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-6xl text-accent-Default mb-4 hover:text-pink-400 transform hover:scale-125 transition-all duration-500">
                  <FaPaintBrush />
                </TooltipTrigger>
                <TooltipContent>
                  <p>التصميم</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h3 className="text-3xl font-bold mb-4 text-accent-Default">2. التصميم</h3>
            <p className="text-white/70">
              مع التصميم يأتي الإبداع! أختار الألوان، الخطوط، وأصمم واجهة المستخدم (UI) بأعلى
              درجات الجمال والوظائف.
            </p>
          </motion.div>

          {/* Step 3: Development */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="w-full xl:w-1/4 flex flex-col items-center text-white"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-6xl text-accent-Default mb-4 hover:text-green-400 transform hover:scale-125 transition-all duration-500">
                  <FaMobileAlt />
                </TooltipTrigger>
                <TooltipContent>
                  <p>التطوير</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h3 className="text-3xl font-bold mb-4 text-accent-Default">3. التطوير</h3>
            <p className="text-white/70">
              الآن يأتي الجزء الذي يحبّه الجميع: كتابة الأكواد! أستخدم تقنيات حديثة لضمان أن الموقع
              يعمل على كل الأجهزة.
            </p>
          </motion.div>

          {/* Step 4: Testing */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="w-full xl:w-1/4 flex flex-col items-center text-white"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-6xl text-accent-Default mb-4 hover:text-yellow-400 transform hover:scale-125 transition-all duration-500">
                  <FaDatabase />
                </TooltipTrigger>
                <TooltipContent>
                  <p>الاختبار</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <h3 className="text-3xl font-bold mb-4 text-accent-Default">4. الاختبار</h3>
            <p className="text-white/70">
              بعد الانتهاء من البرمجة، يأتي وقت الاختبار! أتأكد من أن كل شيء يعمل بسلاسة وأُجري
              تحسينات إضافية.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 animate__animated animate__fadeIn animate__delay-1s">
          <p className="text-lg text-white/70">
            في النهاية، كل هذا يترجم إلى موقع ويب مذهل جاهز للإطلاق! 🚀
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default ProcessComponent;
