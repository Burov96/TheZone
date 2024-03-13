import Link from "next/link";
import {  useRef,useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "@/store/themeSlice";
import { usePathname } from "next/navigation";
import { DotLottiePlayer } from "@dotlottie/react-player";
// import menu2 from "/public/menu2.json";
// import Lottie from "lottie-react";
import Themes from "../themes/Themes";

const HamburgerMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const currentTheme = Object.values(useSelector(selectTheme));
  const lottieRef=useRef();

  const active = currentTheme[4] + " font-extrabold ";
  const rest = "";

  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  const session = true;
  const isAdmin = true;

  const handleClick = () => {
    setOpen((prev) => !prev);
    lottieRef.current.setSpeed(1.8);
    if (!open) {
      lottieRef.current.playSegments([0, 80], true);
    } else {
      lottieRef.current.playSegments([80, 160], true);
    }
  };

  return (
    <>
      <div className="cursor-pointer -mr-2 block md:hidden z-40 relative">
        <button onClick={handleClick}>
          <DotLottiePlayer
          src="/hamburger.lottie"
            autoplay={false}
            loop={false}
            ref={lottieRef}
            style={{
              width: "100%",
              maxWidth: "75px",
              height: "auto",
              marginRight: "10px",
            }}
          />
        </button>
      </div>

{/* Darken div when open is true 👇🏻 */}
      {open && (
        <div
        className="transition-opacity duration-300 fixed inset-0 z-10 bg-black bg-opacity-50"
        onClick={handleClick}
        />
        )}



        {/* Side menu 👇🏻 */}
      <div
        className={`h-[90svh] p-4 fixed top-0 w-72 shadow-lg ${
          currentTheme[5]
        } z-30 rounded-2xl transition-all duration-400 ${
          open ? " right-0" : " -right-72"
        }`}
      >



        {/* Links rendered on the side menu 👇🏻 */}
        <div id="links and themes">

        <div className="mt-20">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                pathname === link.path ? active : rest
              } flex items-center justify-center py-4 pr-20 text-xl`}
              onClick={handleClick}
              >
              {link.title}
            </Link>
          ))}
        </div>

        {session && isAdmin && (
          <Link
          href="/admin"
          className={`${
            pathname === "/admin" ? active : rest
          } flex items-center justify-center py-4 pr-20 text-xl`}
          onClick={() => setOpen(false)}
          >
            Admin
          </Link>
        )}
        
        <div className=" mt-10 scale-[1.8] mr-4">
          <Themes />
        </div>
        </div>

      </div>
    </>
  );
};

export default HamburgerMenu;
