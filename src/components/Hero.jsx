
import { myShoe } from "../assets/MyImages/zindex";
import { statistics } from "../constants/mine";
import { myShoes } from "../constants/mine";
import Button from "./Button";
import ShoeCard from "./ShoeCard";

import { useState } from "react";

import { motion } from "framer-motion";

const motionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const imageVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(myShoe);

  return (
    <motion.section
      id="home"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container"
      variants={motionVariants}
      initial="hidden"
      animate="show"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 sm:px-16 pt-28 mt-8">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.1 }}
          className="text-xl font-Roboto text-coral-red"
        >
          Our Summer Collections
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          className="mt-10 font-Roboto text-[86px] max-sm:text-[72px] max-sm:leading-[82px] font-bold"
        >
          <motion.span className="xl:bg-white xl:whitespace-nowrap font-semibold relative z-10 pr-12 py-4">
            All New Steeze
            <br />
          </motion.span>
          <motion.span className="text-coral-red inline-block mt-5 xl:pt-2">
            Nike
          </motion.span>{" "}
          Shoes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeIn", delay: 0.2 }}
          className="font-Roboto font-light text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          you active life
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
        >
          <Button label="Shop now" />
        </motion.div>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <motion.div variants={imageVariants} key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Big Shoe Image */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-[url('assets/MyImages/mybg.avif')]  bg-cover bg-center ">
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          src={bigShoeImg}
          alt="Shoe colloection"
          width={610}
          height={600}
          className="object-contain relative z-10"
        />
        {/* bg-[url('assets/images/collection-background.svg')] */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {myShoes.map((shoe) => (
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={shoe.id}
            >
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
