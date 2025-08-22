// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const allowIndex = process.env.NEXT_PUBLIC_ROBOTS_INDEX === "true";
    const robots = allowIndex ? "index,follow" : "noindex,nofollow";

    return (
      <Html lang="zh-Hant">
        <Head>
          <meta name="robots" content={robots} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

