import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { motion, useInView } from "framer-motion";
import { leftVariants, rightVariants } from "../constants";
import { useRef } from "react";

const SpecialOffer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    amount: "some",
    once: true,
  });

  return (
    <section
      id="offer"
      className="max-container flex justify-between items-center flex-wrap max-lg:flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        ref={ref}
        variants={leftVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <div className="flex-1 ">
          <img
            src={offer}
            alt="offer"
            className="object-contain w-full"
            width={733}
            height={687}
          />
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        variants={rightVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.div className="flex-1 w-full">
          <motion.h2 className="font-palanquin text-4xl leading-normal font-bold lg:max-w-lg">
            <span className="text-coral-red">Special </span>
            Offer
          </motion.h2>
          <motion.p className="info-text mt-6 lg:max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eum
            quia, non minus culpa recusandae obcaecati perferendis a, earum
            provident, quos eos fuga eaque repellat assumenda officiis autem ex
            modi?
          </motion.p>
          <motion.p className="info-text mt-6 lg:max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi autem
            laboriosam incidunt natus modi quam adipisci maxime ab quo velit,
            facere dignissimos vel sequi, recusandae, expedita iste facilis
            temporibus eos?
          </motion.p>

          <motion.div className="mt-11 flex flex-wrap gap-4  ">
            <Button txtBtn={"Shop now"} iconUrl={arrowRight} />
            <Button
              txtBtn={"Learn more"}
              txtColor={"text-coral-red"}
              bgBtn={"bg-white"}
              borderColor={"border-slate-gray"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
