import { useLocalization } from "@/components/localization-context";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

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
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <li className="interests__li" onClick={onShow}>
        <button
          className={`p-4 mr-24 relative text-2xl md:text-5xl inline-flex items-end ${color}`}
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
        {isActive ? (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 1 }}
            className="inline-block justify-center items-center m-4 max-w-6xl"
          >
            <h1 className="text-5xl font-bold">
              {languageContent.interests[0][1]}
            </h1>
            <p>{languageContent.interests[0][2]}</p>
          </motion.div>
        ) : null}
      </li>
    </div>
  );
}
            // <Image
            //   width={100}
            //   height={100}
            //   src="archlinux.svg"
            //   alt="archlinux.svg"
            //   className="absolute top-1/4 left-1/4 w-2/6 h-2/6 object-cover opacity-50"
            // />
