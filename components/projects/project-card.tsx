import { useLocalization } from "@/components/localization-context";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectType } from "@/pages/projects";

export default function ProjectCard({ project }: { project: ProjectType }) {
  const languageContent = useLocalization();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-bold">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        {languageContent.projectRef}
      </Link>
    </motion.div>
  );
}
