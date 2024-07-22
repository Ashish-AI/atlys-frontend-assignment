import React from "react";

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  trailingLabel?: string;
  leadingElement?: React.JSX.Element;
  trailingElement?: React.JSX.Element;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTrailingLabelPressed?: () => void;
  onLeadingElementPressed?: () => void;
  onTrailingElementPressed?: () => void;
  mode?: "grey" | "dark";
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  label,
  trailingLabel,
  leadingElement,
  trailingElement,
  onTrailingLabelPressed,
  onLeadingElementPressed,
  onTrailingElementPressed,
  value,
  onChange,
  mode = "grey",
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-2.5">
        <label className="text-sm font-medium text-lightGray">{label}</label>
        <label
          className="text-xs font-medium text-lightGray text-center hover:underline cursor-pointer"
          onClick={onTrailingLabelPressed}
        >
          {trailingLabel}
        </label>
      </div>

      <div className="relative">
        {leadingElement && (
          <div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 px-3 cursor-pointer"
            onClick={onLeadingElementPressed}
          >
            {leadingElement}
          </div>
        )}
        {trailingElement && (
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 px-3 cursor-pointer"
            onClick={onTrailingElementPressed}
          >
            {trailingElement}
          </div>
        )}
        <input
          type={type}
          onChange={onChange}
          value={value}
          className={`w-full py-3 ${leadingElement ? "pl-20 py-6" : "pl-3"} ${
            trailingElement ? "pr-12 py-6" : "pr-3"
          } ${
            mode === "dark"
              ? "bg-darker border-darker text-white"
              : "bg-darkA border-charcoal text-white"
          } border rounded-lg focus:outline-none focus:border-white focus:ring-0`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
