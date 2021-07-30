import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center h-16 py-8 mb-8 bg-white">
      <nav className="flex flex-col items-center justify-between flex-1 sm:flex-row">
        <Link href="/" aria-label="Home">
          <a className="text-xl font-medium">DANIEL OLAVIO</a>
        </Link>
        <ul className="flex items-center">
          <li className="mx-2">
            <Link href="#">
              <a className="hover:underline">Projects</a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="#">
              <a className="hover:underline">Blog</a>
            </Link>
          </li>
          <div className="w-2 h-2 mx-2 rounded-full bg-gray-DEAFAULT" />
          <li className="mx-2">
            <a
              href="https://www.youtube.com/channel/UCyyR0RgWUsfUeyy-5l9BBfw"
              className="hover:underline"
              aria-label="Youtube"
              target="_blank"
              rel="noopener noreferrer">
              Youtube
            </a>
          </li>
          <li className="mx-2">
            <a
              className="hover:underline"
              href="https://github.com/danielolaviobr"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="mx-2">
            <a
              className="hover:underline"
              href="https://twitter.com/danielolaviobr"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li className="mx-2">
            <a
              className="hover:underline"
              href="https://www.linkedin.com/in/daniel-olavio/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
