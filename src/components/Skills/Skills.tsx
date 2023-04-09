import Image from "next/image";
import React, { useMemo } from "react";

// IMAGES SKILLS
import angularLogo from "@assets/skills/angular.png";
import cssLogo from "@assets/skills/css.png";
import dockerLogo from "@assets/skills/docker.png";
import githubLogo from "@assets/skills/github.png";
import htmlLogo from "@assets/skills/html.png";
import javascriptLogo from "@assets/skills/javascript.png";
import mongoLogo from "@assets/skills/mongo.png";
import nestjsLogo from "@assets/skills/nestjs.png";
import nodeLogo from "@assets/skills/node.png";
import postgresqlLogo from "@assets/skills/postgresql.png";
import rabbitmqLogo from "@assets/skills/rabbitmq.png";
import reactLogo from "@assets/skills/react.png";
import tailwindLogo from "@assets/skills/tailwind.png";
import typescriptLogo from "@assets/skills/typescript.png";
import nextLogo from '@assets/skills/nextjs-icon-svgrepo-com.svg';

// COMPONENTS
import { ImageSkill } from "./components/ImageSkill";

const Skills: React.FC = () => {
  const allImagesSkills = useMemo(() => {
    return [
      { name: "HTML", img: htmlLogo },
      { name: "CSS", img: cssLogo },
      { name: "TAILWIND", img: tailwindLogo },
      { name: "REACT", img: reactLogo },
      { name: "NEXT", img: nextLogo },
      { name: "ANGULAR", img: angularLogo },
      { name: "JAVASCRIPT", img: javascriptLogo },
      { name: "TYPESCRIPT", img: typescriptLogo },
      { name: "NODE", img: nodeLogo },
      { name: "NESTJS", img: nestjsLogo },
      { name: "MONGODB", img: mongoLogo },
      { name: "POSTGRESQL", img: postgresqlLogo },
      { name: "DOCKER", img: dockerLogo },
      { name: "RABBITMQ", img: rabbitmqLogo },
      { name: "GITHUB", img: githubLogo },
    ];
  }, []);

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">My technical skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
          {allImagesSkills.map((is) => {
            return <ImageSkill key={is.img.src} name={is.name} img={is.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { Skills };
