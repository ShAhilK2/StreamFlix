import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-36"
        src="https://streamflix.web.app/assets/images/logo-text-148x72.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-4 w-24 h-24">
          <img
            alt="user-button"
            src={`${
              user.photoURL
                ? user.photoURL
                : `https://occ-0-2482-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229`
            }`}

            //
          />
          <button onClick={handleSignOut} className=" text-white py-2 px-1">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
