import "../styles/globals.scss";
import localFont from "@next/font/local";
import { Roboto } from "@next/font/google";

const robotoCondensed = localFont({ src: "../fonts/RobotoCondensed-Bold.ttf" });

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
          --robotoCondensed-font: ${robotoCondensed.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
