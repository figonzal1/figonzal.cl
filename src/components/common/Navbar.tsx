import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { ImBlog } from "react-icons/im";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { MdClose, MdOutlineWorkOutline } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import logo from "@assets/images/logo.png";

const Navbar = ({ lang }: { lang: string }) => {
  const [expanded, setExpanded] = useState(false);

  const colorMenu = "#26d6ad";

  const textMenusES = ["Inicio", "Clientes", "Proyectos", "Blog"];
  const textMenusEN = ["Home", "Clients", "Projects", "Blog"];

  return (
    <nav className="fixed z-50 mt-0 flex w-full flex-col px-16 py-6 backdrop-blur-md md:flex-row md:items-center md:px-24">
      <div className="flex items-center justify-between">
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
        className={`flex flex-col items-start justify-between gap-5 pt-10 md:ms-auto md:flex-row md:items-center md:gap-10 md:pt-0 ${
          expanded ? "" : "hidden md:flex"
        }`}
      >
        <NavbarLink
          icon={<FaHome color="white" size={21} />}
          name={lang === "es" ? textMenusES[0] : textMenusEN[0]}
          link={lang === "es" ? "/" : "/en"}
        />

        <NavbarLink
          icon={<MdOutlineWorkOutline color="white" size={21} />}
          name={lang === "es" ? textMenusES[1] : textMenusEN[1]}
          link={(lang === "es"
            ? "/" + textMenusES[1]
            : "/en/" + textMenusEN[1]
          ).toLocaleLowerCase()}
        />

        <NavbarLink
          icon={<GoProjectSymlink color="white" size={21} />}
          name={lang === "es" ? textMenusES[2] : textMenusEN[2]}
          link={lang === "es" ? "/proyectos/movil" : "/en/projects/mobile"}
        />
        <NavbarLink
          icon={<ImBlog color="white" size={21} />}
          name="Blog"
          link="https://figonzal.hashnode.dev/"
        />

        <a
          className="border-fpurple bg-fpurple-box hover:bg-fpurple/30 flex items-center justify-center gap-1 rounded-lg border-2 p-2 px-4 py-2 transition-colors duration-150 ease-in-out"
          href="https://github.com/figonzal1/figonzal.cl"
          target="_blank"
          rel="noreferrer"
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
