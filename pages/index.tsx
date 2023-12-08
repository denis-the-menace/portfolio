import { motion } from "framer-motion";
import Image from "next/image";
import NeofetchPanelLi from "@/components/home/neofetch-panel-li";

export default function Page() {
  const routes = [
    "about",
    "skills",
    "projects",
    "link",
    "resume",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row md:gap-20 mb-4 md:my-16 mx-8"
    >
      <Image
        width={80}
        height={200}
        src="archlinux.svg"
        alt="arch"
        className="w-96 h-96"
      />
      <nav className="max-w-280 flex-col justify-center">
        <div className="flex">
          <p className="select-none text-clrpink">denis</p>
          <p className="select-none">@</p>
          <p className="select-none text-clrpink">gercek</p>
        </div>
        <p className="select-none">-----------</p>
        <ul className="list-none m-0 p-0">
          {routes.map((route, index) => (
            <NeofetchPanelLi key={index} route={route} index={index} />
          ))}
        </ul>
        <div className="flex mt-4">
          <div>
            <div className="w-11 h-7 bg-clr1" />
            <div className="w-11 h-7 bg-clr2" />
          </div>
          <div className="w-11 h-13 bg-clr3" />
          <div className="w-11 h-13 bg-clr4" />
          <div className="w-11 h-13 bg-clr5" />
          <div className="w-11 h-13 bg-clr6" />
          <div className="w-11 h-13 bg-clr7" />
          <div className="w-11 h-13 bg-clrpink" />
          <div className="w-11 h-13 bg-clr8" />
        </div>
      </nav>
    </motion.div>
  );
}
