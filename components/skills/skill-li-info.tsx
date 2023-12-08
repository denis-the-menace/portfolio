import { useLocalization } from "@/components/localization-context";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

export default function SkillLiInfo({ index }: { index: number }) {
  const languageContent = useLocalization();

  return (
    <motion.div className="relative flex flex-col justify-center items-center m-4 max-w-6xl">
      <Image
        width={100}
        height={100}
        src="archlinux.svg"
        alt="archlinux.svg"
        className="absolute top-1/4 left-1/4 w-2/6 h-2/6 object-cover opacity-50"
      />
      <h1 className="text-5xl font-bold">
        {languageContent.interests[index][1]}
      </h1>
      <p>{languageContent.interests[index][2]}</p>
    </motion.div>
  );
}
