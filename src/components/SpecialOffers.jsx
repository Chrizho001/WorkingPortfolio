import { offer } from "../assets/images";
import Button from "./Button";

import { motion } from "framer-motion";

function SpecialOffers() {
  return (
    <section className="flex flex-wrap justify-start items-center max-xl:flex-col-reverse gap-10 max-container">
      <motion.div
        initial={{
          opacity: 1,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.3, ease: "easeOut" },
          delay: 0.1,
        }}
        viewport={{
          once: false,
        }}
        className="flex-1"
      >
        <img
          src={offer}
          alt=""
          width={773}
          height={687}
          className="object-contain"
        />
      </motion.div>
      <motion.div
        initial={{
          opacity: 1,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.3, ease: "easeIn" },
          delay: 0.1,
        }}
        viewport={{
          once: false,
        }}
        className="flex flex-1 flex-col"
      >
        <h2 className="font-palanquin text-4xl lg:max-w-lg capitalize font-bold">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redifines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleded value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desired, surpassing the logiest expectations. Your journey with is
          nothing short of exceptional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default SpecialOffers;
