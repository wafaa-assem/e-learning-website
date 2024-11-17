import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-light">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 md:py-24"
      >
        {/* first section */}
        <div className="first space-y-4 max-w-[300px]">
          <h1 className="text-2xl font-bold">The Coding Journey</h1>
          <p className="text-dark2">
            TCJ is a platform dedicated to empowering aspiring developers. From
            beginner tutorials to advanced programming concepts, we provide a
            comprehensive learning experience designed to help you master coding
            skills, build projects, and launch your tech career.
          </p>
        </div>
        {/* second section */}
        <div className="second grid grid-cols-2 gap-10">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Courses</h1>
            <div>
              <ul className="space-y-4 text-dark2 text-xl">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Web Development
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Software Development
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Apps Development
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  E-learning
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Links</h1>
            <div>
              <ul className="space-y-4 text-dark2 text-xl">
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Home
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Services
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  About
                </li>
                <li className="cursor-pointer hover:text-secondary duration-200">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* third section */}
        <div className="third space-y-4 max-w-[300px]">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-4 w-full rounded-s-xl placeholder:text-dark2 focus:outline-none"
            />
            <button className="bg-primary px-6 py-4 text-white font-semibold rounded-e-xl">
              Go
            </button>
          </div>
          <div className="py-3">
            <ul className="flex items-center gap-6">
              <li className="hover:text-primary hover:scale-110 duration-200">
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="hover:text-primary hover:scale-110 duration-200">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="hover:text-primary hover:scale-110 duration-200">
                <a href="#">
                  <TbWorldWww />
                </a>
              </li>
              <li className="hover:text-primary hover:scale-110 duration-200">
                <a href="#">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
