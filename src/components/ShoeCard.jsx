import { motion } from "framer-motion";

const imageVariants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.goodShoe) {
      changeBigShoeImage(imgURL.goodShoe);
    }
  };
  return (
    <motion.div
      
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.goodShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center gap-3 items-center bg-[url('assets/MyImages/mybg.avif')] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.goodShoe}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}

export default ShoeCard;

// function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImg }) {
//   const handleClick = () => {
//     if (bigShoeImg !== imgURL.goodShoe) {
//       changeBigShoeImage(imgURL.goodShoe);
//     }
//   };

//   return (
//     <div
//       className={`border-2 rounded-xl ${
//         bigShoeImg === imgURL.imgURL ? "border-coral-red" : "border-transparent"
//       } cursor-pointer max-sm:flex-1`}
//       onClick={handleClick}
//     >
//       <div className="flex justify-center gap-3 items-center bg-[url('assets/images/thumbnail-background.svg')] bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
//         <img
//           src={imgURL.goodShoe}
//           alt="shoe collection"
//           width={127}
//           height={103}
//           className="object-contain"
//         />
//       </div>
//     </div>
//   );
// }

// export default ShoeCard;
