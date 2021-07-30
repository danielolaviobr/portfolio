import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col w-full max-w-6xl min-h-screen">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
