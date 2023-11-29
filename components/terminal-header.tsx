import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function TerminalHeader({ path }: { path: string }) {
  let isHome = false;
  if (path === "") {
    path = "terminal";
    isHome = true;
  } else path += ".md";

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
        <p className="text-black font-bold">{path}</p>
      </div>
      <div className="flex ml-auto">
        <button
          className="inline-flex ml-2"
          onClick={() => {
            localStorage.setItem("language", "EN");
            location.reload();
          }}
        >
          en
        </button>
        <button
          className="inline-flex ml-0.5"
          onClick={() => {
            localStorage.setItem("language", "TR");
            location.reload();
          }}
        >
          tr
        </button>
      </div>
    </header>
  );
}
      // {!isHome ? (
      //   <AnimatePresence>
      //     <motion.nav
      //       initial={{ opacity: 0 }}
      //       animate={{ opacity: 1 }}
      //       transition={{ delay: 1 }}
      //       exit={{ opacity: 0 }}
      //     >
      //       <ul className="flex ml-4 gap-4">
      //         <li>
      //           <Link href={"/"}>
      //             <span>terminal</span>
      //           </Link>
      //         </li>
      //         <li>
      //           <Link href={"/about"}>
      //             <span>about</span>
      //           </Link>
      //         </li>
      //         <li>
      //           <Link href={"/education"}>
      //             <span>education</span>
      //           </Link>
      //         </li>
      //         <li>
      //           <Link href={"/skills"}>
      //             <span>skills</span>
      //           </Link>
      //         </li>
      //         <li>
      //           <Link href={"/"}>
      //             <span>links</span>
      //           </Link>
      //         </li>
      //       </ul>
      //     </motion.nav>
      //   </AnimatePresence>
      // ) : null}
