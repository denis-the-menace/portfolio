import Link from "next/link";
import Image from "next/image";
import languageContent from "@/public/languageContent";

export default function InterestLi({
  index,
  content,
  imageSrc,
  color,
}: {
  index: number;
  content: string;
  imageSrc: string;
  color: string;
}) {
  return (
    <li className="interests__li">
      <div className={`py-4 mr-24 relative text-5xl inline-flex items-end ${color}`}>
        <Link href={"/os"}>{languageContent.interests[index][0]}</Link>
        <Image
          width={7 * 16}
          height={7 * 16}
          src={imageSrc}
          alt={imageSrc}
          className={`interests__img interests__${content}__img`}
        />
      </div>
    </li>
  );
}
