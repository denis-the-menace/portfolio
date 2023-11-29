import languageContent from "@/public/languageContent";
import { motion } from "framer-motion";
import Image from "next/image";
import InterestLi from "@/components/interests/interest-li";
import { useState } from "react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-20 my-4 mr-20 ml-20 p-20 justify-center items-center"
    >
        <div className=""></div>
        <div className="flex-col justify-center">
          <div className="inline-flex flex-wrap font-bold text-8xl mb-4">
            <h1 className="">{languageContent.about[0]}</h1>
            <h1 className="text-clrpink">&nbsp;Denis</h1>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            {languageContent.about[1]}
          </h2>
          <p className="text-3xl">{languageContent.about[2]}</p>
        </div>
      <div className="self-start text-3xl">
        <h2>{languageContent.about[3]}</h2>
        <p className="font-bold">{languageContent.about[4]}</p>
        <p>{languageContent.about[5]}</p>
        <p>{languageContent.about[6]}</p>
      </div>
    </motion.div>
  );
}
// <Image
//   width={80}
//   height={120}
//   src="archlinux.svg"
//   alt="arch"
//   className="w-80 h-100"
// />
// <div className="about__title__name-box">
//   <ul className="about__title__name-box__ul">
//     <li className="about__title__name-box__ul__li">Denis</li>
//     <li className="about__title__name-box__ul__li">Nazım</li>
//     <li className="about__title__name-box__ul__li">Hikmet</li>
//     <li className="about__title__name-box__ul__li">Denis</li>
//   </ul>
// </div>
