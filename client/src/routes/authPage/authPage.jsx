import { useState } from "react";
import Image from "../../components/image/image";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 p-12 rounded-[32px] shadow-lg">
        <Image src="/general/logo.png" w={84} h={84} alt="" />
        <h1 className="font-normal">
          {isRegister ? "Create an Account" : "Login to your account"}
        </h1>

        {isRegister ? (
          <form key="registerForm" className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="text-[14px]">
                Username
              </label>
              <input
                type="username"
                placeholder="Username"
                required
                name="username"
                id="username"
                className="p-4 w-64 h-10 border-2 border-[#e0e0e0] rounded-[16px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="displayName" className="text-[14px]">
                Name
              </label>
              <input
                type="displayName"
                placeholder="Name"
                required
                name="displayName"
                id="displayName"
                className="p-4 w-64 h-10 border-2 border-[#e0e0e0] rounded-[16px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[14px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
                className="p-4 w-64 h-10 border-2 border-[#e0e0e0] rounded-[16px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[14px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
                className="p-4 w-64 h-10 border-2 border-[#e0e0e0] rounded-[16px]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e50829] p-3 border-none rounded-[32px] text-white cursor-pointer font-bold"
            >
              Register
            </button>
            <p
              className="text-[14px] text-center cursor-pointer"
              onClick={() => setIsRegister(false)}
            >
              Do you have an account ? <b>Login</b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        ) : (
          <form key="loginForm" className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[14px]">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                id="email"
                className="p-4 w-64 h-10 border-2 border-[#e0e0e0] rounded-[16px]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-[14px]">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                id="password"
                className="p-4 w-64 h-10 border-2 border-[#e0e0e0] rounded-[16px]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e50829] p-3 border-none rounded-[32px] text-white cursor-pointer font-bold"
            >
              Login
            </button>
            <p
              className="text-[14px] text-center cursor-pointer"
              onClick={() => setIsRegister(true)}
            >
              Don&apos;t have an account ? <b>Register</b>
            </p>
            {error && <p className="text-[#e50829]">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
