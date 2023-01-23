import "../styles/globals.scss";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
});
// const robotoCondensed = RobotoCondensed({
//   weight: ["500"],
//   style: ["normal"],
//   subsets: ["latin", "cyrillic"],
// });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --roboto-font: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
