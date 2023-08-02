import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

interface Link {
  id: number;
  child: React.ReactNode;
  href: string;
  style?: string;
  download?: string;
}

const SocialLinks: React.FC = () => {
  const links: Link[] = [
    {
      id: 1,
      child: (
        <>
          Linkdin <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/akhil-s-poovathinkal-2a4a6922b/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/Akhil192215',
    },
    {
      id: 3,
      child: (
        <>
          Gmail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:akhilspoovathinkal@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: '/resume.pdf',
      style: 'rounded-tr-md',
      download: "Resume",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
      {links.map((link) => (
  <li
    key={link.id}
    className="flex justify-between items-center w-40 h-14 px-4 bg-[#f2ab45] cursor-pointer ml-[-100px] hover:ml-[-10px] duration-300"
  >
    <a
      className="flex justify-between items-center w-full"
      href={link.href}
      style={link.style ? { borderRadius: link.style } : undefined}
      download={link.download ? 'true' : undefined}
      target='_blank'
    >
      {link.child}
    </a>
  </li>
))}

      </ul>
    </div>
  );
};

export default SocialLinks;
