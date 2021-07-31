import type { AppProps } from "next/app";
import Header from "components/Header";
import Footer from "components/Footer";
import Image from "next/image";
import "../styles/globals.css";
import { useToast } from "hooks/toast";
import { AnimatePresence } from "framer-motion";
import Toast from "components/Toast";

function MyApp({ Component, pageProps }: AppProps) {
	const { toasts } = useToast();
	return (
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
	);
}

export default MyApp;
