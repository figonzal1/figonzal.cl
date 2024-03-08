import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import logo from "@assets/images/logo.png";

const Navbar = ({ lang }: { lang: string }) => {
  const [expanded, setExpanded] = useState(false);

  const colorMenu = "#26d6ad";

  const textMenusES = ["Inicio", "Proyectos", "Blog"];
  const textMenusEN = ["Home", "Projects", "Blog"];

  return (
    <nav className="flex flex-col md:flex-row md:items-center px-16 md:px-24 py-6 mt-0 z-50 backdrop-blur-md fixed w-full">
      <div className="flex justify-between items-center">
        <img className="h-7" src={logo.src} alt="Figonzal.cl logo" />
        <button
          className="md:hidden"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {expanded ? (
            <MdClose color={colorMenu} size={36} />
          ) : (
            <FiMenu color={colorMenu} size={36} />
          )}
        </button>
      </div>

      <div
        className={`flex flex-col justify-between items-start pt-10 gap-5 md:flex-row md:items-center md:ms-auto md:pt-0 md:gap-10 ${
          expanded ? "" : "hidden md:flex"
        }`}
      >
        <NavbarLink
          icon={<FaHome color="white" size={21} />}
          name={lang === "es" ? textMenusES[0] : textMenusEN[0]}
          link={lang === "es" ? "/" : "/en"}
        />

        <NavbarLink
          icon={<GoProjectSymlink color="white" size={21} />}
          name={lang === "es" ? textMenusES[1] : textMenusEN[1]}
          link={(lang === "es"
            ? "/" + textMenusES[1]
            : "/en/" + textMenusEN[1]
          ).toLocaleLowerCase()}
        />
        <NavbarLink
          icon={<ImBlog color="white" size={21} />}
          name="Blog"
          link="https://figonzal.hashnode.dev/"
        />

        <a
          className="flex justify-center items-center border-2 border-fpurple bg-fpurple-box hover:bg-fpurple/30 p-2 rounded-lg gap-1 px-4 py-2 transition-colors duration-150 ease-in-out"
          href="https://github.com/figonzal1/figonzal.cl"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <BiGitRepoForked size={18} color="white" />
          <BiStar size={18} color="white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
