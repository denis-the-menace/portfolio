import { useLocalization } from "@/components/localization-context";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Image from "next/image";
import useMeasure from "react-use-measure";

export default function SkillsLi({
  index,
  content,
  imageSrc,
  color,
  isActive,
  onShow,
}: {
  index: number;
  content: string;
  imageSrc: string;
  color: string;
  isActive: boolean;
  onShow: () => void;
}) {
  const languageContent = useLocalization();
  const [ref, { height }] = useMeasure();

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <motion.li
        animate={{ height }}
        className="interests__li"
        onClick={onShow}
      >
        <button
          className={`interests__button p-4 mr-24 relative text-4xl md:text-5xl inline-flex items-end ${color}`}
        >
          {languageContent.skills[index][0]}
          <Image
            width={7 * 16}
            height={7 * 16}
            src={imageSrc}
            alt={imageSrc}
            className={`interests__img interests__${content}__img`}
          />
        </button>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:ml-40"
          >
            <div
              ref={ref}
              className="inline-block justify-center items-center m-4 max-w-6xl"
            >
              <h1 className="mb-4 text-4xl md:text-5xl font-bold">
                {languageContent.skills[index][1]}
              </h1>
              <p className="">{languageContent.skills[index][2]}</p>
            </div>
          </motion.div>
        )}
      </motion.li>
    </MotionConfig>
  );
}
