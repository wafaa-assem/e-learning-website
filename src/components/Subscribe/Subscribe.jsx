import bgImg from "../../assets/bg.png";
import { FaBell } from "react-icons/fa";
import { motion } from "framer-motion";
const Subscribe = () => {
  return (
    <section className="bg-light">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={{
          backgroundImage: `URL(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="container py-24 md:py-48 flex justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut"}}
          className="flex flex-col justify-center items-center gap-6 text-center max-w-[400px]"
        >
          <h1 className="font-bold text-3xl md:text-4xl !leading-snug">
            450K+ Students are learning from us
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            iusto minima
          </p>
          <button className="primary-btn flex items-center gap-3 group">
            Subscribe Now{" "}
            <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-300" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
