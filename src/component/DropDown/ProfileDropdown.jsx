import React, { useState, useContext } from "react";
import {useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useSelector } from "react-redux";

const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const authContext = useContext(AuthContext); // Access the AuthContext
  const navigate = useNavigate();
  const path = useLocation();
  const user = useSelector((state) => state).user;
  const handleLogout = () => {
    authContext.logout();
    navigate("/");
  };

  const navigation = [{ title: "Log out", path: "javascript:void(0)" }];

  const ref = React.createRef();

  return (
    <div className={`relative ${props.class} cursor-pointer`}>
      <div className="flex items-center space-x-4 ">
        <div
          className="w-10 h-10 overflow-hidden outline-none hidden  md:flex items-center rounded-full ring-gray-400 ring-2"
          onClick={() => setState(!state)}
        >
          <div
            className="w-12 h-12 overflow-hidden rounded-full flex justify-center items-center relative overflow-hidden"
            style={{ lineHeight: "12rem" }}
          >
            <span className={`!m-0 !p-0 uppercase text-[3vh] ${path.pathname === '/documentation' ? 'text-grey' : 'text-white'}`}>
              {user.data != null ? user.data.username[0] : "B"}
            </span>
          </div>
        </div>
      </div>
      <ul
        className={`z-10 bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        } hidden lg:block`}
      >
        {navigation.map((item, idx) => (
          <li onClick={handleLogout}>
            <a
              key={idx}
              className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
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
