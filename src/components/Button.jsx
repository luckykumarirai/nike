const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center item-center px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white ">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowright"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;