import Button from "./Button";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container w-full flex flex-col justify-between items-center max-lg:flex-col gap-10"
    >
      <motion.h3
        initial={{
          opacity: 1,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeIn" },
          delay: 0.1,
        }}
        viewport={{
          once: false,
        }}
        className="text-4xl leading-[68px] lg:max-w-[70%] text-center font-palanquin font-bold "
      >
        Sign Up for<span className="text-coral-red"> Updates </span>& Newsletter
      </motion.h3>
      <motion.div
        initial={{
          opacity: 1,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: "easeIn" },
          delay: 0.4,
        }}
        viewport={{
          once: false,
        }}
        className="w-full lg:max-w-[70%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-hidden sm:border-hidden border max-sm:border-slate-gray max-sm:rounded-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
