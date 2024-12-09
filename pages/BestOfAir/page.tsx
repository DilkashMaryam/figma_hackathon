import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Image from 'next/image'

const Best = () => {
  return (
    <div className="w-[100%] flex flex-col mt-5 md:w-[100%]">
     <div className="flex justify-between m-2 md:flex md:justify-between md:m-10">
        <h1 className="text-myBlack font-Helvetica-Neue font-medium text-[16px] md:text-[22px]">Best of Air Max</h1>
        <div className="flex justify-center items-center gap-1 md:flex md:justify-center md:items-center">
        <h1 className="text-myBlack font-Helvetica-Neue font-medium text-[16px] md:text-[22px]">Shop</h1>
        <IoIosArrowDropleftCircle className="text-gray-300 text-[18px] md:text-[32px]"></IoIosArrowDropleftCircle>
        <IoIosArrowDroprightCircle className="text-gray-400 text-[18px] md:text-[32px]"></IoIosArrowDroprightCircle>
        </div>
     </div>
     <div className="w-[100%] flex flex-col justify-evenly md:w-[100%] md:flex md:flex-row">
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl">
            <Image src="/images/bestairmax1.png" alt="pic1"width={400} height={200} className="md:w-[450px] md:h-[450px]"></Image>
            <div className="flex justify-between p-3">
                <div className="flex flex-col">
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Max Pulse</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Women&apos;s Shoes</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">₹ 13 995</p>
            </div>
        </div>
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl">
            <Image src="/images/bestairmax2.png" alt="pic1"width={400} height={200}  className="md:w-[450px] md:h-[450px]"></Image>
            <div className="flex justify-between p-3">
                <div className="flex flex-col">
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Max Pulse</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">₹ 13 995</p>
            </div>
        </div>
        <div className="w-[100%] h-auto p-6 md:hover:shadow-xl">
            <Image src="/images/bestairmax3.png" alt="pic1"width={400} height={200}  className="md:w-[450px] md:h-[450px]"></Image>
            <div className="flex justify-between p-3">
                <div className="flex flex-col">
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Nike Air Max 97 SE</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">Men&apos;s Shoes</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">₹ 16 995</p>
            </div>
        </div>
     </div>
      
    </div>
  )
}

export default Best
