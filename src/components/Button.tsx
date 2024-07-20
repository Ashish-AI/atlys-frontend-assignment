import React from "react";

const Button = ({
  variant = "fullWidth",
  label,
  onClick,
  state = "active",
}: {
  variant?: "fullWidth" | "autoWidth";
  label: string;
  onClick: () => void;
  state?: "loading" | "active" | "disabled";
}) => {
  // Base styles for the button
  const baseStyles =
    "py-2 px-4 rounded-md text-white flex items-center justify-center ";

  // Conditional styles based on variant
  const variantStyles = {
    fullWidth: "w-full",
    autoWidth: "w-auto",
  };

  // Conditional styles based on state
  const stateStyles = {
    loading: "bg-blueA cursor-wait",
    disabled: "bg-lightGray cursor-not-allowed",
    active: "bg-blue hover:bg-blueA",
  };

  // Decide the final button styles based on the variant and state
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${stateStyles[state]}`;

  return (
    <button
      onClick={
        state === "loading" || state === "disabled" ? undefined : onClick
      }
      className={buttonStyles}
      disabled={state === "disabled"}
    >
      {state === "loading" ? (
        <div className="w-6 h-6 border-2 border-white border-t-transparent border-solid rounded-full animate-spin"></div>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
