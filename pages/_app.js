import "../styles/globals.scss";

import localFont from "@next/font/local";
import { Oswald } from "@next/font/google";
const kyivSans = localFont({ src: "../fonts/KyivTypeSans-Regular.ttf" });
const oswald = Oswald({ subsets: ["latin", "cyrillic"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --oswald-font: ${oswald.style.fontFamily};
          --kyivSans-font: ${kyivSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
