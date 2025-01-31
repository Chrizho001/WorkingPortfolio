import Button from "./Button";
import { blazing } from "../assets/MyImages/zindex";

import { motion } from "framer-motion";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div
        initial={{
          opacity: 1,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: "easeIn" },
          delay: 0.1,
        }}
        viewport={{
          once: false,
        }}
        className="flex flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl lg:max-w-lg capitalize font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text font-normal">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experiecnce, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text font-normal">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 1,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: "easeOut" },
          delay: 0.1,
        }}
        viewport={{
          once: false,
        }}
        className="flex-1 flex justify-center items-center bg-[url('assets/MyImages/mybg.avif')] bg-center bg-contain"
      >
        <img
          src={blazing}
          alt=""
          width={550}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
}

export default SuperQuality;
