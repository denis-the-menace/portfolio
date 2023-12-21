import "@/styles/globals.css";
import en from "@/locales/en";
import tr from "@/locales/tr";
import { LocalizationProvider } from "@/components/localization-context";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
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
      <Head>
        <title>denis@gercek</title>
        <meta name="description" content="Denis Gercek's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait">
        <TerminalHeader pathname={pathname} />
      </AnimatePresence>
      <TerminalPrompt
        path={pathname.replace("/", "")}
        setIsTerminalPromptRendered={setIsTerminalPromptRendered}
      />
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname} id="router-div">
          {isTerminalPromptRendered ? (
            <PageWrapper>
              <Component {...pageProps} />
              <TerminalExitPrompt
                path={pathname.replace("/", "")}
                isTerminalPromptRendered={setIsTerminalPromptRendered}
              />
            </PageWrapper>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </LocalizationProvider>
  );
}
