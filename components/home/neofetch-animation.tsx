import { useEffect, useState } from "react";

export default function NeofetchAnimation({
  setShowNeofetchPanel,
}: {
  setShowNeofetchPanel: (state: boolean) => void;
}) {
  const [revealedLetters, setRevealedLetters] = useState(0);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    const rerenderNeofetch = JSON.parse(
      localStorage.getItem("rerenderNeofetch") ?? "true",
    );
    if (rerenderNeofetch === null || rerenderNeofetch === false) {
      setRevealedLetters("neofetch".length);
      setShowNeofetchPanel(true);
      setHideCursor(true);
    } else {
      const interval = setInterval(() => setRevealedLetters((l) => l + 1), 200);
      if (revealedLetters === "neofetch".length) {
        clearInterval(interval);
        localStorage.setItem("neofetchAnimationPlayed", JSON.stringify(true));
        setTimeout(() => {
          setShowNeofetchPanel(true);
        }, 500);
        localStorage.setItem("rerenderNeofetch", JSON.stringify(false));
        setHideCursor(true);
      }
      return () => clearInterval(interval);
    }
  }, [revealedLetters, setShowNeofetchPanel]);

  return (
    <p className={`inline-flex items-center gap-1 ${hideCursor ? "hide" : ""}`}>
      {"neofetch".substring(0, revealedLetters)}
    </p>
  );
}
