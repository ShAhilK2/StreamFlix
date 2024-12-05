import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_IMAGE, USER_AVATAR } from "../utils/constants";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);

  function handleToggleSignIn() {
    setIsSignIn(!isSignIn);
  }

  function handleSubmitButton() {
    //Validate the Form Data
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;
    //Sign In /Sign Up Logic
    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);

              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="h-screen absolute inset-0">
        <img
          src={BACKGROUND_IMAGE}
          alt="background-image"
          className="w-full h-full object-cover"
        />
      </div>
      <form
        className="absolute bg-black my-8 sm:my-16 md:my-20 lg:my-32 w-full sm:w-10/12 md:w-8/12 lg:w-5/12 m-auto right-0 left-0 text-white p-8 sm:p-12 bg-opacity-80 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-2xl sm:text-3xl py-4 px-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 m-4 w-full bg-gray-700 rounded-lg"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        )}
        <button
          className="m-4 p-4 bg-red-700 w-full rounded-lg"
          onClick={() => handleSubmitButton()}
        >
          Submit
        </button>

        <p className="p-4 cursor-pointer" onClick={() => handleToggleSignIn()}>
          {isSignIn
            ? "New to StreamFlixGPT ? Sign up Now"
            : "Already Registered  ? Sign In "}
        </p>
      </form>
    </div>
  );
}

export default Login;
