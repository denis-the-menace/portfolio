import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function TerminalExitPrompt({
  path,
  isTerminalPromptRendered,
}: {
  path: string;
  isTerminalPromptRendered: (state: boolean) => void;
}) {
  let isHome;
  if (path === "") isHome = true;

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
      {isHome ? (
        <>
          <p>{path}</p>
          <span className="inline text-clrpink font-bold">{"> "}</span>
          <Link
            href="/"
            onClick={() => isTerminalPromptRendered(false)}
            className="exit-prompt-container-neofetch"
          >
            <p className="exit-prompt-container-neofetch__prompt">neofetch</p>
            <p className="exit-prompt-container-neofetch__rerender">Rerender</p>
          </Link>
        </>
      ) : (
        <>
          <p>{path}</p>
          <span className="inline text-clrpink font-bold">{"> "}</span>
          <Link href={".."} className="exit-prompt-container">
            <p className="exit-prompt-container__prompt">exit</p>
            <p className="exit-prompt-container__rerender">Go back</p>
          </Link>
        </>
      )}
    </motion.div>
  );
}
