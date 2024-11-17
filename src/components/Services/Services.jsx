import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: <TbWorldWww />,
    delay: 0.2
  },
  {
    id: 2,
    title: "Mobile Development",
    icon: <CiMobile3 />,
    delay: 0.3
  },
  {
    id: 3,
    title: "Software Development",
    icon: <RiComputerLine />,
    delay: 0.4
  },
  {
    id: 4,
    title: "Satisfied clients",
    icon: <IoMdHappy />,
    delay: 0.5
  },
  {
    id: 5,
    title: "SEO optimization",
    icon: <IoPulseOutline />,
    delay: 0.6
  },
  {
    id: 6,
    title: "24/7 support",
    icon: <BiSupport />,
    delay: 0.7
  },
];
const slideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay:delay,
        ease: "easeInOut",
      },
    },
  };
};

const Services = () => {
  return (
    <section>
      <div className="container pt-16 pb-14">
        {/* heading */}
        <h1 className="text-4xl font-bold pb-10">Services we provide</h1>
        {/* services data */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"> 
          {servicesData.map((service) => (
            <motion.div
              variants={slideLeft(service.delay)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}  // to control in animation 
              key={service.id}
              className="card bg-[#f4f4f4] py-7 px-4 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white hover:shadow-2xl hover:scale-110 duration-300"
            >
              <div className="icon text-4xl">{service.icon}</div>
              <h1 className="text-lg font-semibold px-3 text-center">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
