import { motion } from "framer-motion";
import Link from "next/link";

export default function TerminalExitPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <p>~</p>
      <span className="inline text-clrpink font-bold">{"> "}</span>
      <Link href={".."} className="exit-prompt-container">
        <p className="exit-prompt-container__prompt">exit</p>
        <p className="exit-prompt-container__rerender">Go back</p>
      </Link>
    </motion.div>
  );
}
