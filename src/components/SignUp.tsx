import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useModal } from "../Contexts/ModalContext";
import { isNil } from "../utils/helpers";
import localStorageUtil from "../utils/localStorage";
import Button, { ButtonState } from "./Button";
import Input from "./Input";
import Login from "./Login";
import Eye from "../assets/images/eye.svg";

export const SignUp = ({ isModal }: { isModal?: boolean }) => {
  const [value, setValue] = useState<{
    email: string;
    userId: string;
    password: string;
  }>({
    email: "",
    userId: "",
    password: "",
  });

  const navigate = useNavigate();
  const { showModal } = useModal();

  const [error, setError] = useState<string | undefined>("");
  const [inputType, setInputType] =
    useState<React.HTMLInputTypeAttribute>("password");

  const getButtonState = (): ButtonState => {
    if (
      isNil(value.email) ||
      isNil(value.password) ||
      isNil(value.userId) ||
      (value.password && value.password?.length < 6)
    ) {
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
      showModal(<Login isModal />);
    } else {
      navigate("/login");
    }
  };

  return (
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
  );
};
