import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Header() {
  return (
    <header className="z-20 flex items-center justify-center w-screen h-16 py-8 mb-8 bg-white ">
      <nav className="flex flex-col items-center justify-between flex-1 max-w-6xl sm:flex-row">
        <Link href="/" aria-label="Home">
          <a className="text-xl font-medium">DANIEL OLAVIO</a>
        </Link>
        <ul className="flex items-center">
          <li className="mx-2">
            <Link href="/projects">
              <a className="hover:underline">Projects</a>
            </Link>
          </li>
          <li className="mx-2">
            <Link href="/blog">
              <a className="hover:underline">Blog</a>
            </Link>
          </li>
          <div className="w-2 h-2 mx-2 rounded-full bg-gray-DEAFAULT" />
          <li className="mx-2">
            <a
              href="https://www.youtube.com/channel/UCyyR0RgWUsfUeyy-5l9BBfw"
              className="text-xl transition-colors duration-150 hover:text-red-600"
              aria-label="Youtube"
              target="_blank"
              rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-xl transition-colors duration-150 hover:text-purple-500"
              href="https://github.com/danielolaviobr"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-xl transition-colors duration-150 hover:text-blue-400"
              href="https://twitter.com/danielolaviobr"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li className="mx-2">
            <a
              className="text-xl transition-colors duration-150 hover:text-blue-600"
              href="https://www.linkedin.com/in/daniel-olavio/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
