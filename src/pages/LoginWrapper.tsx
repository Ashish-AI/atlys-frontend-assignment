import LoginShape from "../assets/images/login-shape.svg";
import { Login } from "../components/Login";

const LoginWrapper = () => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="flex justify-center mb-12">
        <img src={LoginShape} alt="login icon" className={"w-8 h-8"} />
      </div>
      <Login />
    </div>
  );
};

export default LoginWrapper;
