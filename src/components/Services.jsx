import { services } from "../constants/mine";
import ServiceCard from "./ServiceCard";
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

function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 ">
      {services.map((service, index) => (
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          custom={index}
          key={index}
        >
          <ServiceCard {...service} />
        </motion.div>
      ))}
    </section>
  );
}

export default Services;
