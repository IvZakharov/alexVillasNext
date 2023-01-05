import "../styles/globals.scss";

import localFont from "@next/font/local";
const mainFont = localFont({ src: "../fonts/KyivTypeSans-Regular.ttf" });

export default function App({ Component, pageProps }) {
  return (
    <div className={mainFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
