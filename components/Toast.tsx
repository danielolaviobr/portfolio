import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { ToastData } from "types/Toast";

export default function Toast({ message, status }: Omit<ToastData, "id">) {
	return (
		<motion.div
			className={`flex px-2 mt-3  rounded-md ${
				status === "success"
					? "bg-green-400"
					: status === "error"
					? "bg-red-400"
					: "bg-blue-400"
			}`}
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}>
			<Image src="/check.svg" width={16} height={16} alt="Check" />
			<span
				className={`ml-2 ${
					status === "success"
						? "text-green-800"
						: status === "error"
						? "text-red-800"
						: "text-blue-800"
				}`}>
				{message}
			</span>
		</motion.div>
	);
}
