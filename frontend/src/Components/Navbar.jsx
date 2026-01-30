import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdLinkedCamera } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { GiSellCard } from "react-icons/gi";
import { NavbarMenu } from "../MockData/data";
import DropdownMenu from "./DropdownMenu";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import CameraSearchBar from "./CameraSearchBar";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav className="w-full top-0 left-0 z-50">
        <div className="container flex justify-between items-center py-8 overflow-visible relative z-50">
          {/* logo section */}
          <div className="text-2xl text-primary flex items-center gap-2 font-bold uppercase">
            <GiSellCard />
            <p>UniExchange</p>
            <p className="text-black">School</p>
          </div>
          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className="relative">
                    {item.dropdown ? (
                      <DropdownMenu
                        title={item.title}
                        items={item.dropdownItems}
                      />
                    ) : (
                      <a
                        href={item.link}
                        className="inline-block px-3 hover:text-primary font-semibold"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icon section */}
          <div className="flex items-center gap-4">
            {/*CameraSearchBar section*/}
            <div class="relative hidden md:block w-64">
              <input
                type="search"
                placeholder="Search"
                class="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
                <MdLinkedCamera size={30} />
              </button>
            </div>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch size={30} />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <GoQuestion />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
              login
            </button>
            <button className="bg-primary font-semibold text-white rounded-md border-2 border-primary px-6 py-2 hidden md:block">
              Sell
            </button>
          </div>
          {/* Mobil hamburger menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobil Sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
}
