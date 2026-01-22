import React from "react";
import { CiSearch } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import { GiSellCard } from "react-icons/gi";
import { NavbarMenu } from "../MockData/data";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navbar() {
 const [open, setOpen]=React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <GiSellCard/>
            <p>UniExchange</p>
            <p className="text-secondary">School</p>
          </div>
          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {
                NavbarMenu.map((item)=>{
                  return(
                    <li key={item.id}>
                      <a href="{item.link}" className="inline-block px-3 hover:text-primary font-semibold">{item.title}</a>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {/* Icon section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch className=""/>
            </button>
             <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <GoQuestion/>
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block" >login</button>
            <button className="bg-primary font-semibold text-white rounded-md border-2 border-primary px-6 py-2 hidden md:block" >Sell</button>
          </div>
          {/* Mobil hamburger menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl"/>
          </div>
        </div>
      </nav>
      {/* Mobil Sidebar section */}
      <ResponsiveMenu open={open}/>
    </>
  );
};