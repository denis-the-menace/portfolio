import { useLocalization } from "@/components/localization-context";
import { MotionConfig, motion } from "framer-motion";

export default function About() {
  const languageContent = useLocalization();

  return (
    <MotionConfig transition={{ delay: 3 }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
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
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {languageContent.about.synopsis[0]}&nbsp;
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {languageContent.about.synopsis[1]}&nbsp;
                </motion.h1>
                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-clrpink"
                >
                  {languageContent.about.synopsis[2]}
                </motion.h1>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold mb-4"
              >
                {languageContent.about.synopsis[3]}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl"
              >
                {languageContent.about.synopsis[4]}
              </motion.p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="self-start font-bold text-clr4 md:mb-4">OVERVIEW</h2>
          <motion.div className="md:ml-28">
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
        </div>
        <div>
          <h2 className="self-start font-bold text-clr4 md:mb-4">
            DESCRIPTION
          </h2>
          <div className="md:ml-28">
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
          </div>
        </div>
      </motion.div>
    </MotionConfig>
  );
}
