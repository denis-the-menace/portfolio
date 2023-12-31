import { useLocalization } from "@/components/localization-context";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TerminalExitPrompt({
  path,
  isTerminalPromptRendered,
}: {
  path: string;
  isTerminalPromptRendered: (state: boolean) => void;
}) {
  const languageContent = useLocalization();
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
          <a
            onClick={() => {
              isTerminalPromptRendered(false);
              localStorage.setItem("rerenderNeofetch", JSON.stringify(true));
              location.reload();
            }}
            className="exit-prompt-container-neofetch"
          >
            <p className="exit-prompt-container-neofetch__prompt">neofetch</p>
            <p className="exit-prompt-container-neofetch__rerender">Rerender</p>
          </a>
        </>
      ) : (
        <>
          <p>{path}</p>
          <span className="inline text-clrpink font-bold">{"> "}</span>
          <Link href={"/"} className="exit-prompt-container">
            <p className="exit-prompt-container__prompt">exit</p>
            <p className="exit-prompt-container__rerender">
              {languageContent.exit}
            </p>
          </Link>
        </>
      )}
    </motion.div>
  );
}
