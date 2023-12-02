import React from "react";
import Logo from "../../assets/img/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Header = () => {
  return (
    <section className="p-4 sticky top-0 z-[9999px] bg-primary  ">
      <main className="flex justify-between items-center ">
        <div>
          <img src={Logo} alt="logo-img" />
        </div>
        <div className="flex gap-6 text-xl text-white ">
          <FaBarsStaggered />
          <FaSearch />
          <MdSunny />
        </div>
      </main>
    </section>
  );
};

export default Header;
