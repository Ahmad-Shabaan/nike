import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Hero = () => {
  const [currentImgUrl, setCurrentImgUrl] = useState(bigShoe1);
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <section
      id="home"
      className="w-full flex flex-row max-xl:flex-col gap-10 min-h-screen max-container"
    >
      <motion.div variants={variants} initial="initial" animate="animate">
        <motion.div
          variants={variants}
          className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
        >
          <motion.p
            variants={variants}
            className="text-xl font-montserrat text-coral-red"
          >
            Our Summer Collection
          </motion.p>
          <motion.h1
            variants={variants}
            className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          >
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
              The New Arrival
            </span>
            <br />
            <span className="inline-block text-coral-red mt-3">Nike</span>
            Shoes
          </motion.h1>
          <motion.p
            variants={variants}
            className="font-montserrat text-slate-gray leading-8 mt-8 mb-16 text-lg sm:max-w-sm"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            provident cupiditate quidem aliquid eaque accusamus et eius magni
            voluptates, dolorem quaerat cum eos ratione natus excepturi unde
            vitae quos maiores.
          </motion.p>
          <Button
            variants={variants}
            txtBtn={"Shop Now"}
            iconUrl={arrowRight}
          />
          <motion.ul
            variants={variants}
            className="flex justify-start gap-16 items-start flex-wrap w-full mt-20 "
          >
            {statistics.map((statistic) => (
              <motion.li variants={variants} key={statistic.label}>
                <p className="font-bold text-4xl font-palanquin">
                  {statistic.value}
                </p>
                <p className="leading-7 text-slate-gray font-montserrat">
                  {statistic.label}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center ">
        <img
          src={currentImgUrl}
          alt="bigShoe1"
          width={610}
          height={610}
          className="object-contain relative z-10"
        />
        <div className="flex xl:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]  max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgUrl={shoe}
                onChange={(imgUrl) => {
                  setCurrentImgUrl(imgUrl);
                }}
                currentImgUrl={currentImgUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
