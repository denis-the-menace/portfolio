import Image from "next/image";

export default function TerminalHeader({ path }: { path: string }) {
  let isHome = false;
  if (path === "") {
    path = "terminal";
    isHome = true;
  } else path += ".md";

  return (
    <header className="flex bg-clrsurface">
      <div className="flex justify-center items-center bg-clrpink pr-4 py-1">
        {isHome ? (
          <Image
            width={24}
            height={24}
            className="mx-4"
            src="terminal-icon.svg"
            alt="terminal-icon"
          />
        ) : (
          <Image
            width={24}
            height={24}
            className="mx-4"
            src="markdown-icon.svg"
            alt="markdown-icon"
          />
        )}
        <p className="text-black font-bold">{path}</p>
      </div>
      <div className="flex ml-auto">
        <button
          className="inline-flex ml-2"
          onClick={() => {
            localStorage.setItem("language", "EN");
            location.reload();
          }}
        >
          en
        </button>
        <button
          className="inline-flex ml-0.5"
          onClick={() => {
            localStorage.setItem("language", "TR");
            location.reload();
          }}
        >
          tr
        </button>
      </div>
    </header>
  );
}
