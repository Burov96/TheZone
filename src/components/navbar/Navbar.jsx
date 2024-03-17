"use client";
import Links from "./links/Links";
import Themes from "./themes/Themes";
import Cookies from "js-cookie";
import { ThemeGeneratorSSR } from "@/utils/themeGenerator";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./hamburger/Hamburger";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Navbar = ({session}) => {
  // console.log(session); mi dava slednoto: 

  // {
  //   "user": {
  //     "name": "Burov96",
  //     "email": "burov96@gmail.com",
  //     "image": "https://avatars.githubusercontent.com/u/103561948?v=4"
  //   },
  //   "expires": "2024-04-15T12:46:14.959Z"
  // }



  const [scrolled, setScrolled] = useState("");
  const MAX_SCROLL = 30;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(Math.min(MAX_SCROLL, Math.max(0, scrollY)));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const currentThemeName = Cookies.get("theme");
    const currentTheme = ThemeGeneratorSSR(currentThemeName);
    document.body.className = currentTheme;
  }, []);

  return (
    <div
      className=" bg-slate-800 bg-opacity-60 fixed w-full z-50  top-0 flex justify-between items-center transition-all duration-500 ease-out"
      style={{
        height: `calc(80px - ${Math.min((scrolled / MAX_SCROLL) * 20, 20)}px)`,
        '--tw-bg-opacity': scrolled > 0 ? '0.6' : '1',
      }}
    >
      <ToastContainer />
        <div className="fixed md:pl-4  hover:animate-pulse">
      <Link href="/">
          <Image src="/log.svg" alt="logo" width={80} height={80} />
      </Link>
        </div>
      <div className="md:hidden">
      <HamburgerMenu />
      </div>
      <div className="hidden md:flex space-x-72 pr-5">
      <Themes />
      <Links session = {session}/>
      </div>
    </div>
  );
};

export default Navbar;
