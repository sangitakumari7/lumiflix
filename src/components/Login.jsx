import React from 'react';
import Header from './Header';
import BgImg from '../img/bgimg.jpg';

function Login() {
  return (
    <div className="relative w-full h-screen text-white">

      {/* Header */}
      <Header />

      {/* Background Image */}
      <img
        src={BgImg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Form Container */}
      <div className="flex justify-center items-center h-full">
        <form className="bg-black bg-opacity-70 p-10 rounded-md w-[350px]">

          <h1 className="text-3xl font-bold mb-6">Sign In</h1>

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-700 rounded outline-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center text-sm mt-4 text-gray-400">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <p className="cursor-pointer hover:underline">Need help?</p>
          </div>

          <p className="text-gray-400 mt-6">
            New to Lumniflix?{" "}
            <span className="text-white cursor-pointer hover:underline">
              Sign up now.
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;