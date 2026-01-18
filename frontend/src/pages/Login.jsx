import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Typical from 'react-typical';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col justify-center space-y-6 items-center h-screen bg-gradient-to-b from-50% from-teal-600 to-blue-100 to-50%">
      <h3 className="text-white text-center text-2xl sm:text-3xl uppercase macondo-regular">
        Employee Management System
      </h3>
      <div className="bg-white w-80 shadow-md rounded-lg p-6">
        <h2 className="mb-4 text-2xl font-bold text-teal-600">Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="border border-gray-500 w-full py-2 px-3 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password...."
              required
              className="border border-gray-500 w-full py-2 px-3 rounded"
            />
          </div>

          <div className="flex gap-5 flex-wrap mb-4">
            <div className="flex justify-center items-center gap-2">
              <input type="checkbox" />
              <label htmlFor="rememberMe" className="text-gray-700">
                Remember Me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-teal-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white text-xl py-2 rounded cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
