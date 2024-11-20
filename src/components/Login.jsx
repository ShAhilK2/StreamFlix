import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  function handleToggleSignIn() {
    setIsSignIn(!isSignIn);
  }

  return (
    <div>
      <Header />
      <div className="h-screen absolute">
        <img
          src="public/backgroudImage.jpg"
          alt="background-image"
          className="w-full h-full"
        />
      </div>
      <form
        className="absolute bg-black my-64 w-3/12 m-auto right-0 left-0 text-white p-12 bg-opacity-80
        rounded-lg
      "
      >
        <h1 className="font-bold text-3xl py-4 px-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 m-4 w-full  bg-gray-700"
        />
        <button className="m-4 p-4 bg-red-700 w-full rounded-lg">Submit</button>
        <p className="p-4 cursor-pointer" onClick={() => handleToggleSignIn()}>
          {isSignIn
            ? "New to Netflix ? Sign up Now"
            : "Already Registered  ? Sign In "}
        </p>
      </form>
    </div>
  );
}

export default Login;
