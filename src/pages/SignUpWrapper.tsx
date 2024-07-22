import { SignUp } from "../components/SignUp";

const SignUpWrapper = ({ isModal }: { isModal?: boolean }) => {
  return (
    <div className="w-full max-w-lg mx-auto">
      <SignUp />
    </div>
  );
};

export default SignUpWrapper;
