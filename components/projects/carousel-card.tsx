import Link from "next/link";

export default function CarouselCard({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <li className="flex bg-clr1 min-w-[200px] rounded-2xl">
        <h2>{title}</h2>
        <p>{description}</p>
    </li>
  );
}
