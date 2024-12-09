"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const links = [
  {
    name: "Home",
    link: "string"
   },{
    name: "About",
    link: "string1"
   },{
    name: "Formation",
    link: "string4"
   },{
    name: "Projects",
    link: "string2"
   },{
    name: "Contact",
    link: "string3"
   },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <FloatingNav navItems={links} />
        <div>{children}</div>
      </body>
    </html>
  );
}
