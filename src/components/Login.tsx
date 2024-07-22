import { useState } from "react";
import { isNil } from "../utils/helpers";
import Button, { ButtonState } from "./Button";
import Input from "./Input";

export const Login = () => {
  const [value, setValue] = useState<{
    userId: string | undefined;
    password: string | undefined;
  }>({
    userId: undefined,
    password: undefined,
  });

  const getButtonState = (): ButtonState => {
    if (isNil(value.userId?.trim()) || isNil(value.password?.trim())) {
      return "disabled";
    }
    return "active";
  };

  return (
    <div
      className={`bg-darkA border-2 rounded-lg py-10 px-6 border-gray max-w-lg `}
    >
      <h2 className="text-medium text-mediumGray text-sm/4 text-center">
        WELCOME BACK
      </h2>
      <h3 className="text-semibold text-gray-800 text-lg/4 mt-2 text-white text-center mb-11.25">
        Log into your account
      </h3>
      <form>
        <div className="mb-4">
          <Input
            label="Email or Username"
            onChange={(e) => {
              setValue((prev) => ({ ...prev, userId: e.target.value }));
            }}
            placeholder="Enter your email or username"
            type="text"
            value={value.userId}
          />
        </div>

        <Input
          label="Password"
          trailingLabel="Forgot password?"
          onTrailingLabelPressed={() => {
            console.log("Coming soon");
          }}
          onChange={(e) => {
            setValue((prev) => ({ ...prev, password: e.target.value }));
          }}
          placeholder="Enter your password"
          type="password"
          value={value.password}
        />

        <div className="mt-5">
          <Button
            label="Login now"
            onClick={() => {}}
            state={getButtonState()}
          />
        </div>
        <div className="mt-3">
          <a href={"/signup"} className="text-sm text-silver hover:underline">
            Not registered yet?{" "}
            <span className="text-lightGray">Register →</span>
          </a>
        </div>
      </form>
    </div>
  );
};