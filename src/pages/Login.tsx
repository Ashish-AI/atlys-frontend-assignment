// src/components/Login.js
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

{
  /* <svg
className="w-6 h-6 text-gray-400"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path
	strokeLinecap="round"
	strokeLinejoin="round"
	strokeWidth="2"
	d="M10 9v6m4-6v6m-4-6H8a4 4 0 01-4-4V5a4 4 0 014-4h4a4 4 0 014 4v4a4 4 0 01-4 4h-2z"
/>
</svg> */
}

const Login = () => {
  const [value, setValue] = useState<{ userId: string; password: string }>({
    userId: "",
    password: "",
  });

  return (
    <div className="w-full max-w-lg bg-darkA border-2 rounded-lg py-10 px-6 border-gray">
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
            trailingText=""
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
          trailingText="Forgot password?"
          onChange={(e) => {
            setValue((prev) => ({ ...prev, password: e.target.value }));
          }}
          placeholder="Enter your password"
          type="password"
          value={value.password}
        />

        <div className="mt-5">
          <Button label="Login now" onClick={() => {}} />
        </div>
        <div className="mt-3">
          <a href="#" className="text-sm text-gray-400 hover:underline">
            Not registered yet?{" "}
            <span className="text-blue-400">Register →</span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
