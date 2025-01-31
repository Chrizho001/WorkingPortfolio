import { reviews } from "../constants/mine";
import ReviewCard from "./ReviewCard";

import { motion } from "framer-motion";

function CustomerReviews() {
  return (
    <section className="max-container">
      <motion.h3
        initial={{
          opacity: 1,
          x: -100,
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
        className="font-palanquin text-center text-4xl font-bold"
      >
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </motion.h3>
      <motion.p
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
        className="info-text m-auto mt-4 max-w-lg text-center"
      >
        Hear genuine stories from our satisfied customers about their
        excpetional experiences with us
      </motion.p>
      <motion.div
        initial={{
          opacity: 1,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeIn" },
          delay: 0.2,
        }}
        viewport={{
          once: false,
        }}
        className="mt-24 flex flex-1 flex-row justify-evenly items-center max-lg:flex-col gap-14"
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default CustomerReviews;
