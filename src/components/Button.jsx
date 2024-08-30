const Button = ({
  txtBtn,
  iconUrl,
  borderColor,
  txtColor,
  bgBtn,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 px-7 py-4 font-montserrat rounded-full ${
        fullWidth && "w-full"
      } ${txtColor || "text-white"}  text-lg leading-none ${
        bgBtn || "bg-coral-red"
      }  border ${borderColor || "border-coral-red "} `}
    >
      {txtBtn}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
