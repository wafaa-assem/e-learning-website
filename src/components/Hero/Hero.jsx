import { IoIosArrowRoundForward } from "react-icons/io";
import heroImage from "../../assets/hero.png";
import blob from "../../assets/blob.svg";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

// const hVariants = {
//   hidden: {
//     opacity: 0,
//     y:50
//   },
//   visible: {
//     opacity: 1,
//     y:0,
//     transition: {
//       type:"spring",
//       duration: 0.5,
//       delay:0.5,
//     },
//   },
// };

// func return obj direct ==> to can send param to it

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness :100,
        duration: 0.5,
        delay,
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* hero info */}
        <div className="flex items-center md:max-w-[400px] relative z-[20]">
          <div className="hero-info space-y-10 text-center md:text-start">
            <motion.h1
              variants={fadeUp(0.6)}
              initial="hidden"
              animate="visible"
              className="font-bold text-3xl lg:text-5xl !leading-snug"
            >
              Let's Learn to build a{" "}
              <span className="text-secondary">Website</span> for your business
            </motion.h1>
            <motion.div
              variants={fadeUp(0.8)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start  "
            >
              <button className="primary-btn flex items-center gap-3 group">
                Get Started{" "}
                <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* hero image */}
        <div className="hero-image flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeInOut",
            }}
            src={heroImage}
            alt=""
            className="w-[400px] xl:w-[600px] drop-shadow relative z-[20]"
          />
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeInOut",
            }}
            src={blob}
            alt=""
            className="w-[800px] md:w-[1500px] absolute -bottom-32 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
