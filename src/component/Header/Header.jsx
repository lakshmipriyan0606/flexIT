import React, { useEffect } from "react";
import Logo from "../../assets/img/logo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideNavbar from "../Sidenav/SideNavbar";

const Header = () => {

  const [nav , setNav] = useState(false)


  const handleNavbar = () => {
    setNav(!nav)
  }

  useEffect(()=>{
    window.scroll(0,0)
  },[handleNavbar])

  const Nav = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Services",
      link: "/service",
    },
    {
      id: 4,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 6,
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <section className="p-4 sticky   top-0 z-50 bg-primary  ">
      <main className="flex justify-between items-center p-2  ">
        <div>
          <img src={Logo} alt="logo-img" />
        </div>
        <div className="flex gap-6 text-xl text-white md:hidden ">
          <FaBarsStaggered onClick={handleNavbar}/>
          
        </div>
        <div className="hidden md:flex gap-8 items-center mt-2 lg:gap-12 text-white text-xl">
          {Nav.map((data) => {
            return <Link key={data.id} to={data.link} className="hover:border-b-2 cursor-pointer transition-all duration-100 hover:border-white ">{data.name}</Link>;
          })}
        </div>
        <div className="flex items-center gap-3 text-xl text-white ">
        <FaSearch />
          <MdSunny />
        </div>
        <SideNavbar nav={nav} handleNavbar={handleNavbar} setNav={setNav} NavLink = {Nav} />
      </main>
    </section>
  );
};

export default Header;
