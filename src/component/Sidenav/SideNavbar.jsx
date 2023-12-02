import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { FaXmark } from "react-icons/fa6";

const SideNavbar = ({ nav, setNav, handleNavbar, NavLink }) => {
  return (
    <div
      className={` w-full h-full fixed top-0 transition-all duration-700  bg-primary { ${
        nav ? "left-0" : "-left-full"
      } `}
    >
      <div className="p-5 flex  justify-between items-center  ">
        <img src={Logo} alt="logo-img" />
        <div className="flex gap-6  text-white md:hidden text-3xl ">
          <FaXmark onClick={handleNavbar} />
        </div>
      </div>

      {NavLink.map((data) => {
        return (
          <Link
            to={data.link}
            key={data.id}
            className="flex justify-center text-xl text-white hover:underline my-3   gap-10  p-5  cursor-pointer transition-all duration-100 "
            onClick={handleNavbar}
          >
            {data.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavbar;
