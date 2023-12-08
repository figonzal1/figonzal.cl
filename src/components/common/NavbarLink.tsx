import type { ReactElement, ReactNode } from "react";

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
      className="flex border-b-2 border-transparent hover:border-fgreen transition-colors duration-300 ease-in-out"
    >
      {icon}
      <p className="ps-2 dark:text-white text-xl">{name}</p>
    </a>
  );
};

export default NavbarLink;
