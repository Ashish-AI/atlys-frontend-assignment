import React, { useState } from "react";
import { isNil } from "../utils/helpers";
import Button, { ButtonState } from "./Button";
import Input from "./Input";
import localStorageUtil from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { useModal } from "../Contexts/ModalContext";
import { SignUp } from "./SignUp";
import Eye from "../assets/images/eye.svg";

export const Login = ({ isModal }: { isModal?: boolean }) => {
  const [value, setValue] = useState<{
    userId: string | undefined;
    password: string | undefined;
  }>({
    userId: undefined,
    password: undefined,
  });

  const [error, setError] = useState<string | undefined>("");
  const [inputType, setInputType] =
    useState<React.HTMLInputTypeAttribute>("password");

  const navigate = useNavigate();
  const { showModal } = useModal();

  const userData = localStorageUtil.getItem("user-data");

  const getButtonState = (): ButtonState => {
    if (
      isNil(value.userId) ||
      isNil(value.password) ||
      (value.password && value.password?.length < 6)
    ) {
      return "disabled";
    }
    return "active";
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.userId || !value.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (
      userData &&
      (userData.email === value.userId || userData.userId === value.userId) &&
      userData.password === value.password
    ) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid user ID or password.");
    }
  };

  const handleClick = () => {
    if (isModal) {
      showModal(<SignUp isModal={isModal} />);
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="bg-darkA border-2 rounded-lg py-10 px-6 border-gray w-full max-w-lg mx-auto mt-12">
      <h2 className="text-medium text-mediumGray text-sm/4 text-center">
        WELCOME BACK
      </h2>
      <h3 className="text-semibold text-gray-800 text-lg/4 mt-2 text-white text-center mb-11.25">
        Log into your account
      </h3>
      <form onSubmit={handleLogin}>
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
          type={inputType}
          value={value.password}
          trailingElement={<img src={Eye} alt="comments" className="mr-1" />}
          onTrailingElementPressed={() => {
            setInputType((prev) => {
              if (prev === "text") {
                return "password";
              } else return "text";
            });
          }}
        />

        {error && (
          <div className="mb-2 text-red-600 text-center mt-6">{error}</div>
        )}

        <div className="mt-5">
          <Button label="Login now" type="submit" state={getButtonState()} />
        </div>
        <div className="mt-3">
          <div
            onClick={() => handleClick()}
            className="text-sm text-silver hover:underline"
          >
            Not registered yet?{" "}
            <span className="text-lightGray">Register →</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
