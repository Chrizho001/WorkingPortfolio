import { navLinks } from "../constants/mine";
import { motion } from "framer-motion";
import { hamburger } from "../assets/icons";

const motionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

function Nav() {
  return (
    <motion.header
      variants={motionVariants}
      initial="hidden"
      animate="show"
      className="padding-x py-6 absolute z-10 w-full"
    >
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn", delay: 0 }}
        className="flex justify-between items-center max-container"
      >
        <a href="/">
          <img src="/images/logo.png" alt="Logo" width={90} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href="{item.href}"
                className="font-Roboto font-semibold leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={20} height={20} />
        </div>
      </motion.nav>
    </motion.header>
  );
}

export default Nav;
