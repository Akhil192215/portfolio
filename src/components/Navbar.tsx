import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
const Navbar: React.FC = () => {
  interface NavLink {
    id: number;
    link: string;
  }

  const [nav, setNav] = useState<boolean>(true);

  const navLinks: NavLink[] = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" bg-black  w-full h-20 flex justify-between items-center px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2  text-[#f2ab45]">Akhil </h1>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer px-4 capitalize   text-[#f2ab45] hover:scale-105 hover:text-[#ccac69] font-medium duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer pr-4 z-10   text-[#ccac69] md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {!nav && <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 ">
        {navLinks.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer py-4 capitalize  text-[#f2ab45] hover:scale-105 hover:text-[#ccac69] font-medium duration-200 text-4xl "
          >
            {link}
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default Navbar;
