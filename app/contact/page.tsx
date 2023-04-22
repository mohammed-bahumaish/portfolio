"use client";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/mohammed-ba-humaish/",
    label: "LinkedIn",
    handle: "mohammed-ba-humaish",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/mohammed-bahumaish",
    label: "Github",
    handle: "mohammed-bahumaish",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:mohammed.bahumaish@gmail.com",
    label: "Email",
    handle: "mohammed.bahumaish@gmail.com",
  },
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/prisma_editor",
    label: "Twitter",
    handle: "@prisma_editor",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen px-4 mx-auto max-w-xl">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150  text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
