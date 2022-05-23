import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen text-center py-4">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            HELLO VISITOR, WELCOME TO MY PORTFOLIO!
          </p>
          <h1 className="py-4 text-gray-700">
            {`I'm`} <span className="text-[#5651e5]">Matheus Henrique</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {`I started my career as a programmer in 2019 as an intern and a few
                months later I was hired as a junior programmer. Currently, with 3 years of
                experience, I work as a senior programmer focused on the backend, but also with a
                good experience with frontend development. I worked on projects in the area of
                payments, ecommerce and course platform.
                I seek to improve as a developer and
                become a software specialist or architect.`}
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/matheus-henrique-fernandes-justino/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="https://github.com/matheusjustino"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="#contact">
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="#contact">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
