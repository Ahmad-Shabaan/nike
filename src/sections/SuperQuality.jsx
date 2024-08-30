import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const SuperQuality = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    amount: "some",
    once: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col justify-start">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            we provide you
            <span className="text-coral-red"> super </span>
            <span className="text-coral-red">quality </span>
            shoes
          </h2>

          <p className="mt-4 info-text lg:max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum
            aspernatur consequuntur repellendus eos? Repellendus, vitae ab fuga
            maxime cupiditate perferendis commodi quasi possimus pariatur quod
            non. At, quisquam qui.
          </p>
          <div className="mt-11">
            <Button txtBtn={"View details"} />
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <img
            src={shoe8}
            alt="shoe"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </motion.div>
  );
};

export default SuperQuality;
