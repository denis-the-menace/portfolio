import { useLocalization } from "@/components/localization-context";
import CarouselCard from "@/components/projects/carousel-card";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Projects() {
  const languageContent = useLocalization();
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  // const { scrollXProgress } = useScroll({
  //   container: ref,
  // });

  useEffect(() => {
    if (
      ref.current &&
      ref.current.scrollWidth !== undefined &&
      ref.current.offsetWidth !== undefined
    ) {
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div ref={ref} className="overflow-hidden mx-[20%]">
      <motion.ul
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex flew-row gap-4 max-w-7xl "
      >
        {projects.map((project, index) => {
          return (
            <CarouselCard
              key={index}
              title={project.title}
              description={project.description}
              url={project.url}
            />
          );
        })}
      </motion.ul>
    </motion.div>
  );
}

const projects = [
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
  {
    title: "Bilinear Scaling",
    description: "Parallel program made in C for image scaling.",
    url: "https://github.com/denis-the-menace",
  },
];
