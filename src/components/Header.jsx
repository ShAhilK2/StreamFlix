import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  lang,
  LOGO,
  SUPPORTED_LANGUAGE,
  USER_AVATAR,
} from "../utils/constants";
import { toggleShowGpt } from "../utils/gptSlice";
import { changeLanguage } from "../utils/config";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const showSearch = useSelector((state) => state.gpt.showGpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleShowGpt());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center ">
      <img className="w-36" src={LOGO} alt="logo" />

      {/* Check if user is logged in */}
      {user ? (
        <div className="flex items-center space-x-4">
          {showSearch && (
            <select
              className="text-white bg-gray-600 px-2 py-1 rounded-md hover:bg-opacity-70"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}

          <button
            className="text-white bg-blue-600 px-2 py-1 rounded-md hover:bg-opacity-70"
            onClick={handleGptSearch}
          >
            {showSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={user?.photoURL || USER_AVATAR}
            alt="user-avatar"
          />
          <button
            onClick={handleSignOut}
            className="text-white text-sm py-1 px-2 border border-white rounded-md hover:bg-white hover:text-black"
          >
            Sign Out
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
