import "@/styles/globals.css";
import en from "@/locales/en";
import tr from "@/locales/tr";
import { LocalizationProvider } from "@/components/localization-context";
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
  const { locale } = router;
  const t = locale === "en" ? en : tr;
  const pathname = router.pathname;
  // Below state is used to control visibilty of index page from
  // _app.tsx file rather than index.tsx file.
  const [isTerminalPromptRendered, setIsTerminalPromptRendered] =
    useState(false);
  return (
    <LocalizationProvider value={t}>
      <style jsx global>{`
        html {
          font-family: ${firaCode.style.fontFamily};
        }
      `}</style>
        <TerminalHeader pathname={pathname} />
      <TerminalPrompt
        path={pathname.replace("/", "")}
        isTerminalPromptRendered={setIsTerminalPromptRendered}
      />
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname} id="router-div">
          {isTerminalPromptRendered ? (
            <PageWrapper>
              <Component {...pageProps} />
              <TerminalExitPrompt path={pathname.replace("/", "")} />
            </PageWrapper>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </LocalizationProvider>
  );
}
