/* eslint-disable @next/next/no-img-element */
import { memo } from "react";

const About = memo(() => {
  const src =
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80";

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="mt-8 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">{`Who I'm`}</h2>
          <p className="py-2 text-gray-600">
            {`Hello everyone, I'm Matheus Henrique and I live in Campina Grande - PB. I'm
				currently studying Computer Science at the Federal University of Campina Grande
				(UFCG). In my spare time I enjoy watching series and playing games like CSGO,
				Valorant and LoL.`}
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer hover:text-[#5651e5]">
            <a
              href="https://github.com/matheusjustino?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Check out some of my latest projects.
            </a>
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src={src}
            alt="About image that shows a notebook"
          />
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export { About };
