import Link from "next/link";
import languageContent from "@/public/languageContent";

export default function NeofetchPanelLi({
  route,
  index,
}: {
  route: string;
  index: number;
}) {
  return (
    <Link href={`/${route}`}>
      <span className="text-clrpink font-bold">
        {`${languageContent.neofetchPanel[index][0]}: `}
      </span>
      {languageContent.neofetchPanel[index][1]}
    </Link>
  );
}
