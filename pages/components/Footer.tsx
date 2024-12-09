import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaLocationPin, FaTwitter } from 'react-icons/fa6'
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-[100%] flex flex-col mt-[100px] bg-myBlack md:h-[500px] md:mt-[150px]">
      <div className="w-[100%] flex flex-col md:flex md:flex-row md:justify-evenly md:mt-9">
       <div className="gap-1 font-Helvetica-Neue space-y-4 flex flex-col mt-3">
        <Link href={' '} className="text-background font-medium text-[15px]">Find A Store</Link>
        <Link href={' '} className="text-background font-medium text-[15px]">Become A Member</Link>
        <Link href={' '} className="text-background font-medium text-[15px]">Sign Up for Email</Link>
        <Link href={' '} className="text-background font-medium text-[15px]">Send Us Feedback</Link>
        <Link href={' '} className="text-background font-medium text-[15px]">Student Discounts</Link>
       </div>
       <div className="gap-1 font-Helvetica-Neue space-y-4 flex flex-col mt-3">
        <Link href={' '} className="text-background font-medium text-[15px]">Get Help</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Order Status</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Delivery</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Returns</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Payment Options</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Contact Us On Nike.com Inquiries</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Contact Us On All Other Inquiries</Link>
       </div>
       <div className="gap-1 font-Helvetica-Neue space-y-4 flex flex-col mt-3">
        <Link href={' '} className="text-background font-medium text-[15px]">About Nike</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">News</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Careers</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Investors</Link>
        <Link href={' '} className="text-[#7E7E7E] font-medium text-[15px]">Sustainability</Link>
       </div>
       <div className="flex mt-4 gap-4">
        <FaTwitter className="text-myBlack bg-slate-500 w-[30px] h-[30px] rounded-full p-1 text-[24px]"/>
        <FaFacebookF className="text-myBlack bg-slate-500 w-[30px] h-[30px] rounded-full p-1 text-[24px]"/>
        <TfiYoutube className="text-myBlack bg-slate-500 w-[30px] h-[30px] rounded-full p-1 text-[24px]"/>
        <TiSocialInstagram className="text-myBlack bg-slate-500 w-[30px] h-[30px] rounded-full p-1 text-[24px]"/>
      </div>
      </div>
      <div className="md:mt-16 md:justify-between md:flex md:flex-row-reverse md:p-4">
      <div className="flex gap-4 mt-4">
      <Link href={' '} className="text-[#7E7E7E] font-medium text-[11px] md:text-[12px]">Guides</Link>
      <Link href={' '} className="text-[#7E7E7E] font-medium text-[11px] md:text-[12px]">Terms of Sale</Link>
      <Link href={' '} className="text-[#7E7E7E] font-medium text-[11px] md:text-[12px]">Terms of Use</Link>
      <Link href={' '} className="text-[#7E7E7E] font-medium text-[11px] md:text-[12px]">Nike Privacy Policy</Link>
      </div>
      <div className="flex mt-4 gap-5 md:justify-around md:flex md:flex-row md:items-center md:gap-4 md:text-center">
        <FaLocationPin className="text-white text-[10px] md:text-[20px]"/>
        <span className="font-Helvetica-Neue font-medium text-white text-[10px] md:text-[20px]">India</span>
        <p className="font-Helvetica-Neue font-medium text-[#7E7E7E] text-[10px] md:text-[20px]">© 2023 Nike, Inc. All Rights Reserved</p>
      </div>
      </div>
    </div>
  )
}
export default Footer
