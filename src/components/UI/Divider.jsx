const Divider = ({ text, className }) => {
  return (
    <div
      className={`relative flex items-center ${className} w-full text-center`}
    >
      <div className=" w-full border-b bg-gray-300"></div>
      <span className=" w-full mx-4 text-gray-500 text-sm">{text}</span>
      <div className=" w-full border-b bg-gray-300"></div>
    </div>
  );
};

export default Divider;
