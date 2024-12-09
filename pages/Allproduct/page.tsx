import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSliderHorizontal } from "react-icons/ci";
import Image from "next/image";

const Product = () => {
    const menu =[
        {
          name: "Shoes",
          link: "#",
        },
        {
          name: "Sports Bras",
          link: "#",
        },
        {
          name: "Tops & T-Shirts",
          link: "#",
        },
        {
          name: "Hoodies & Sweatshirts",
          link: "#",
        },
        {
          name: "Jackets",
          link: "#",
        },
        {
          name: "Trousers & Tights",
          link: "#",
        },
        {
            name: "Shorts",
            link: "#",
          },
          {
            name: "Tracksuits",
            link: "#",
          },
          {
            name: "Jumpsuits & Rompers",
            link: "#",
          },
          {
            name: "Skirts & Dresses",
            link: "#",
          },
          {
            name: "Socks",
            link: "#",
          },
          {
            name: "Accessories & Equipment",
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
    <div className="h-[290vh] w-[100%] md:h-[830vh] md:w-[100%]">
      <div className="flex justify-evenly md:justify-between md:p-6 md:mt-20">
        <div className="flex items-center gap-2">
        <h1 className="text-myBlack text-[16px] font-Helvetica-Neue md:text-[18px]">New (500)</h1>
       <FaBars className="text-myBlack md:hidden" onClick={toggleMenu} aria-label="Toggle Menu"/>
        </div>
      <ul className={`${menuOpen ? "block" : "hidden"}
       text-myBlack mt-[40px] font-Helvetica-Neue font-medium text-[11px] flex flex-col gap-2 shadow-xl w-[50%] ml-4 absolute md:text-myBlack md:font-Helvetica-Neue md:w-[150px] md:gap-1 md:ml-1 md:font-medium md:text-[15px] md:flex-col md:flex md:shadow-none`}>
      {
        menu.map((item, i)=> (
          <li key={i}>
            <Link href={item.link}>{item.name}</Link>
            </li>
        ))
      }
     </ul>
     <div className="flex gap-3 justify-center items-center">
        <div className="flex">
        <h1 className="text-myBlack text-[12px] font-Helvetica-Neue md:text-[18px]">Hide Filters</h1>
        <CiSliderHorizontal className="text-myBlack md:w-[30px] md:h-[30px]"/>
        </div>
       <div className="flex">
       <h1 className="text-myBlack text-[12px] font-Helvetica-Neue md:text-[18px]">Sort By</h1>
       <IoIosArrowDown className="text-myBlack md:w-[30px] md:h-[30px]"/>
      </div>
     </div>
      </div>

      <div className="w-[100%] flex flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle.png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Force 1 Mid 07</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 10 795.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (1).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Court Vision Low Next Nature</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 4 995.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (2).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Force 1 PLT.AF.ORM</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 8 695.00</p>
        </div>
     </div>

     {/* 2nd row */}
     <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (3).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Force 1 React</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 13 295.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (4).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Promo Exclusion</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Air Jordan 1 Elevate Low</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 11 895.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (5).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Standard Issue</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Basketball Jersey</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 2 895.00</p>
        </div>
     </div>

     {/* 3rd row */}
     <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (6).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Promo Exclusion</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Dunk Low Retro SE</h1>
                <p className="'text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 9 695.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (7).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Sustainable Materials</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Dri-FIT UV Hyverse</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Short-Sleeve Graphic Fitness Top</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 2 495.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (8).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Court Vision Low</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 5 695.00</p>
        </div>
     </div>

     {/* 4th row */}
     <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (9).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Dri-FIT Ready</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Short-Sleeve Fitness Top</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">3 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 9 695.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (10).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike One Leak Protection: Period</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Mid-Rise 18cm (approx.) Biker Shorts</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 3 395.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (11).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-c">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Force 1 LV8 3</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Older Kids Shoe</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 7 495.00</p>
        </div>
     </div>

      {/* 5th row */}
      <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (12).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Blazer Low Platform</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 8 195.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (13).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Force 1 07</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Shoe</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 8 195.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (14).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Pro Dri-FIT</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Tight-Fit Sleeveless Top</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 1 495.00</p>
        </div>
     </div>

      {/* 6th row */}
      <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (15).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Dunk Low Retro</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 8 695.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (16).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Max SC</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Shoe</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 5 995.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (17).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Dri-FIT UV Miler</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Short-Sleeve Running Top</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 1 695.00</p>
        </div>
     </div>

      {/* 7th row */}
      <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (18).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Max SYSTM</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Older Kids Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 6 495.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (19).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Alate All U</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Light-Support Lightly Lined U-Neck Printed Sports Bra</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 2 195.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (20).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Court Legacy Lift</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 7 495.00</p>
        </div>
     </div>

      {/* 8th row */}
      <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (21).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Swoosh</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Medium-support Padded Sports Bra Tank</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 3 095.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (22).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike SB Zoom Janoski OG+</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 8 595.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (23).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Dri-FIT Run Division Rise 365</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Running Tank</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 3 495.00</p>
        </div>
     </div>

      {/* 9th row */}
      <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/gearup2.png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Dri-FIT Challenger</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 2 495.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (24).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Jordan Series ES</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 7 495.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (24).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Outdoor Play</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Older Kids Oversized Woven Jacket</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 3 895.00</p>
        </div>
     </div>

      {/* 10th row */}
      <div className="w-[100%] hidden flex-col justify-evenly md:w-[100%] md:flex md:flex-row md:pl-72">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (25).png" alt="pic"width={400} height={200} className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1 className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Sportswear Trend</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Older Kids (Girl&apos;s) High-waisted Woven Shorts</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">2 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 2 495.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (26).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Blazer Low 77 Jumbo</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Shoe</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 8 595.00</p>
        </div>

        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl md:w-[400px] md:h-[500px]">
            <Image src="/images/Rectangle (27).png" alt="pic"width={400} height={200}  className="md:object-cover"></Image>
                <div className="flex flex-col">
                <h1 className="text-[#9E3500] text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Just In</h1>
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike SB Force 58</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Skate Shoe</p>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">1 Colour</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium mt-4 md:text-[15px]">MRP : ₹ 5 995.00</p>
        </div>
     </div>
     <button className="md:hidden rounded-full p-2 w-[200px] hover:bg-[#FFFFFF] hover:text-myBlack bg-myBlack text-[#FFFFFF] text-center ml-10">See More</button>
     <hr  className="m-3 md:m-16"/>
     <div className="w-[100%] p-4 md:w-[100%] md:ml-16">
      <h1 className="text-myBlack md:foont-Helvetica-Neue md:font-medium md:text-[19px] md:text-myBlack">Related Categories</h1>
      <div className="gap-4  md:w-[100%] md:flex md:mt-8 md:gap-4">
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">Best Selling Products</button>
      <button className=" text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[150px] md:border-gray-300 md:border-2 md:text-myBlack">Best Shoes</button>
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">New Basketball Shoes</button>
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">New Football Shoes</button>
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">New Running Shoes</button>
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">Best Men&apos;s Shoes</button>
      </div>
      <div className="md:w-[50%] md:flex md:mt-2 md:gap-4">
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300  md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">New Jordan Shoes</button>
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">Best Women&apos;s Shoes</button>
      <button className="text-myBlack mt-2 rounded-full w-[200px] border-2 border-gray-300 md:rounded-full md:w-[200px] md:border-gray-300 md:border-2 md:text-myBlack">Best Training & Gym</button>
      </div>
     </div>
    </div>
  )
}

export default Product
