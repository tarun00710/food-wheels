"use client"
import Link from "next/link";
import {  usePathname } from "next/navigation";

export default function NavLink({href, children}) {
  const path = usePathname();
  return (
    <>
      <Link
        href={href}
        className={`text-white hover:opacity-90 transition-opacity duration-200 text-center ${
            path.startsWith(href) ? "opacity-300" : "opacity-50 text-amber-600"
          }`}
      >
        {children}
      </Link>
      
    </>
  );
}
