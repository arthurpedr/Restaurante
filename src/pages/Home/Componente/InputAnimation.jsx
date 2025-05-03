import React from "react";

const InputField = ({ id, label, placeholder }) => {
  return (
    <div className="relative w-[300px]">
      <input
        type={placeholder}
        id={id}
        className="peer border-2 p-[15px] pt-[25px] bg-transparent rounded-[10px] outline-none text-white w-full h-[40px] placeholder-transparent"
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="absolute left-[15px] top-[50%] translate-y-[-50%] text-white text-base transition-all duration-300 peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[0.7em] peer-focus:bg-[#1A1A1A] peer-focus:px-2 peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-[0.7em] peer-not-placeholder-shown:bg-[#1A1A1A] peer-not-placeholder-shown:px-2"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
