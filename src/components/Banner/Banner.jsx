import bannerImg from "../../assets/education.png";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { motion } from "framer-motion";
import { fadeUp } from "../Hero/Hero";
const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 py-16 md:py-24 gap-8">
        {/* Banner img */}
        <div className="banner-img flex justify-center items-center">
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={bannerImg}
            className="w-[350px] md:max-w-[450px] drop-shadow"
            alt=""
          />
        </div>
        {/* Banner info */}
        <div className="banner-info flex flex-col justify-center space-y-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl md:text-4xl text-center md:text-start !leading-snug"
          >
            The World's Leading Online learning Platform
          </motion.h1>
          <div className="flex flex-col gap-6">
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-[#f4f4f4] p-6 rounded-2xl hover:bg-white hover:shadow-2xl duration-300"
            >
              <FaBookReader className="text-2xl" />
              <p className="text-lg">10,000+ Courses</p>
            </motion.div>
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-[#f4f4f4] p-6 rounded-2xl hover:bg-white hover:shadow-2xl duration-300"
            >
              <GrUserExpert className="text-2xl" />
              <p className="text-lg">Expert Instruction</p>
            </motion.div>
            <motion.div
              variants={fadeUp(0.6)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-[#f4f4f4] p-6 rounded-2xl hover:bg-white hover:shadow-2xl duration-300"
            >
              <MdOutlineAccessTime className="text-2xl" />
              <p className="text-lg">Lifetime Access</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
