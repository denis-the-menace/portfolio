import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        <p className="text-black font-bold">{path}</p>
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
      // {!isHome ? (
      //   <motion.nav
      //     initial={{ opacity: 0 }}
      //     animate={{ opacity: 1 }}
      //     transition={{ delay: 1 }}
      //   >
      //     <ul className="flex ml-4 gap-4">
      //       <li>
      //         <Link href={"/"}>
      //           <span>terminal</span>
      //         </Link>
      //       </li>
      //       <li>
      //         <Link href={"/about"}>
      //           <span>about</span>
      //         </Link>
      //       </li>
      //       <li>
      //         <Link href={"/education"}>
      //           <span>education</span>
      //         </Link>
      //       </li>
      //       <li>
      //         <Link href={"/skills"}>
      //           <span>skills</span>
      //         </Link>
      //       </li>
      //       <li>
      //         <Link href={"/"}>
      //           <span>links</span>
      //         </Link>
      //       </li>
      //     </ul>
      //   </motion.nav>
      // ) : null}
