import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center h-8">
      <div className="flex-1 h-px mr-4 bg-black-DEAFAULT" />
      <span className="text-sm">
        made by{" "}
        <Link href="/">
          <a className="hover:underline">Daniel Olavio</a>
        </Link>
      </span>
    </footer>
  );
}
