import Image from "next/image";
import Buttons from "./reusable/Buttons.js";
import { useState } from "react";

const NavItem = (props) => {
  let [open, setOpen] = useState(false);

  return (
    <div>
      <li>
        <a
          href={props.href}
          className="text-md font-[500] px-2 py-1 hover:bg-gray-100 rounded transition duration-200"
        >
          {props.text}
        </a>
      </li>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-5 py-5 ">
        <div className="flex items-center ">
          <div className="flex items-center cursor-pointer">
            <Image src="/logo.png" alt="notion" width="35" height="35" />
            <span className="text-md font-bold ml-2 mr-4">Notion</span>
          </div>

          <div className="hidden w-full lg:block lg:w-auto">
            <ul className="flex items-center space-x-8">
              <NavItem href="/product" text="Product" />
              <NavItem href="/download" text="Download" />
              <NavItem href="/solutions" text="Solutions" />
              <NavItem href="/resources" text="Resources" />
              <NavItem href="/pricing" text="Pricing" />
            </ul>
          </div>
        </div>
        <div className="hidden w-full lg:block lg:w-auto">
          <ul className="flex items-center space-x-3 ">
            <NavItem href="/contact" text="Contact sales" />
            <NavItem href="/login" text="Log in" />
            <Buttons />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
