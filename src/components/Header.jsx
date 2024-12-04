import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute px-8 py-4 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center ">
      <img className="w-36" src={LOGO} alt="logo" />

      {/* Check if user is logged in */}
      {user ? (
        <div className="flex items-center space-x-4">
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
