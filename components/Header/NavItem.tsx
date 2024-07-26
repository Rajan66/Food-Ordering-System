"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  name: string;
  href: string;
};

const NavItem = ({ name, href }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "px-[10px] py-[30px] text-nav text-navbarText transition duration-150 opacity-100",
        {
          " opacity-100": pathname === href,
        }
      )}
    >
      {name}
    </Link>
  );
};

export default NavItem;
