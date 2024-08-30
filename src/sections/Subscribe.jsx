import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us "
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      {/* lg:max-w-md */}
      <h3 className="font-palanquin text-4xl font-bold leading-[68px]  capitalize"> 
        sign up for <span className="text-coral-red">updated</span> & newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex  items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="subscribe@souqx.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button txtBtn={"sign up"} fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
