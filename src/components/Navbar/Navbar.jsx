import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
const MenuList = [
  {
    id: "1",
    title: "Home",
    path: "#",
  },
  {
    id: "2",
    title: "Services",
    path: "#",
  },
  {
    id: "3",
    title: "About Us",
    path: "#",
  },
  {
    id: "4",
    title: "Our Team",
    path: "#",
  },
  {
    id: "5",
    title: "Contact Us",
    path: "#",
  },
];
const Navbar = () => {
  return (
    <nav className="py-10 relative z-[20]">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="container flex justify-between items-center"
      >
        {/* Logo Section */}
        <div className="logo">
          <h1 className="font-bold text-2xl">The Coding Journey</h1>
        </div>
        {/* Menu Section */}
        <div className="menu hidden lg:block">
          <ul className="flex items-center gap-3 ">
            {MenuList.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="relative px-2 py-4 group hover:text-secondary"
                >
                  <div className="size-2 bg-secondary rounded-full absolute start-1/2 -translate-x-1/2 bottom-0 hidden group-hover:block"></div>
                  {menu.title}
                </a>
              </li>
            ))}
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* Mobile Hamburger Menu Section */}
        <div className="hamburger lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
