import React from "react";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
import Image from "next/image";
import profile from "../public/profile.jpg";
import loggi from "../public/loggi.svg";
import prisma from "../public/prisma.svg";

export default function About() {
  return (
    <section className="flex flex-col items-start justify-between my-4 lg:flex-row">
      <div className="max-w-3xl mb-8">
        <h1 className="mb-4 text-4xl font-semibold">Hey, I'm Daniel!</h1>
        <RoughNotationGroup>
          <p className="mb-4">
            I'm passionate about learning new skills and technoloies. I work as
            a{" "}
            <RoughNotation
              type="highlight"
              iterations={1}
              padding={4}
              strokeWidth={12}
              color="#00BAFF55"
              order={1}
              multiline
              show>
              software engineer
            </RoughNotation>{" "}
            at{" "}
            <a
              aria-label="Loggi"
              target="_blank"
              href="https://www.loggi.com/"
              className="font-semibold transition-colors duration-100 hover:text-loggi"
              rel="noreferrer">
              <Image
                src={loggi}
                width={16}
                height={16}
                priority
                aria-label="Loggi"
              />{" "}
              Loggi{" "}
            </a>
            where our goal is to connect people through logistics. I'm also a{" "}
            <a
              aria-label="Prisma"
              target="_blank"
              href="https://www.prisma.io/?utm_source=Prisma%20Ambassador&utm_medium=Blog%20post&utm_campaign=Prisma%20AP%20Daniel%20Olavio%20Ferreira"
              className="font-semibold transition-colors duration-100 hover:text-prisma"
              rel="noreferrer">
              <RoughNotation
                type="highlight"
                iterations={1}
                padding={2}
                strokeWidth={12}
                color="#38A16955"
                order={2}
                multiline
                show>
                <Image
                  src={prisma}
                  width={16}
                  height={16}
                  priority
                  aria-label="Prisma"
                />{" "}
                Prisma Ambassador
              </RoughNotation>{" "}
            </a>{" "}
            where I help other developers work with Prisma.
          </p>
          <p className="mb-4">
            Here is where I shared some of the things that I have learned over
            the years and am still learning. You will find a lot of knowledge
            about modern{" "}
            <RoughNotation
              type="highlight"
              iterations={1}
              padding={[4, 6]}
              strokeWidth={12}
              color="#7a37b155"
              order={3}
              multiline
              show>
              web development
            </RoughNotation>
            , how to make{" "}
            <RoughNotation
              type="highlight"
              iterations={1}
              padding={4}
              strokeWidth={12}
              color="#ffe6006f"
              order={4}
              multiline
              show>
              scalable applications
            </RoughNotation>{" "}
            and the ways of becoming a{" "}
            <RoughNotation
              type="highlight"
              iterations={1}
              padding={4}
              strokeWidth={6}
              color="#ff990075"
              order={5}
              multiline
              show>
              better developer.
            </RoughNotation>
          </p>
          <span>
            Let's chat on{" "}
            <a
              aria-label="Twitter"
              target="_blank"
              href="https://twitter.com/danielolaviobr"
              className="font-semibold transition-colors duration-100 hover:text-twitter"
              rel="noreferrer">
              Twitter
            </a>
          </span>
        </RoughNotationGroup>
      </div>
      <Image
        alt="Daniel Olavio"
        src={profile}
        height={256}
        width={256}
        priority
        quality="100"
        placeholder="blur"
        className="rounded-full"
      />
    </section>
  );
}
