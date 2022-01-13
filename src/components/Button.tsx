import React from "react";

export type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.VFC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="min-w-[20rem] text-xl text-gray-700 font-semibold
            py-2 px-10 border-2 border-teal-300
            hover:border-teal-400 active:text-gray-100 active:bg-teal-400"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
