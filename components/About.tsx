import React from "react";
import { RoughNotationGroup, RoughNotation } from "react-rough-notation";
import Image from "next/image";
import profile from "../public/profile.jpg";

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
              className="inline-flex items-center font-semibold transition-colors duration-100 hover:text-loggi"
              rel="noreferrer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 128 123"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
                aria-label="Loggi">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M112.778 30.7056C109.719 29.0978 106.126 27.6889 104.782 27.1789C104.319 26.846 104.024 26.6262 104.024 26.6262C104.024 26.6262 85.903 13.6632 77.9134 10.3013C69.9233 6.93879 56.0287 -0.380752 41.92 0.0154633C30.78 0.32805 23.9056 2.39633 21.5023 2.97306C18.6539 3.65637 16.7493 4.46001 19.8701 5.93014C20.9149 6.42223 25.3691 9.07437 30.7775 12.1615C38.6778 16.6713 48.6133 22.1092 52.9309 23.0975C57.0649 24.0434 63.874 25.4324 72.5739 25.2478C82.5022 25.0377 87.3313 29.2737 88.3078 30.8198C86.5302 28.2967 79.7644 26.2682 70.7407 26.8261C62.0556 27.363 55.0741 26.7807 51.0089 25.5716C43.0428 23.2025 34.5061 19.6452 27.3283 16.2863C24.3763 17.1853 22.5559 17.9405 21.4524 18.4081C18.9481 19.4693 16.6045 21.3749 20.1169 22.3652C22.6283 23.0735 46.1121 31.4741 52.9487 31.8825C56.8349 32.1151 63.2095 32.3445 71.0594 30.8637C79.9414 29.1875 84.5669 32.8346 85.6526 34.2476C82.8791 38.4611 81.0637 43.36 81.5828 48.8051C49.1115 43.0796 38.7472 40.1154 31.4149 38.8548C18.5962 36.6514 2.31265 47.5109 0.315764 60.9598C-0.81934 68.6021 1.13013 75.7406 5.77304 82.3457C10.9131 89.6576 17.6763 95.9639 18.66 97.303C19.2882 98.4458 19.0837 101.464 19.1271 103.495C19.1755 105.776 22.0444 107.825 23.7149 107.976C24.7103 108.067 43.9357 114.074 43.9357 114.074L72.4179 122.84C72.4179 122.84 72.8503 120.873 72.9365 120.044C73.1547 117.938 71.5515 112.739 64.8775 110.796C55.0522 107.84 53.1211 107.279 51.0304 106.65C49.9049 106.311 50.6943 106.295 52.4383 104.917C55.4137 102.393 57.9639 98.9868 59.2668 96.2169C65.0795 83.8577 57.764 72.8519 57.764 72.8519C57.764 72.8519 62.3299 77.6467 64.0453 86.0305C66.1885 96.5029 59.0893 104.812 59.0893 104.812L63.3258 106.041C63.3258 106.041 90.6907 78.4789 93.3637 75.5035C95.6202 72.9911 99.5456 71.4062 101.541 70.7581C108.84 68.6403 117.967 64.5507 120.289 63.0816C122.61 61.6125 125.454 56.425 126.168 55.143C126.881 53.861 127.817 52.1716 127.999 50.263C128.063 49.5924 124.161 44.3881 124.161 44.3881C124.161 44.3881 117.921 33.8345 112.778 30.7056Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.1268 115.634C31.5078 116.597 30.9463 119.153 33.3032 120.532C35.395 121.633 42.4213 117.783 42.4213 117.783L35.3751 115.561C35.3751 115.561 34.2696 115.096 33.1268 115.634Z"
                  fill="currentColor"
                />
              </svg>{" "}
              Loggi{" "}
            </a>
            where our goal is to connect people through logistics. I'm also a{" "}
            <a
              aria-label="Prisma"
              target="_blank"
              href="https://www.prisma.io/?utm_source=Prisma%20Ambassador&utm_medium=Blog%20post&utm_campaign=Prisma%20AP%20Daniel%20Olavio%20Ferreira"
              className="inline-flex items-center font-semibold transition-colors duration-100 hover:text-prisma"
              rel="noreferrer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 106 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
                aria-label="Prisma">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M105.306 97.5187L61.2843 4.03669V4.03469C60.1803 1.69769 57.8763 0.155691 55.2653 0.0126908C52.5863 -0.143309 50.1863 1.14869 48.8323 3.34769L1.08827 80.6777C-0.390728 83.0877 -0.361728 86.0597 1.17227 88.4407L24.5103 124.593C25.9013 126.751 28.3113 128 30.8163 128C31.5263 128 32.2403 127.9 32.9423 127.692L100.686 107.656C102.761 107.042 104.458 105.574 105.346 103.628C106.231 101.681 106.217 99.4527 105.306 97.5187ZM95.4493 101.529L37.9703 118.529C36.2143 119.049 34.5313 117.53 34.9003 115.759L55.4343 17.4197C55.8183 15.5807 58.3603 15.2887 59.1623 16.9917L97.1823 97.7277C97.8993 99.2507 97.0813 101.047 95.4493 101.529Z"
                  fill="currentColor"
                />
              </svg>{" "}
              Prisma{" "}
            </a>{" "}
            <RoughNotation
              type="highlight"
              iterations={1}
              padding={2}
              strokeWidth={12}
              color="#38A16955"
              order={2}
              multiline
              show>
              {" "}
              Ambassador
            </RoughNotation>{" "}
            where I help other developers work with Prisma.
          </p>
          <p className="mb-4">
            Here is where I shared some of the things that I have learned over
            the years and am still learning. You will find a lot of knowledge
            about modern{" "}
            <RoughNotation
              type="highlight"
              iterations={1}
              padding={4}
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
