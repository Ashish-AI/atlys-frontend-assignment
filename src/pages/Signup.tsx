// src/components/Login.js
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
  const [value, setValue] = useState<{ userId: string; password: string }>({
    userId: "",
    password: "",
  });

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className=" bg-darkA border-2 rounded-lg py-10 px-6 border-gray mt-12">
        <h2 className="text-medium text-mediumGray text-sm/4 text-center">
          SIGN UP
        </h2>
        <h3 className="text-semibold text-gray-800 text-lg/4 mt-2 text-white text-center mb-11.25">
          Create an account to continue
        </h3>
        <form>
          <div className="mb-4">
            <Input
              label="Email"
              onChange={(e) => {
                setValue((prev) => ({ ...prev, userId: e.target.value }));
              }}
              placeholder="Enter your email"
              type="email"
              value={value.userId}
            />
          </div>
          <div className="mb-4">
            <Input
              label="Username"
              onChange={(e) => {
                setValue((prev) => ({ ...prev, password: e.target.value }));
              }}
              placeholder="Choose a preferred username"
              type="text"
              value={value.password}
            />
          </div>
          <Input
            label="Password"
            onChange={(e) => {
              setValue((prev) => ({ ...prev, password: e.target.value }));
            }}
            placeholder="Choose a strong password"
            type="password"
            value={value.password}
          />
          <div className="mt-5">
            <Button label="Continue" onClick={() => {}} />
          </div>
          <div className="mt-3">
            <a href={"/"} className="text-sm text-silver hover:underline">
              Already have an account?{" "}
              <span className="text-lightGray">Login →</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
