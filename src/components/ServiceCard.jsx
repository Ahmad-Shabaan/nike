const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] flex-col justify-start gap-2 shadow-3xl px-10 py-16">
      <div className="rounded-full bg-coral-red w-11 h-11 flex justify-center items-center">
        <img src={imgURL} alt="icon" width={24} height={24} />
      </div>
      <h3 className="font-palanquin text-3xl font-bold leading-normal">{label}</h3>
      <p className="info-text break-words font-montserrat text-lg">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
