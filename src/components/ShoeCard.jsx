const ShoeCard = ({ imgUrl, onChange, currentImgUrl }) => {
  return (
    <div
      className={`border-2 rounded-xl ${
        imgUrl.bigShoe === currentImgUrl
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1 `}
      onClick={() =>
        imgUrl.bigShoe !== currentImgUrl && onChange(imgUrl.bigShoe)
      }
    >
      <div className="flex items-center justify-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt={"Shoes Collection"}
          width={127}
          height={103}
          className="object-contain hover:rotate-45 hover:duration-500"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
