import React, { useState } from "react";
import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import { useToast } from "hooks/toast";
import { AnimatePresence } from "framer-motion";
import Toast from "components/Toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { toasts } = useToast();
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <DefaultSeo {...SEO} />
        <div className="flex flex-col items-center justify-center min-h-screen">
          <Header />
          <div className="flex flex-col w-full max-w-6xl min-h-screen">
            <div className="fixed z-30 top-8 left-1/2">
              <AnimatePresence>
                {toasts.map((toast, i) => (
                  <Toast
                    key={toast.id}
                    message={toast.message}
                    status={toast.status}
                  />
                ))}
              </AnimatePresence>
            </div>
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
