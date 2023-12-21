import NeofetchAnimation from "./home/neofetch-animation";

export default function TerminalPrompt({
  path,
  isTerminalPromptRendered,
}: {
  path: string;
  isTerminalPromptRendered: (state: boolean) => void;
}) {
  let isHome;
  if (path === "") isHome = true;
  else isTerminalPromptRendered(true);

  if (path === "about") path = "man denis";
  else if (path === "skills") path += ".md";
  else if (path === "projects") path = "cd projects && fzf";

  return (
    <div className="mt-4">
      <p>~</p>
      <span className="inline text-clrpink font-bold">{"> "}</span>
      {isHome ? (
        <NeofetchAnimation setShowNeofetchPanel={isTerminalPromptRendered} />
      ) : (
        <span>{path}</span>
      )}
    </div>
  );
}
