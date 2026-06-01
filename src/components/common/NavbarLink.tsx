import type { ReactNode } from "react";

const NavbarLink = ({
  link,
  name,
  icon,
}: {
  link: string;
  name: string;
  icon: ReactNode;
}) => {
  return (
    <a
      href={link}
      className="hover:border-fgreen flex items-center border-b-2 border-transparent transition-colors duration-300 ease-in-out"
    >
      {icon}
      <p className="ps-2 text-xl text-white">{name}</p>
    </a>
  );
};

export default NavbarLink;
