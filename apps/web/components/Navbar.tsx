import Link from "next/link";
import React from "react";

const navItems = [
  {
    label: "Login",
    href: "/login",
  },
];

const Navbar = () => {
  return (
    <div className="border-b border-gray-200 px-4 py-3">
      <div className="w-full max-w-[1440px] mx-auto  flex items-center justify-between">
        <Link href={"/"} className="text-gray-700 text-lg font-medium">ToDo Apps</Link>
        <div>
          {navItems.map((item, i) => (
            <Link
              className="text-sm text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50"
              href={item.href}
              key={i}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
