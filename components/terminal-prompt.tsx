import NeofetchAnimation from "./home/neofetch-animation";

export default function TerminalPrompt({
  path,
  setIsTerminalPromptRendered,
}: {
  path: string;
  setIsTerminalPromptRendered: (state: boolean) => void;
}) {
  let isHome;
  if (path === "") isHome = true;
  else {
    setIsTerminalPromptRendered(true);
    console.log(setIsTerminalPromptRendered);
  }

  if (path === "about") path = "man denis";
  else if (path === "skills") path += ".md";
  else if (path === "projects") path = "cd projects && fzf";

  return (
    <div className="mt-4">
      <p>~</p>
      <span className="inline text-clrpink font-bold">{"> "}</span>
      {isHome ? (
        <NeofetchAnimation setShowNeofetchPanel={setIsTerminalPromptRendered} />
      ) : (
        <span>{path}</span>
      )}
    </div>
  );
}
