import { star } from "../assets/icons";

const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col flex-1 w-full ">
        <img
          src={product.imgURL}
          alt={product.name}
          className="w-[280px] h-[280px]"
        />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="font-montserrat text-slate-gray text-xl leading-normal">
            (4.5)
          </p>
        </div>
        <h3 className="mt-2 text-2xl font-palanquin font-semibold leading-normal">
          {product.name}
        </h3>
        <p className="mt-2 font-montserrat leading-normal text-2xl font-semibold text-coral-red">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
