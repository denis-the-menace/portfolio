import { useLocalization } from "@/components/localization-context";
import { MotionConfig, motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import SkillLi from "@/components/skills/skill-li";

export default function Skills() {
  const languageContent = useLocalization();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set the breakpoint as needed
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen to window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <MotionConfig transition={{ duration: 1 }}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 1 }}
        className=""
      >
        <motion.ul className="flex flex-col flex-wrap justify-center md:gap-20 list-none my-4 md:my-16 mx-8">
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
    </MotionConfig>
  );
}
// {activeIndex === 0 ? (
//   <motion.div className="relative flex flex-col justify-center items-center m-4 max-w-6xl">
//     <motion.img
//       style={{ opacity: scrollYProgress }}
//       width={100}
//       height={100}
//       src="archlinux.svg"
//       alt="archlinux.svg"
//       className="absolute top-1/4 left-1/4 w-2/6 h-2/6 object-cover opacity-50"
//     />
//     <h1 className="text-5xl font-bold">
//       {languageContent.interests[0][1]}
//     </h1>
//     <p>{languageContent.interests[0][2]}</p>
//   </motion.div>
// ) : null}
