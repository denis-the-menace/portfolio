import Link from "next/link";
import Image from "next/image";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function TerminalHeader({ pathname }: { pathname: string }) {
  let path = pathname.replace("/", "");
  let isHome = false;
  if (path === "") {
    path = "terminal";
    isHome = true;
  }

  return (
    <header className="flex items-center bg-clrsurface">
      <div className="flex justify-center items-center bg-clrpink pr-4 py-1">
        {isHome ? (
          <Image
            width={24}
            height={24}
            className="mx-4 h-auto"
            src="terminal-icon.svg"
            alt="terminal-icon"
          />
        ) : (
          <Image
            width={24}
            height={24}
            className="mx-4 h-auto"
            src="markdown-icon.svg"
            alt="markdown-icon"
          />
        )}
        <p className="text-black font-bold pr-2">{path}</p>
        <Dropdown />
      </div>
      <div className="flex ml-auto mr-4">
        <Link
          href={pathname}
          locale="en"
          className="inline-flex ml-2 font-bold underline hover:text-clrpink"
        >
          en
        </Link>
        <Link
          href={pathname}
          locale="tr"
          className="inline-flex ml-2 font-bold underline hover:text-clrpink"
        >
          tr
        </Link>
      </div>
    </header>
  );
}

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex flex-col items-center rounded-lg">
      <button
        aria-label="navbar"
        onClick={() => setIsOpen((state: boolean) => !state)}
        className="bg-clrpink text-black w-full flex items-center justify-between font-bold text-lg rounded-lg border-4 border-transparent"
      >
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <div className="absolute top-7 left-6 flex flex-col items-end rounded-lg p-2 w-full">
            {routeslist.map((route, index) => (
              <Link href={route === "home" ? "/" : `/${route}`} key={index}>
                <motion.button
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      delay: 0.2 * (routeslist.length - index),
                    },
                  }}
                  transition={{ duration: 0.2, delay: 0.2 * index }}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full justify-between hover:bg-clrpink bg-clrsurface "
                >
                  {route}
                </motion.button>
              </Link>
            ))}
          </div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}

const routeslist = ["home", "about", "skills", "projects"];
