import bannerImg2 from "../../assets/banner.png";
import { motion } from "framer-motion";
const Banner2 = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-16 md:py-24">
        {/* banner info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="banner-info flex flex-col justify-center"
        >
          <div className="text-center md:text-start space-y-7 md:max-w-[450px]">
            <h1 className="font-bold text-3xl md:text-4xl !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-dark2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
              incidunt!
            </p>
            <a href="#" className="primary-btn inline-block">
              Join Now
            </a>
          </div>
        </motion.div>
        {/* banner img */}
        <div className="banner-img flex justify-center items-center">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            src={bannerImg2}
            className="w-[350px] md:max-w-[450px] drop-shadow"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
