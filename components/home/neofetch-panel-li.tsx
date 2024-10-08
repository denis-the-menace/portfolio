import { useLocalization } from "@/components/localization-context";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NeofetchPanelLi({
  route,
  index,
}: {
  route: string;
  index: number;
}) {
  const language = useLocalization();
  let content = null;

  const commonProps = {
    key: index,
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
    transition: { delay: 0.5 + index * 0.3 },
    className: "main-panel__ul__li",
  };

  if (index === 3) {
    content = (
      <Link href={language.cv} target="_blank" rel="noopener noreferrer">
        <span className="text-clrpink font-bold">
          {`${language.neofetchPanel[index][0]} `}
        </span>
        {`${language.neofetchPanel[index][1]}`}
      </Link>
    );
  } else if (index === 4) {
    content = (
      <div className="inline-flex gap-4">
        <span className="text-clrpink font-bold">
          {`${language.neofetchPanel[index][0]} `}
        </span>
        <Link
          href="https://www.linkedin.com/in/denis-naz%C4%B1m-hikmet-ger%C3%A7ek-37a721248/"
          target="_blank"
          rel="noopener noreferrer"
          className="links__icon"
        >
          <Image
            width={24}
            height={24}
            src="linkedin-icon.svg"
            alt="linkedin-icon.svg"
            className="contrast-50 brightness-200 saturate-200 sepia greyscale"
          />
        </Link>
        <Link
          href="https://github.com/denis-the-menace"
          target="_blank"
          rel="noopener noreferrer"
          className="links__icon"
        >
          <Image
            width={24}
            height={24}
            src="github-icon.svg"
            alt="github-icon.svg"
            className="contrast-50 brightness-200 saturate-200 sepia greyscale"
          />
        </Link>
      </div>
    );
  } else {
    content = (
      <Link href={`/${route}`}>
        <span className="text-clrpink font-bold">
          {`${language.neofetchPanel[index][0]} `}
        </span>
        {`${language.neofetchPanel[index][1]}`}
      </Link>
    );
  }

  return <motion.li {...commonProps}>{content}</motion.li>;
}
