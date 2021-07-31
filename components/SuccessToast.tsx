import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";

export default function SuccessToast({ message = "Link Copied" }) {
  return (
    <motion.div
      className="flex px-2 mt-3 bg-green-300 rounded-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      key={uuid()}>
      <Image src="/check.svg" width={16} height={16} alt="Check" />
      <span className="ml-2 text-green-800">{message}</span>
    </motion.div>
  );
}
