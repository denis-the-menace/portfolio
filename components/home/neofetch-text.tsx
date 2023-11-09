export default function NeofetchText() {
  return (
    <>
      <div>
        <p>~</p>
        <span className="inline text-clrpink font-bold">{"> "}</span>
        <div
          className="neofetch-text-container"
          onClick={() => {
            localStorage.setItem("rerenderNeofetch", JSON.stringify(true));
            location.reload();
          }}
        >
          <span className="neofetch-text-container__neofetch">neofetch</span>
          <span className="neofetch-text-container__rerender">
            Rerender the page.
          </span>
        </div>
      </div>
    </>
  );
}
