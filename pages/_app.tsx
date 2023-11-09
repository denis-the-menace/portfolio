import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import TerminalHeader from "@/components/terminal-header";
import TerminalPrompt from "@/components/terminal-prompt";
import TerminalExitPrompt from "@/components/terminal-exit-prompt";
import PageWrapper from "@/components/page-wrapper";
import { useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({
  // subsets: ["latin"],
  variable: "--font-firacode",
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;
  const [isTerminalPromptRendered, setIsTerminalPromptRendered] =
    useState(false);
    console.log(isTerminalPromptRendered);
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${firaCode.style.fontFamily};
        }
      `}</style>
      <TerminalHeader path={pathname.replace("/", "")} />
      <TerminalPrompt
        path={pathname.replace("/", "")}
        isTerminalPromptRendered={setIsTerminalPromptRendered}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.pathname}
          // initial={{ opacity: 0, y: -10 }}
          // animate={{ opacity: 1, y: 0 }}
          // exit={{ opacity: 0 }}
          // transition={{ duration: 1 }}
          id="router-div"
        >
          {isTerminalPromptRendered ? (
            <PageWrapper>
              <Component {...pageProps} />
              <TerminalExitPrompt />
            </PageWrapper>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
