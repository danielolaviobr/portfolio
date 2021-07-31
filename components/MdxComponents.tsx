/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import Image from "next/image";
import React, { useEffect } from "react";
import Prism from "prismjs";

(typeof global !== "undefined" ? global : window).Prism = Prism;
Prism.languages.prisma = Prism.languages.extend("clike", {
  keyword: /\b(?:datasource|enum|generator|model|type)\b/,
  "type-class-name": /(\b()\s+)[\w.\\]+/,
});

Prism.languages.javascript["class-name"] =
  /(\b(?:model|datasource|enum|generator|type)s+)[w.\\]+/;

Prism.languages.insertBefore("prisma", "function", {
  annotation: {
    pattern: /(^|[^.])@+\w+/,
    lookbehind: true,
    alias: "punctuation",
  },
});

Prism.languages.insertBefore("prisma", "punctuation", {
  "type-args": /\b(?:references|fields):/,
});

Prism.languages.json5 = Prism.languages.js;

export const components = {
  h1: ({ children = "", ...props }) => {
    const link = children.replace(" ", "-").toLocaleLowerCase();
    return (
      <h1 id={link} className="mt-4 mb-2 text-2xl font-semibold group">
        <a href={`#${link}`} className="mr-2 -ml-6">
          <Image
            src="/hashtag.svg"
            width={17}
            height={18}
            alt={children}
            className="opacity-0 group-hover:opacity-100"
          />
        </a>
        {children}
      </h1>
    );
  },
  h2: ({ children = "", ...props }) => {
    const link = children.replace(" ", "-").toLocaleLowerCase();
    return (
      <h2 id={link} className="mt-4 mb-2 text-xl font-semibold group">
        <a href={`#${link}`} className="mr-2 -ml-6">
          <Image
            src="/hashtag.svg"
            width={16}
            height={16}
            alt={children}
            className="opacity-0 group-hover:opacity-100"
          />
        </a>
        {children}
      </h2>
    );
  },
  h3: ({ children = "", ...props }) => {
    const link = children.replace(" ", "-").toLocaleLowerCase();
    return (
      <h3 id={link} className="mt-4 mb-2 text-lg font-medium group">
        <a href={`#${link}`} className="mr-2 -ml-6">
          <Image
            src="/hashtag.svg"
            width={17}
            height={18}
            alt={children}
            className="opacity-0 group-hover:opacity-100"
          />
        </a>
        {children}
      </h3>
    );
  },
  pre: ({ children = "", ...props }) => (
    <pre className="my-4 overflow-x-auto whitespace-pre">{children}</pre>
  ),
  code: ({ children = "", className = "", ...props }) => {
    useEffect(() => {
      Prism.highlightAll();
    }, []);
    console.log(className);

    return (
      <code
        className={
          className ||
          "bg-gray-200 text-gray-600  p-0.5 rounded-md border-gray-300"
        }>
        {children}
      </code>
    );
  },
  p: ({ children = "", ...props }) => (
    <p className="mb-2 leading-6 text-justify">{children}</p>
  ),
};
