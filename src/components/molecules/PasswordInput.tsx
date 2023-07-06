import LockIcon from "@src/assets/icons/LockIcon";
import "./global.css";
import EyeIcon from "@src/assets/icons/EyeIcon";

const PasswordInput = () => {
  return (
    <div className="relative">
      <LockIcon />
      <EyeIcon />
      <input
        type="password"
        placeholder="Password"
        className="w-583 h-7 rounded border border-transparent  bg-gray-50 pl-7 pr-6 font-sans text-xs placeholder-black placeholder-opacity-70 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
      />
    </div>
  );
};

export default PasswordInput;
