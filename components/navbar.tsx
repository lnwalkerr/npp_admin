"use client";

import { ThemeSwitch } from "@/components/theme-switch";
import NextLink from "next/link";
import { ReactNode } from "react";

// Map sidebar routes to icons
const leftNavItems = [
  {
    label: "Dashboard",
    href: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <rect width="7" height="9" x="3" y="3" rx="1" />
        <rect width="7" height="5" x="14" y="3" rx="1" />
        <rect width="7" height="9" x="14" y="12" rx="1" />
        <rect width="7" height="5" x="3" y="16" rx="1" />
      </svg>
    ),
  },
  {
    label: "News",
    href: "/news",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="M15 18h-5" />
        <path d="M18 14h-8" />
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" />
        <rect width="8" height="4" x="10" y="6" rx="1" />
      </svg>
    ),
  },
  {
    label: "Images",
    href: "/images",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
  },
  {
    label: "Videos",
    href: "/videos",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
  },
  {
    label: "Events",
    href: "/events",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    label: "Leaders",
    href: "/leaders",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Users",
    href: "/users",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "Donations",
    href: "/donations",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
      </svg>
    ),
  },
  {
    label: "Queries",
    href: "/queries",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    label: "Join Requests",
    href: "/join-requests",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-current"
      >
        <path d="m16 11 2 2 4-4" />
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
  },
];

const NavbarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* LEFT SIDEBAR */}
      <aside className="fixed top-0 left-0 w-[clamp(200px,20%,256px)] max-w-[256px] min-w-[200px] bg-[#F5F8FB] flex flex-col h-screen">
        <div className="p-6">
          <h1 className="font-bold text-2xl text-black">Admin</h1>
        </div>

        <ul className="flex flex-col px-4">
          {leftNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href} className="mb-2 px-4 py-2">
                <NextLink
                  href={item.href}
                  className="flex items-center gap-2 text-foreground hover:text-primary font-medium transition-colors whitespace-nowrap"
                >
                  <span className="inline-block scale-70">{Icon}</span>{" "}
                  {/* scales the SVG 30% smaller */}
                  <span className="text-sm">{item.label}</span>
                </NextLink>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* RIGHT SIDE */}
      <div className="flex-1 ml-[clamp(200px,20%,256px)] flex flex-col">
        {/* TOP NAVBAR */}
        <div className="fixed top-0 left-[clamp(200px,20%,256px)] right-0 h-15 bg-[#FDFDFD] border-b border-gray-300 flex items-center justify-between gap-4 px-6 z-10">
          <div>
            <h2 className="font-semibold">Social Group Admin</h2>
          </div>
          <div className="flex items-center justify-center gap-2">
            {/* ThemeSwitch with hover circle */}
            <div className="relative group">
              <div className="p-2 flex items-center justify-center">
                <ThemeSwitch />
              </div>
              <span className="absolute inset-0 rounded-full bg-green-400 opacity-0 transition-opacity group-hover:opacity-30 pointer-events-none"></span>
            </div>

            {/* Button with hover circle */}
            <div className="relative group">
              <button className="px-4 py-2 rounded transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-current"
                >
                  <path d="m16 17 5-5-5-5" />
                  <path d="M21 12H9" />
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                </svg>
              </button>
              <span className="absolute inset-0 rounded-full bg-green-400 opacity-0 transition-opacity group-hover:opacity-30 pointer-events-none"></span>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 mt-20 overflow-auto px-6">{children}</main>
      </div>
    </div>
  );
};

export default NavbarLayout;
