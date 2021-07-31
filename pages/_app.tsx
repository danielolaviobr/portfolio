import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import Image from "next/image";
import "../styles/globals.css";
import { useToast } from "hooks/toast";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const { toasts } = useToast();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Header />
      <div className="flex flex-col w-full max-w-6xl min-h-screen">
        <AnimatePresence>
          <div className="fixed z-30 top-8 left-1/2">
            {toasts.map((toast, i) => toast)}
          </div>
        </AnimatePresence>
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
