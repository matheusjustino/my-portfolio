import React, { useMemo } from "react";
import Image, { StaticImageData } from "next/image";

// PROJECTS IMAGES
import pins from "@assets/projects/pins.png";
import autoescolaLogo from "@assets/projects/auto-escola.png";
import argocdGolang from "@assets/projects/backend-devops-argocd-golang.png";
import backendEcommerce from "@assets/projects/backend-ecommerce.png";
import controleFinanceiro from "@assets/projects/controle-financeiro.png";

// COMPONENTS
import {
  ProjectImageItem,
  ProjectImageItemInterface,
} from "./components/ProjectImageItem";

const Projects: React.FC = () => {
  const baseGithubUrl = "https://github.com/matheusjustino";
  const allProjectsImages = useMemo<ProjectImageItemInterface[]>(() => {
    return [
      {
        name: "Registre seus Locais",
        description:
          "Projeto frontend para registrar os locais que você vistou e achou interessante.",
        technology: "NextJs, ApolloGraphQL",
        demo: "https://travel-map-frontend.vercel.app/",
        repository: `${baseGithubUrl}/travel-map-frontend`,
        img: pins,
      },
      {
        name: "Auto Escola",
        description: "Projeto frontend feito com ReactJs",
        technology: "ReactJs",
        demo: "https://autoescola-react.vercel.app/",
        repository: `${baseGithubUrl}/autoescola-react`,
        img: autoescolaLogo,
      },
      {
        name: "Controle Financeiro",
        description:
          "Projeto frontend de um sistema de controle financeiro feito com React",
        technology: "ReactJs",
        demo: undefined,
        repository: `${baseGithubUrl}/expense-system-frontend`,
        img: controleFinanceiro,
      },
      {
        name: "Devops ArgoCD",
        description:
          "Projeto backend para estudo de devops com Argo CD e Golang",
        technology: "ArgoCD",
        demo: undefined,
        repository: `${baseGithubUrl}/argoCD-golang`,
        img: argocdGolang,
      },
      {
        name: "Backend Ecommerce",
        description:
          "Projeto backend de um ecommerce feito com Node e o framework NestJs",
        technology: "NestJs",
        demo: undefined,
        repository: `${baseGithubUrl}/ecommerce-backend`,
        img: backendEcommerce,
      },
    ];
  }, []);

  return (
    <div id="projects" className="w-full py-2">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="mt-8 text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">{`What I've Built`}</h2>
        <div className="grid gap-8">
          {allProjectsImages.map((pi) => {
            return <ProjectImageItem key={pi.img.src} data={pi} />;
          })}
        </div>
      </div>
    </div>
  );
};

export { Projects };
