// src/store/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  currentTheme: Cookies.get("theme") || "Rosy Monochrome",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
      Cookies.set("theme", action.payload, { sameSite: "strict" });
    },
  },
});

export const selectTheme = (state) => {
  const themeName = state.theme.currentTheme;

// Your theme object
// Your theme object
if (themeName === "Rosy Monochrome") {
  return { 
    primary: "gray-600", 
    secondary: "rozovo", 
    tertiary: "belo", 
    quaternary: "cherno",
    textCol: 'text-belo font-extrabold',
    bg:'bg-gray-600',
    primaryHex: "#718096", 
    secondaryHex: "#FA64B5", 
    tertiaryHex: "#64C8C8", 
    quaternaryHex: "#408080",
    name:themeName, 
  };
} else if (themeName === "Hackathon") {
  return { 
    primary: "hkr1", 
    secondary: "hkr2", 
    tertiary: "hkr3", 
    quaternary: "hkr4",
    textCol: 'text-hkr3 font-extrabold',
    bg:'bg-hkr1',
    primaryHex: "#0F3D3E", 
    secondaryHex: "#39FF14", 
    tertiaryHex: "#FFC107", 
    quaternaryHex: "#808080",
    name:themeName, 
  };
} else if (themeName === "Mocha") {
  return { 
    primary: "tr1", 
    secondary: "tr2", 
    tertiary: "tr3", 
    quaternary: "tr4",
    textCol: 'text-tr3 font-extrabold',
    bg:'bg-tr1',
    primaryHex: "#F8F0E3", 
    secondaryHex: "#005662", 
    tertiaryHex: "#CC5500", 
    quaternaryHex: "#D9D9D9",
    name:themeName, 
  };
} else {
  return { 
    primary: "gray-600", 
    secondary: "rozovo", 
    tertiary: "belo", 
    quaternary: "cherno",
    textCol: 'text-belo font-extrabold',
    bg:'bg-gray-600',
    primaryHex: "#718096", 
    secondaryHex: "#FA64B5", 
    tertiaryHex: "#64C8C8", 
    quaternaryHex: "#408080",
    name:themeName, 
  }; 
}


};

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
