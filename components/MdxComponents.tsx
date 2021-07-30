/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import Image from "next/image";
import { useEffect } from "react";
import Prism from "prismjs";

(typeof global !== "undefined" ? global : window).Prism = Prism;
Prism.languages.prisma = Prism.languages.extend("clike", {
  keyword: /\b(?:datasource|enum|generator|model|type)\b/,
  "type-class-name": /(\b()\s+)[\w.\\]+/,
});

// Prism?.languages?.javascript?["class-name"]?[0].pattern =
//   /(\b(?:model|datasource|enum|generator|type)\s+)[\w.\\]+/

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
      <h1 id={link} className="text-2xl font-semibold group">
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
      <h2 id={link} className="text-xl font-semibold group">
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
      <h3 id={link} className="text-lg font-medium group">
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
    <pre className="overflow-x-auto whitespace-pre">{children}</pre>
  ),
  code: ({ children = "", className = "", ...props }) => {
    // useEffect(() => {
    //   Prism.highlightAll();
    // }, []);

    return <code className={className || "language-markup"}>{children}</code>;
  },
};
