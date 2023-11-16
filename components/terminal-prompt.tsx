import NeofetchAnimation from "./home/neofetch-animation";

export default function TerminalPrompt({
  path,
  isTerminalPromptRendered,
}: {
  path: string;
  isTerminalPromptRendered: (state: boolean) => void;
}) {
  let isHome;

  if (path === "") {
    isHome = true;
  } else {
    path += ".md";
    isTerminalPromptRendered(true);
  }

  return (
    <div>
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
