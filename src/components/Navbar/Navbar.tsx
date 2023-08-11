import { useCallback, useEffect, useMemo, useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import NestjsLogo from "@assets/skills/nestjs.png";

const Navbar: React.FC = memo(() => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const NavbarLogo = useMemo(() => NestjsLogo, []);
  const handleShadow = useCallback(() => {
    // Evitando re-renders caso o shadow já seja true
    if (window.scrollY >= 90 && !shadow) {
      setShadow(true);
      return;
    }

    // Evitando re-renders caso o shadow já seja false
    if (window.scrollY < 90 && shadow) {
      setShadow(false);
      return;
    }
  }, [shadow]);

  useEffect(() => {
    window.addEventListener("scroll", handleShadow);

    return () => window.removeEventListener("scroll", handleShadow);
  }, [handleShadow]);

  const handleNav = () => setNav(!nav);

  return (
    <div
      className={`fixed w-full h-20 ${shadow ? "shadow-xl" : ""} z-[100] bg-[${
        shadow ? "#ecf0f3" : "transparent"
      }]`}
    >
      {/** medium/large navbar */}
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer">
        <Link href="/">
          <Image
            width="65"
            height="65"
            src={NavbarLogo}
            alt="Navbar logo"
            priority
            quality={100}
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]">
                Home
              </li>
            </Link>
            <Link href="#about">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]">
                About
              </li>
            </Link>
            <Link href="#skills">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]">
                Skills
              </li>
            </Link>
            <Link href="#projects">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]">
                Projects
              </li>
            </Link>
            <Link href="#contact">
              <li className="ml-10 text-sm uppercase hover:border-b hover:text-[#5651e5]">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/** sidebar mobile */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                width="44"
                height="44"
                src={NestjsLogo}
                alt="Navbar logo"
                priority
                quality={100}
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Hello Visitor, welcome to my portfolio!
              </p>
            </div>
          </div>

          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={handleNav} className="py-4 text:sm">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li onClick={handleNav} className="py-4 text:sm">
                  About
                </li>
              </Link>
              <Link href="#skills">
                <li onClick={handleNav} className="py-4 text:sm">
                  Skills
                </li>
              </Link>
              <Link href="#projects">
                <li onClick={handleNav} className="py-4 text:sm">
                  Projects
                </li>
              </Link>
              <Link href="#contact">
                <li onClick={handleNav} className="py-4 text:sm">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">
              {`Let's Connect`}
            </p>
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  href="https://www.linkedin.com/in/matheus-henrique-fernandes-justino/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <a
                  href="https://github.com/matheusjustino"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <Link href="#contact">
                  <AiOutlineMail />
                </Link>
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <Link href="#contact">
                  <BsFillPersonLinesFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export { Navbar };
