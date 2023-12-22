import { useLocalization } from "@/components/localization-context";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const languageContent = useLocalization();
  const overviewRef = useRef(null);
  const descriptionRef = useRef(null);
  // Maybe remove once: true
  const isOverviewInView = useInView(overviewRef, {
    margin: "-150px",
    once: true,
  });
  const isDescriptionInView = useInView(descriptionRef, {
    margin: "-150px",
    once: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-8 my-4 md:my-4 mx-4 md:mx-24 md:text-3xl p-8 border-2 md:border-0 rounded-3xl border-clrpink"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <p>DENIS(1)</p>
        <h1>General Commands Manual</h1>
        <p>DENIS(1)</p>
      </div>
      <div>
        <h2 className="self-start font-bold text-clr4 md:mb-4">NAME</h2>
        <p className="md:ml-28">Denis Gercek - web dev</p>
      </div>
      <div>
        <h2 className="self-start font-bold text-clr4 md:mb-4">SYNOPSIS</h2>
        <div className="md:ml-28">
          <div className="flex-col justify-center items-center md:mt-4">
            <div className="inline-flex flex-wrap font-bold text-5xl md:text-8xl mb-4">
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                transition={{ delay: 0.5 }}
              >
                {languageContent.about.synopsis[0]}&nbsp;
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                transition={{ delay: 1 }}
              >
                {languageContent.about.synopsis[1]}&nbsp;
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { delay: 0 } }}
                transition={{ delay: 1.2 }}
                className="text-clrpink"
              >
                {languageContent.about.synopsis[2]}
              </motion.h1>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{ delay: 1.7 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              {languageContent.about.synopsis[3]}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { delay: 0 } }}
              transition={{ delay: 2 }}
              className="text-2xl md:text-3xl"
            >
              {languageContent.about.synopsis[4]}
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        ref={overviewRef}
        initial={{ opacity: 0, y: -10 }}
        animate={isOverviewInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        className="md:ml-28"
      >
        <h2 className="self-start font-bold text-clr4 md:mb-4">OVERVIEW</h2>
        <div className="self-start flex flex-col">
          <div>
            <span>{languageContent.about.overview[0]}</span>
            <span className="font-bold underline decoration-clr7">
              {languageContent.about.overview[1]}
            </span>
          </div>
          <div>
            <span>{languageContent.about.overview[2]}</span>
            <span className="font-bold underline decoration-clr7">
              {languageContent.about.overview[3]}
            </span>
          </div>
          <div>
            <span>{languageContent.about.overview[4]}</span>
            <span className="font-bold underline decoration-clr7">
              {languageContent.about.overview[5]}
            </span>
            <span>{languageContent.about.overview[6]}</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={descriptionRef}
        initial={{ opacity: 0, y: -10 }}
        animate={isDescriptionInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        className="md:ml-28"
      >
        <h2 className="self-start font-bold text-clr4 md:mb-4">DESCRIPTION</h2>
        <p className="font-bold text-clr5">
          {languageContent.about.description[0]}
        </p>
        <p className="md:ml-28">{languageContent.about.description[1]}</p>
        <p className="font-bold text-clr5 mt-4">
          {languageContent.about.description[2]}
        </p>
        <p className="md:ml-28">{languageContent.about.description[3]}</p>
        <p className="font-bold text-clr5 mt-4">
          {languageContent.about.description[4]}
        </p>
        <p className="md:ml-28">{languageContent.about.description[5]}</p>
      </motion.div>
    </motion.div>
  );
}
