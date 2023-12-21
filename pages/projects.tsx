import { useLocalization } from "@/components/localization-context";
import ProjectCard from "@/components/projects/project-card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Projects() {
  const language = useLocalization();
  const projects = language.projects;
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 1 }}
      className="flex flex-col my-4 mx-4 md:text-3xl"
    >
      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            className={`cursor-pointer hover:bg-clr9 ${
              activeIndex === index ? "bg-clr9" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {isMobile
              ? `~/${project.mobileFileTitle}`
              : `denis/projects/${project.desktopFileTitle}`}
          </li>
        ))}
      </ul>
      <div className="flex items-center mb-4">
        <span className="text-clr5">
          {projects.length}/{projects.length}
        </span>
        <hr className="ml-4 w-full border-clr5 border-[1px]" />
      </div>
      <ProjectCard key={activeIndex} project={projects[activeIndex]} />
    </motion.div>
  );
}

export type ProjectType = {
  mobileFileTitle: string;
  desktopFileTitle: string;
  title: string;
  description: string;
  url: string;
};
