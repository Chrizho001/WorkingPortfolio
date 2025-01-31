import PopularProductCard from "./PopularProductCard";
import { matchShoes } from "../constants/mine";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

function Match() {
  return (
    <motion.section
      variants={fadeInAnimationVariants}
      id="products"
      className="max-container max-sm:mt-12"
    >
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
          delay: 0.1,
        }}
        viewport={{
          once: false,
        }}
        className="flex flex-col justify-start gap-5"
      >
        <h2 className="text-4xl font-bold font-palanquin">
          Big <span className="text-coral-red">Thug</span> Boys Collection
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray ">
          Step up your game with{" "}
          <span className="font-bold">Thug Boys Collection</span>
          —where bold meets badass. <br />
          <span className="lg:max-w-lg font-montserrat font-bold text-primary leading-normal tracking-normal">
            Dare to stand out. Dare to be a Thug Boy.
          </span>
        </p>
      </motion.div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {matchShoes.map((product, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: false,
            }}
            custom={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <PopularProductCard {...product} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Match;
