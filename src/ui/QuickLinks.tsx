import Link from "next/link";
import React from "react";

export default function QuickLinks({
  text,
  navs,
}: {
  text: string;
  navs: { name: string; path: string }[];
}) {
  return (
    <main className="flex flex-col space-y-3">
      <h1 className="text-lg font-medium">{text}</h1>
      {navs.map((nav, i) => (
        <Link key={i} href={nav.path} className="text-sm font-normal">
          {nav.name}
        </Link>
      ))}
    </main>
  );
}
