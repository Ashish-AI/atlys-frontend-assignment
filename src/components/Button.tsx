import React from "react";

const Button = ({
  variant = "fullWidth",
  label,
  onClick,
}: {
  variant?: "fullWidth" | "autoWidth";
  label: string;
  onClick: () => void;
}) => {
  const baseStyles = "py-2 px-4 rounded-md text-white bg-blue hover:bg-blueA";

  const variantStyles = {
    fullWidth: "w-full ",
    autoWidth: "w-auto",
  };

  return (
    // 	<button
    // 	type="submit"
    // 	className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
    // >
    // 	Login now
    // </button>
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}}`}
    >
      {label}
    </button>
  );
};

export default Button;
