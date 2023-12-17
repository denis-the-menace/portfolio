import { motion } from "framer-motion";
import Link from "next/link";

export default function TerminalExitPrompt({ path }: { path: string }) {
  if (path === "projects") path = "~/projects";
  else path = "~";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="mt-4 mb-4 md:mb-16"
    >
      <p>{path}</p>
      <span className="inline text-clrpink font-bold">{"> "}</span>
      <Link href={".."} className="exit-prompt-container">
        <p className="exit-prompt-container__prompt">exit</p>
        <p className="exit-prompt-container__rerender">Go back</p>
      </Link>
    </motion.div>
  );
}
