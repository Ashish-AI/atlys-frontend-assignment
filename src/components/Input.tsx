import React from "react";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  label: string;
  trailingText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTrailingTextPressed?: () => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  label,
  trailingText,
  onTrailingTextPressed,
  value,
  onChange,
}) => {
  return (
    <div>
      <div className="flex justify-between align-middle mb-2.5">
        <label className="text-sm font-medium text-lightGray  ">{label}</label>
        <label className="text-xs font-medium text-lightGray text-center hover:underline cursor-pointer">
          {trailingText}
        </label>
      </div>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="w-full px-3 py-3  bg-darkA border border-charcoal rounded-lg focus:outline-none focus:border-white focus:ring-0 text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
