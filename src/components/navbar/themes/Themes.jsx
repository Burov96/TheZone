
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectTheme, setTheme } from "@/store/themeSlice";
import {  ThemeGeneratorSSR } from "@/utils/themeGenerator";
import Cookies from "js-cookie";





function Themes({}) {
  const dispatch = useDispatch();
  const handleThemeChange = (newTheme) => {
    // console.log("Dispatching theme " + newTheme);
    dispatch(setTheme(newTheme));
    setCurrentTheme(newTheme);
    Cookies.set("theme", newTheme);
    const style = ThemeGeneratorSSR(newTheme);
    document.body.className =  style;
  };
  const [currentTheme, setCurrentTheme] = useState(Object.values(useSelector(selectTheme))[10]);


  return (
    <div className="flex gap-6 justify-between scale-50 md:scale-75 lg:scale-100">
      <div
        className={`hover:rotate-6 hover:scale-105  transition-all cursor-pointer grid grid-cols-2 w-9 h-9 p-1 rounded-lg bg-transparent ${currentTheme==="RosyMonochrome"?"border-2 border-solid border-belo":""} border-solid m-1 `}
        onClick={() => handleThemeChange("RosyMonochrome")}
      >
        <div className="bg-gray-600 w-3 h-3 rounded-sm"></div>
        <div className="bg-rozovo w-3 h-3 rounded-sm"></div>
        <div className="bg-belo w-3 h-3 rounded-sm"></div>
        <div className="bg-cherno w-3 h-3 rounded-sm"></div>
      </div>

      <div
        className={`hover:-rotate-6 hover:scale-105 transition-all cursor-pointer grid grid-cols-2 w-9 h-9 p-1 rounded-lg bg-transparent  ${currentTheme==="Hackathon"?"border-2 border-solid border-hkr3":""}  border-solid m-1`}
        onClick={() => handleThemeChange("Hackathon")}
      >
        <div className="bg-hkr1 w-3 h-3 rounded-sm"></div>
        <div className="bg-hkr2 w-3 h-3 rounded-sm"></div>
        <div className="bg-hkr3 w-3 h-3 rounded-sm"></div>
        <div className="bg-hkr4 w-3 h-3 rounded-sm"></div>
      </div>

      <div
        className={`hover:rotate-6 hover:scale-105 transition-all cursor-pointer grid grid-cols-2 w-9 h-9 p-1 rounded-lg bg-transparent  ${currentTheme==="Mocha"?"border-2 border-solid border-tr3":""}  border-solid m-1`}
        onClick={() => handleThemeChange("Mocha")}
      >
        <div className="bg-tr1 w-3 h-3 rounded-sm"></div>
        <div className="bg-tr2 w-3 h-3 rounded-sm"></div>
        <div className="bg-tr3 w-3 h-3 rounded-sm"></div>
        <div className="bg-tr4 w-3 h-3 rounded-sm"></div>
      </div>
    </div>
  );
}

export default Themes;
