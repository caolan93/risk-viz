import React from "react";
import Script from "next/script";

type Props = {};

const SignIn = () => {
  return (
    <section className="h-screen bg-slate-300 flex justify-center items-center">
      <form
        className="w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg"
        action=""
      >
        <label className="text-gray-700 font-bold py-2" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
          type="text"
          placeholder="Username"
        />
        <label className="text-gray-700 font-bold py-2" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="********"
        />
        <div className="flex justify-between items-center my-4">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold rounded py-2 px-4">
            Sign In
          </button>
          <a
            className="text-orange-400 hover:text-orange-500 font-bold"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
