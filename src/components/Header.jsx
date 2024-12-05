import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import {
  lang,
  LOGO,
  SUPPORTED_LANGUAGE,
  USER_AVATAR,
} from "../utils/constants";
import { toggleShowGpt } from "../utils/store/gptSlice";
import { changeLanguage } from "../utils/store/config";

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
      .catch(() => {
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
    <div className="absolute px-4 sm:px-6 lg:px-8 py-4 bg-gradient-to-b from-black to-transparent z-10 w-full flex flex-col sm:flex-row sm:flex-col md:flex-row justify-between items-center flex-wrap">
      <img className="w-28 sm:w-36 mb-2 sm:mb-0 " src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
          {showSearch && (
            <select
              className="text-white bg-gray-700 px-2 py-1 rounded-md hover:bg-opacity-70 text-sm"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="text-white bg-blue-600 px-3 py-1 text-sm rounded-md hover:bg-opacity-70"
            onClick={handleGptSearch}
          >
            {showSearch ? "Homepage" : "GPT Search"}
          </button>

          <img
            className="w-10 h-10 rounded-full object-cover"
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
      )}
    </div>
  );
}

export default Header;
