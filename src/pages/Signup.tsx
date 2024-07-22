import React, { useState } from "react";
import Input from "../components/Input";
import Button, { ButtonState } from "../components/Button";
import { isNil } from "../utils/helpers";
import localStorageUtil from "../utils/localStorage";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import { useModal } from "../Contexts/ModalContext";

const SignUp = ({ isModal }: { isModal?: boolean }) => {
  const navigate = useNavigate();
  const { showModal } = useModal();

  const [value, setValue] = useState<{
    email: string;
    userId: string;
    password: string;
  }>({
    email: "",
    userId: "",
    password: "",
  });

  const [error, setError] = useState<string | undefined>("");

  const getButtonState = (): ButtonState => {
    if (isNil(value.email) || isNil(value.password) || isNil(value.userId)) {
      return "disabled";
    }
    return "active";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!value.email || !value.userId || !value.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (value.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    // Valid case
    if (localStorageUtil.getItem("user-data") !== null) {
      localStorageUtil.removeItem("user-data");
    }
    localStorageUtil.setItem("user-data", value);
    setError("");
  };

  const handleClick = () => {
    if (isModal) {
      showModal(<Login />);
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-darkA border-2 rounded-lg py-10 px-6 border-gray mt-12">
        <h2 className="text-medium text-mediumGray text-sm/4 text-center">
          SIGN UP
        </h2>
        <h3 className="text-semibold text-gray-800 text-lg/4 mt-2 text-white text-center mb-11.25">
          Create an account to continue
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Email"
              onChange={(e) => {
                setValue((prev) => ({ ...prev, email: e.target.value }));
              }}
              placeholder="Enter your email"
              type="email"
              value={value.email}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Username"
              onChange={(e) => {
                setValue((prev) => ({ ...prev, userId: e.target.value }));
              }}
              placeholder="Choose a preferred username"
              type="text"
              value={value.userId}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Password"
              onChange={(e) => {
                setValue((prev) => ({ ...prev, password: e.target.value }));
              }}
              placeholder="Choose a strong password"
              type="password"
              value={value.password}
            />
          </div>
          {error && (
            <div className="mb-2 text-red-600 text-center mt-6">{error}</div>
          )}
          <div className="mt-5">
            <Button label="Continue" type="submit" state={getButtonState()} />
          </div>
          <div className="mt-3">
            <div
              onClick={() => handleClick()}
              className="text-sm text-silver hover:underline"
            >
              Already have an account?{" "}
              <span className="text-lightGray">Login →</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
