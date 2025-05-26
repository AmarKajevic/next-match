"use client";

import { Button, Navbar, NavbarBrand, NavbarContent } from "@heroui/react";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";
import UserMenu from "./UserMenu";
import { Session } from "next-auth"; // koristi pravi tip ako nije ovaj

// ✅ OVDE: tipiziramo props
type Props = {
  session: Session | null;
};

// ✅ OVDE: ispravno koristimo props
const TopNav = ({ session }: Props) => {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-purple-400 to to-purple-700"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-yellow-200",
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex ">
          <span className="text-gray-900">Next</span>
          <span className="text-gray-200">Match</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <>
            <Button
              as={Link}
              href="/login"
              variant="bordered"
              className="text-white"
            >
              Login
            </Button>
            <Button
              as={Link}
              href="/register"
              variant="bordered"
              className="text-white"
            >
              Register
            </Button>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

// ✅ OVDE: eksplicitno exportujemo
export default TopNav;
