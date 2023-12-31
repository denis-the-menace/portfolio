import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`bg-clrsurface font-mono font-medium text-2xl text-clr8`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
