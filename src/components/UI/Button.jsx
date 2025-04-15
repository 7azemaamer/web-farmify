const Button = ({
  children,
  className = "",
  type = "button",
  onClick,
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-medium text-base bg-[#588258] text-white py-3 px-6 rounded-lg cursor-pointer
        hover:bg-[#588258]/80 transition-colors duration-200
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
