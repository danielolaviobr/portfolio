import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { ToastData } from "types/Toast";
import objStr from "obj-str";

export default function Toast({ message, status }: Omit<ToastData, "id">) {
  return (
    <motion.div
      className="flex items-center justify-center mt-3 bg-white rounded-md shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}>
      <div
        className={objStr({
          "rounded-l-md flex items-center justify-center p-2": true,
          "bg-green-500": status === "success",
          "bg-red-400": status === "error",
          "bg-blue-400": status === "info",
        })}>
        <Image
          src={objStr({
            "/check.svg": status === "success",
            "/lightning.svg": status === "error",
            "/alert.svg": status === "info",
          })}
          width={24}
          height={24}
          alt="Check"
          className="text-white "
        />
      </div>
      <h4
        className={objStr({
          "p-2 ml-2 font-semibold": true,
          "text-green-500": status === "success",
          "text-red-400": status === "error",
          "text-blue-400": status === "info",
        })}>
        {message}
      </h4>
    </motion.div>
  );
}
