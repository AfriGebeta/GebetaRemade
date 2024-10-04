import React, { useState, useContext, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useSelector } from "react-redux";

const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const path = useLocation();
  const user = useSelector((state) => state).user;
  const ref = useRef(null);

  const handleLogout = () => {
    authContext.logout();
    navigate("/");
  };

  const navigation = [{ title: "Log out", path: "javascript:void(0)" }];

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative ${props.class} cursor-pointer`} ref={ref}>
      <div className="flex items-center space-x-4">
        <div
          className="w-10 h-10 overflow-hidden outline-none hidden md:flex items-center rounded-full ring-gray-400 ring-2"
          onClick={() => setState(!state)}
        >
          <div
            className="w-12 h-12 overflow-hidden rounded-full flex justify-center items-center relative overflow-hidden"
            style={{ lineHeight: "12rem" }}
          >
            <span className={`!m-0 !p-0 uppercase text-[3vh] ${path.pathname === '/documentation' || path.pathname === '/playground'  ? 'text-zinc-900' : 'text-white'}`}>
              {user.data.user.username.charAt(0)}
            </span>
          </div>
        </div>
      </div>
      <ul
        className={`z-10 bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-24 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? "" : "lg:hidden"} hidden lg:block`}
      >
        {navigation.map((item, idx) => (
          <li key={idx} onClick={handleLogout}>
            <a
              className="block text-gray-600 text-sm lg:hover:bg-gray-50 lg:p-2.5"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileDropDown;