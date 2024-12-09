import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";


const Header = () => {
  //*Top Menu Items*//
  const topNavItems = [
    {
      name: "Find a Store",
      link: "#",
    },
    {
      name: "Help",
      link: "#",
    },
    {
      name: "Join Us",
      link: "#",
    },
    {
      name: "Sign In",
      link: "#",
    },
  ]

  //*Navbar Items*//
  const navBar =[
    {
      name: "New & Featured",
      link: "./Allproduct/page",
    },
    {
      name: "Men",
      link: "#",
    },
    {
      name: "Women",
      link: "#",
    },
    {
      name: "Kids",
      link: "#",
    },
    {
      name: "Sale",
      link: "#",
    },
    {
      name: "SNKRS",
      link: "#",
    },
  ]

  //*Hambergur functionality*//
  // State to manage menu visibility//
    const [menuOpen, setMenuOpen] = useState(false);
  
    // Function to toggle menu visibility
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div className="bg-[#FFFFFF]">
  {/*TopNavbar*/}
    <div className="bg-topNav w-[100%] justify-between h-[26px] p-4 flex items-center md:bg-topNav md:w-[100%] md:h-[36px] md:flex md:justify-between md:p-5">
    <div className="ml-2">
    <Image src="/images/personlogo.png" alt='logo' width={19.2} height={17.97}></Image>
    </div>
     <ul className="text-myBlack font-Helvetica-Neue font-medium text-[11px] flex space-x-3 md:text-myBlack md:font-Helvetica-Neue md:font-medium md:space-x-10">
      {
        topNavItems.map((item, i)=> (
          <li key={i}>
            <Link href={item.link}>{item.name}</Link>
            </li>
        ))
      }
     </ul>
    </div>
  {/*Navbar*/}
    <div className="w-[100%] justify-evenly bg-[#FFFFFF] flex mt-4 p-3 md:w-[100%] md:h-[60px] md:justify-between md:flex md:items-center md:absolute md:p-5">
      <div className="ml-2">
      <Image src="/images/nikelogo.png" alt='logo' width={30} height={20} className='md:w-[58.85px] md:h-[20.54px]'></Image>
      </div>
      <div className="flex relative md:hidden">
      <FaMagnifyingGlass className="text-myBlack w-[10px] h-[10px] mt-1 ml-2 absolute"/>
      <input type='search' placeholder='Search' className="font-Helvetica-Neue pl-6 rounded-md bg-topNav text-[#CCCCCC] font-normal text-[12px] w-[100px] h-[20px] flex"></input>
      </div>
      <div className=" flex gap-2 md:hidden">
    <Image src="/images/wishlist.png" alt="wishlist" width={15} height={10}></Image>
    <Image src="/images/cart.png" alt="cart" width={15} height={10}></Image>
    </div>
      <div className="text-myBlack text-xl font-Helvetica-Neue">
      <FaBars className="text-myBlack md:hidden" onClick={toggleMenu} aria-label="Toggle Menu"/>
      <ul className={`${menuOpen ? "block" : "hidden"}
       text-myBlack font-Helvetica-Neue font-medium text-[11px] flex flex-col gap-4 absolute md:text-myBlack md:font-Helvetica-Neue md:font-medium md:text-[15px] md:flex-row md:flex md:justify-between md:items-center md:relative`}>
      {
        navBar.map((item, i)=> (
          <li key={i}>
            <Link href={item.link}>{item.name}</Link>
            </li>
        ))
      }
     </ul>
      </div>
    <div className="hidden md:flex md:relative">
      <FaMagnifyingGlass className="text-myBlack w-[20px] h-[20px] md:absolute md:ml-2 md:mt-2 " />
    <input type="search" placeholder="Search" className="md:font-Helvetica-Neue md:pl-12 md:rounded-full md:bg-topNav md:text-[#CCCCCC] md:font-normal md:text-[15px] md:w-[200px] md:h-[40px] md:flex"></input>
    </div>
    <div className="hidden md:flex md:gap-4 md:space-x-5">
    <Image src="/images/wishlist.png" alt="wishlist" width={19.5} height={16.76}></Image>
    <Image src="/images/cart.png" alt="cart" width={19.5} height={16.76}></Image>
    </div>
    </div>
    </div>
  )
}

export default Header
