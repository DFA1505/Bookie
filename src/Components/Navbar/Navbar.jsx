import React from "react";
import Logo from "../../assets/bookie.png";
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const DropdownLinks = [
  {
    name:'Trending Books',
    link:'/#books'
  },
  {
    name:'Best Selling',
    link:'/#bestbooks'
  },
  {
    name:'Authors',
    link:'/#books'
  },
]

const Navbar = ({handleOrderPopUp}) => {
  return (
    <div className="shadow-lg dark:bg-blue-900 dark:text-white" id="home">
      <div className="container py-3 sm:py-2">
        <div className="flex justify-between items-center">

          <div>
            <img src={Logo} alt="" className="w-[60px]"/>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="">
              <DarkMode/>
            </div>
            <ul className="sm:flex items-center gap-4 hidden font-semibold">
              <li className="inline-block py-4 px-4 hover:text-primary duration-200 cursor-pointer">Home</li>
              <li className="inline-block py-4 px-4 hover:text-primary duration-200 cursor-pointer"><a href="/#books">Best Seller</a></li>
              <li className="py-4 px-4 hover:text-primary duration-200 cursor-pointer group flex relative">Quick Links
                <span className="py-1 px-1"><FaCaretDown className="transition duration-300 group-hover:rotate-180"/></span>
              <div className="absolute top-9 -left-3 z-[10] hidden group-hover:block text-black bg-white p-2 shadow-sm dark:bg-blue-900 mt-1">
                <ul>
                  {
                    DropdownLinks.map((data)=>(
                      <li>
                        <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-primary/50 dark:text-white">{data.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
              </li>

            </ul>
            
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300" onClick={handleOrderPopUp}>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
