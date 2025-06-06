import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    if (email === "keisha@gmail.com" && password === "keisha") {
      navigate("/"); 
    } else {
      navigate("/Error401"); 
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-500">
      <div className="bg-white rounded-[14px] h-[650px] w-[735px] mt-2 shadow-lg">
        {/* Header */}
        <div className="flex justify-center items-center flex-col p-10">
          <h1 className="text-[24px] font-bold mb-2">Login Page</h1>
          <p className="text-[20px] mb-6 text-gray-600">
            Please enter your email and password to continue
          </p>
        </div>

        {/* Form */}
        <div className="px-10 space-y-6">
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="keisha@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold">Password</label>
              <a href="#" className="text-sm text-gray-500 hover:text-green-500">
                Forget Password?
              </a>
            </div>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Remember Password */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember Password
            </label>
          </div>

          {/* Login Button */}
          <div>
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              Login
            </button>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="flex items-center justify-center text-gray-600 text-sm">
              Don't have an account?
            </h1>
            <a href="CreateAcc" className="text-green-500 ml-1">
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}