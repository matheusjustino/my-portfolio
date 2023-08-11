import Image, { StaticImageData } from "next/image";

export interface ProjectImageItemInterface {
  name: string;
  description: string;
  technology: string;
  demo: string | undefined;
  repository: string | undefined;
  img: StaticImageData;
}

interface ProjectImageItemProps {
  data: ProjectImageItemInterface;
}

const ProjectImageItem: React.FC<ProjectImageItemProps> = ({ data }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={data.img}
        alt={`Imagem  do(a) ${data.description}`}
        priority
        quality={100}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {data.name}
        </h3>
        <p className="pb-4 text-white text-center">{data.technology}</p>
        <a href={data.repository} target="_blank" rel="noreferrer">
          <p
            className={`my-1 text-center py-3 rounded-lg ${
              data.repository ? "bg-white" : "bg-slate-500"
            } text-gray-700 font-bold text-lg ${
              data.repository
                ? "cursor-pointer"
                : "pointer-events-none cursor-default"
            }`}
          >
            More Info
          </p>
        </a>
        <a href={data.demo} target="_blank" rel="noreferrer">
          <p
            className={`my-1 text-center py-3 rounded-lg ${
              data.demo ? "bg-white" : "bg-slate-500"
            } text-gray-700 font-bold text-lg ${
              data.demo
                ? "cursor-pointer"
                : "pointer-events-none cursor-default"
            }`}
          >
            DEMO
          </p>
        </a>
      </div>
    </div>
  );
};

export { ProjectImageItem };
