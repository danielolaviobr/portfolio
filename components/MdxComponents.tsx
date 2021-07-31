/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import Image from "next/image";
import React, { useEffect } from "react";
import Prism from "prismjs";
import { useToast } from "hooks/toast";
import slugify from "utils/slugfy";
import { useRouter } from "next/router";
import { useClipboard } from "@chakra-ui/hooks";

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
    const { asPath } = useRouter();
    const { addPositiveToast } = useToast();
    const { onCopy } = useClipboard(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}${asPath.split("#")[0]}#${slugify(
        children
      )}`
    );

    const handleCopy = () => {
      onCopy();
      addPositiveToast("Link Copied", "success");
    };

    return (
      <h1
        id={slugify(children)}
        className="mt-4 mb-2 text-2xl font-semibold group">
        <button onClick={handleCopy} className="mr-2 -ml-6 focus:outline-none">
          <Image
            src="/hashtag.svg"
            width={17}
            height={18}
            alt={children}
            className="opacity-0 group-hover:opacity-100"
          />
        </button>
        {children}
      </h1>
    );
  },
  h2: ({ children = "", ...props }) => {
    const { asPath } = useRouter();
    const { addPositiveToast } = useToast();
    const { onCopy } = useClipboard(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}${asPath.split("#")[0]}#${slugify(
        children
      )}`
    );

    const handleCopy = () => {
      onCopy();
      addPositiveToast("Link Copied", "success");
    };
    return (
      <h2
        id={slugify(children)}
        className="mt-4 mb-2 text-xl font-semibold group">
        <button onClick={handleCopy} className="mr-2 -ml-6 focus:outline-none">
          <Image
            src="/hashtag.svg"
            width={16}
            height={16}
            alt={children}
            className="opacity-0 group-hover:opacity-100"
          />
        </button>
        {children}
      </h2>
    );
  },
  h3: ({ children = "", ...props }) => {
    const { asPath } = useRouter();
    const { addPositiveToast } = useToast();
    const { onCopy } = useClipboard(
      `${process.env.NEXT_PUBLIC_LOCAL_URL}${asPath.split("#")[0]}#${slugify(
        children
      )}`
    );

    const handleCopy = () => {
      onCopy();
      addPositiveToast("Link Copied", "success");
    };
    return (
      <h3
        id={slugify(children)}
        className="mt-4 mb-2 text-lg font-medium group">
        <button onClick={handleCopy} className="mr-2 -ml-6 focus:outline-none">
          <Image
            src="/hashtag.svg"
            width={17}
            height={18}
            alt={children}
            className="opacity-0 group-hover:opacity-100"
          />
        </button>
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

    return (
      <code
        className={
          className ||
          "bg-gray-200 text-gray-600  p-0.5 rounded-sm border-gray-300"
        }>
        {children}
      </code>
    );
  },
  p: ({ children = "", ...props }) => (
    <p className="mb-2 leading-6 text-justify">{children}</p>
  ),
};
