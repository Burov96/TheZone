import { selectTheme } from "@/store/themeSlice";
import { handleLogin, handleLogout } from "@/utils/actions";
import { auth } from "@/utils/auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const Links = ({session}) => {
  const currentTheme = Object.values(useSelector(selectTheme));
  const active = currentTheme[4];   const pathName = usePathname();

  const isAdmin = true; 
  return (
      <div className="hidden md:flex scale-50 md:scale-75 lg:scale-100 ">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`hover:-mt-1 hover:font-semibold transition-all m-2 ${pathName === link.path ? active  : ""}`}>
            {link.title}
          </Link>
        ))}
{session?
<>
        {session.user?.isAdmin && 
          <Link
            href="/admin"
            className={`hover:-mt-1 transition-all m-2 ${pathName === "/admin" ? active : ""}`}
          >
            Admin
          </Link>
        }

          <form action={handleLogout} className="hover:-mt-1 transition-all m-2 cursor-pointer ">
          <button >Logout</button>
        </form>
        </>
        :<Link href="/login" className={`hover:-mt-1 transition-all m-2 cursor-pointer ${pathName === "/login" ? active : ""}`}>
          <button >Login</button>
        </Link>
        }
      </div>

  );
};

export default Links;
