import Image from "next/image";
import React from "react";

interface ImageSkillsProps {
  name: string;
  img: StaticImageData;
}

const ImageSkill: React.FC<ImageSkillsProps> = ({ name, img }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={img} alt="/" width="64px" height="64px" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export { ImageSkill };
