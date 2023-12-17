import { useLocalization } from "@/components/localization-context";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SkillLi from "@/components/skills/skill-li";

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 1 }}
      className="mb-20"
    >
      <motion.ul className="flex flex-col flex-wrap justify-center gap-16 md:gap-24 list-none my-4 md:my-16 mx-8 md:mx-20">
        <SkillLi
          key={0}
          index={0}
          content="os"
          imageSrc="tux.svg"
          color="bg-red-500 text-clr8"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        />
        <SkillLi
          key={1}
          index={1}
          content="cinema"
          imageSrc="tux.svg"
          color="bg-red-700 text-clr8"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        />
        <SkillLi
          key={2}
          index={2}
          content="weightlifting"
          imageSrc="tux.svg"
          color="bg-red-900 text-clr8"
          isActive={activeIndex === 2}
          onShow={() => setActiveIndex(2)}
        />
      </motion.ul>
    </motion.div>
  );
}
