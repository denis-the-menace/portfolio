import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectType } from "@/pages/projects";

export default function ProjectCard({ project }: { project: ProjectType }) {
  console.log(project);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </motion.div>
  );
}
