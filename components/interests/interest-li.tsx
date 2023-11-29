import Image from "next/image";
import languageContent from "@/public/languageContent";

export default function InterestLi({
  index,
  content,
  imageSrc,
  color,
  isActive,
}: {
  index: number;
  content: string;
  imageSrc: string;
  color: string;
  isActive: (state: number) => void;
}) {
  return (
    <li className="interests__li" onClick={() => isActive(index)}>
      <button
        className={`py-4 mr-24 relative text-5xl inline-flex items-end ${color}`}
      >
        {languageContent.interests[index][0]}
        <Image
          width={7 * 16}
          height={7 * 16}
          src={imageSrc}
          alt={imageSrc}
          className={`interests__img interests__${content}__img`}
        />
      </button>
    </li>
  );
}
