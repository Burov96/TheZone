import { useSelector } from "react-redux";
import { selectTheme } from "@/store/themeSlice";

export const ThemeGenerator = () => {
  const currentTheme = Object.values(useSelector(selectTheme));
  const styles = `bg-${currentTheme[0]} text-${currentTheme[1]} font-sans antialiased leading-normal`

;
  const primaryColor = `transition-colors duration-300 bg-${currentTheme[0]}`;
  return [styles, primaryColor];
};

export const ThemeGeneratorSSR = (themeName) => {
const object = ()=>{  if (themeName === "Rosy Monochrome") {
    return 'opacity-100 transition-all duration-500 bg-gray-600 text-rozovo font-sans antialiased leading-normal';
  } else if (themeName === "Hackathon") {
    return 'opacity-100 transition-all duration-500 bg-hkr1 text-hkr2 font-sans antialiased leading-normal';
  } else if (themeName === "Mocha") {
    return 'opacity-100 transition-all duration-500 bg-tr1 text-tr2 font-sans antialiased leading-normal'
  } else {
    return 'opacity-100 transition-all duration-500 bg-gray-600 text-rozovo font-sans antialiased leading-normal'
  }}
  return object();
};
