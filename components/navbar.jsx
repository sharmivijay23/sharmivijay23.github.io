import { Navbar } from "flowbite-react";
import { NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";

export default function MyNavBar() {
  return (
    <div className="sticky top-0 z-50 flex justify-center bg-gray-950 p-8">
      <Navbar fluid rounded className="bg-gray-950 text-4xl text-white">
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className="text-lg text-white" href="#home">
            Home
          </NavbarLink>
          <NavbarLink as={Link} className="text-lg text-white" href="#about">
            About
          </NavbarLink>
          <NavbarLink className="text-lg text-white" href="#projects">
            Projects
          </NavbarLink>
          <NavbarLink className="text-lg text-white" href="#skills">
            Skills
          </NavbarLink>
          <NavbarLink className="text-lg text-white" href="#contact">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  );
}
