import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`h-screen bg-clrsurface font-mono font-normal text-2xl text-clr8`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
