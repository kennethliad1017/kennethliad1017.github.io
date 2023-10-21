"use client";

import { useState } from "react";
import Link from "next/link";

import TodoishScreen from "./TodoishApp";
import PersonalFinanceScreen from "./PersonalFinanceApp";

import Reveal from "./Reveal";

const works = [
  {
    projectTitle: "Todoish",
    projectDescription:
      "The app is designed to help you manage your task and manage task status locally",
    platform: "Mobile",
    techStack: "Android (XML-based)",
    appLink: "/app-downloads/todoish/todoish.apk",
    githubProject: "https://github.com/kennethliad1017/Todoish",
  },
  {
    projectTitle: "Personal Finance Manager",
    projectDescription:
      "The app is designed to help you manage your personal finance by tracking expense, setting budget limit, saving goals, and providing financial insights locally",
    platform: "Mobile",
    techStack: "Jetpack Compose",
    appLink: "/app-downloads/personalfinance/personalfinance.apk",
    githubProject: "https://github.com/kennethliad1017/PersonalFinance",
  },
];

function FeaturedProject() {
  const [inView, setInView] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const onViewChanged = (value: boolean, index: number) => {
    setInView(value);
    setSelectedIndex(index);
  };

  return (
    <div className="w-full flex flex-row relative">
      {inView && selectedIndex != -1 && (
        <div className="fixed top-0 left-0 right-0 w-full md:left-14 bottom-0 md:w-[48vw] md:px-12 md:py-11 font-sans md:bg-transparent z-[9999]">
          <div className="h-36">
            <Reveal swipeClass="dark:bg-blue-400 bg-blue-600" isInView={inView}>
              <h2 className="text-[2.5rem] leading-[3rem] font-medium">
                {(selectedIndex + 1).toString().padStart(2, "0")}
              </h2>
            </Reveal>
          </div>
          <div
            className="flex flex-col w-full items-center ml-12"
            style={{
              height: "calc(100% - 9rem)",
            }}
          >
            <div className="w-full md:flex-grow">
              <Reveal
                isInView={inView}
                swipeClass="dark:bg-blue-400 bg-blue-600"
              >
                <h1 className="text-h4 md:text-h2 font-medium">
                  {works[selectedIndex].projectTitle}
                </h1>
              </Reveal>
              <Reveal
                isInView={inView}
                className="my-4"
                swipeClass="dark:bg-blue-400 bg-blue-600"
              >
                <div className="flex gap-4 items-center">
                  <h2 className="text-subtitle1 md:text-h4">
                    {works[selectedIndex].platform}
                  </h2>
                  &#8226;
                  <h2 className="text-subtitle1 md:text-h4">
                    {works[selectedIndex].techStack}
                  </h2>
                </div>
              </Reveal>
              <Reveal
                isInView={inView}
                swipeClass="dark:bg-blue-400 bg-blue-600"
              >
                <p className="text-body2 md:text-subtitle1">
                  {works[selectedIndex].projectDescription}
                </p>
              </Reveal>
            </div>
            <div className="w-full h-[5.5rem] mt-auto">
              <Reveal
                isInView={inView}
                swipeClass="dark:bg-blue-400 bg-blue-600"
              >
                <div className="flex gap-4 py-4">
                  <Link
                    href={works[selectedIndex].appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-900 dark:border-gray-50 px-3 py-2 md:px-[2.625rem] md:py-4 rounded-md md:text-h6 md:h-14 font-medium"
                  >
                    Demo
                  </Link>
                  <a
                    href={works[selectedIndex].githubProject}
                    className="dark:bg-gray-50 bg-gray-900 dark:text-gray-950 text-gray-50 px-3 py-2 md:px-[2.625rem] md:py-4 rounded-md md:text-h6 md:h-14"
                  >
                    Source Code
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      )}
      <div className="w-full -z-10 md:z-0 md:w-1/2  ml-auto blur-xs md:blur-none">
        <div className="w-full relative">
          <TodoishScreen
            projectTitle={works[0].projectTitle}
            index={0}
            onViewChanged={onViewChanged}
          />
          <PersonalFinanceScreen
            projectTitle={works[1].projectTitle}
            index={1}
            onViewChanged={onViewChanged}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
