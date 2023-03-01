import "../styles/globals.scss";
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="rgba(255,153,0, 0.8)" startPosition={0.3} stopDelayMs={200} height={0} showOnShallow={true} />
  
  
      <Component {...pageProps} />
    </>
  );
}
