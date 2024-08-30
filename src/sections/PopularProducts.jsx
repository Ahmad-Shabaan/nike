import { useRef } from "react";
import ProductCard from "../components/ProductCard";
import { leftVariants, products, rightVariants } from "../constants";
import { motion, useInView } from "framer-motion";
const PopularProducts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50px",
    amount: "some",
    once: true,
  });
  return (
    <section
      id="products"
      className="max-container max-sm:mt-12  overflow-hidden"
    >
      <div className="flex flex-col justify-start gap-5">
        <motion.div
          ref={ref}
          variants={leftVariants}
          initial="initial"
          animate={isInView && "animate"}
        >
          <motion.h2
            variants={leftVariants}
            className="font-palanquin text-4xl font-bold  "
          >
            Our <span className="text-coral-red">Popular </span>
            Products
          </motion.h2>
          <motion.p
            variants={leftVariants}
            className="font-montserrat text-slate-gray mt-2 lg:max-w-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            ab modi rem soluta est qui iure enim delectus incidunt vitae.
            Consectetur ducimus aut laudantium consequatur labore deserunt ipsam
            sapiente cumque?
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={rightVariants}
          initial="initial"
          animate={isInView && "animate"}
        >
          <motion.div
            variants={rightVariants}
            className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
          >
            {products.map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProducts;
