"use client";
import { Cinzel } from "next/font/google";
import { HTMLAttributes } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const cinzel = Cinzel({
  subsets: ["latin"],
});

const AllNavItems: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Events",
    href: "/events",
  },
    {
        name: "Register",
        href: "/register",
    },
  {
    name: "Sponsors",
    href: "/sponsors",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function NavMenu(props: HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();
  const navItems = AllNavItems.filter((item) => item.href !== pathname);

  return (
    <nav
      {...props}
      className={`absolute z-10 bottom-2 left-2 sm:left-4 md:left-10 ${props.className} flex flex-col items-center text-white p-10`}
    >
      <ul className="flex flex-col items-start gap-2 sm:gap-3 md:gap-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className={`${cinzel.className} text-lg sm:text-xl md:text-2xl hover:text-[#FFDE7D] transition-colors duration-300 ease-in-out`}>
             {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
