import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, feedback, rating }) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col w-full">
      <img
        src={imgURL}
        alt="review"
        width={60}
        height={60}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="info-text text-center max-w-sm mt-6">{feedback}</p>
      <div className="mt-6 flex justify-start gap-2.5">
        <img
          src={star}
          alt="rating"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="font-montserrat text-slate-gray text-xl leading-normal ">
          ({rating})
        </p>
      </div>
      <h2 className="font-palanquin text-3xl font-bold text-center mt-1">
        {customerName}
      </h2>
    </div>
  );
};

export default ReviewCard;
