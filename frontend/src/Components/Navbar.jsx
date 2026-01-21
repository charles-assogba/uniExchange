import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiSellCard } from "react-icons/gi";
import { NavbarMenu } from "../MockData/data";
export default function Navbar() {
 
  return (
    <>
      <nav>
        <div className="container">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <GiSellCard/>
            <p>UniExchange</p>
            <p className="text-secondary">School</p>
          </div>
          {/* menu section */}
          {/* Icon section */}
          {/* Mobil hamburger menu section */}
        </div>
      </nav>
      {/* Mobil Sidebar section */}
    </>
  );
}