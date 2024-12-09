import React from 'react'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Image from 'next/image'

const Gear = () => {
  return (
    <div className="w-[100%] flex flex-col mt-5 md:w-[100%]">
      <h1 className="text-myBlack font-Helvetica-Neue font-medium text-[16px] ml-3 md:text-[23px]">Gear Up</h1>
      <div className="flex flex-col w-[100%] p-5 md:flex-row md:justify-between">

        {/* Men's shop */}
        <div>
        <div className="w-[100%] flex justify-end items-center gap-1 md:flex md:justify-end md:items-center md:flex-row md:w-[550px]">
        <h1 className="text-myBlack font-Helvetica-Neue font-medium text-[16px] md:text-[22px]">Shop Men&apos;s</h1>
        <IoIosArrowDropleftCircle className="text-gray-300 text-[18px] md:text-[32px]"></IoIosArrowDropleftCircle>
        <IoIosArrowDroprightCircle className="text-gray-400 text-[18px] md:text-[32px]"></IoIosArrowDroprightCircle>
        </div>
        {/* Images with detail */}
        <div className="md:flex">
        <div className="w-[100%] h-auto p-3 md:w-[300px] md:hover:shadow-xl">
            <Image src="/images/gearup1.png" alt="pic1"width={400} height={200} className="md:w-[250px] md:h-[250px]"></Image>
            <div className="flex justify-between p-3">
                <div className="flex flex-col">
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[12px]">Nike Dri-FIT ADV TechKnit Ultra</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[12px]">Men&apos;s Short-Sleeve Running Top</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">₹ 3 895</p>
            </div>
        </div>
        <div className="w-[100%] h-auto p-3 md:w-[300px] md:hover:shadow-xl">
            <Image src="/images/gearup2.png" alt="pic1"width={400} height={200} className="md:w-[250px] md:h-[250px]"></Image>
            <div className="flex justify-between p-3">
                <div className="flex flex-col">
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[12px]">Nike Dri-FIT Challenger</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[10px]">Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">₹ 2 495</p>
            </div>
        </div>
        </div>
        </div>
        <div>
          {/* Women's shop */}
          <div className="w-[100%] flex justify-end items-center gap-1 md:flex md:justify-end md:items-center md:flex-row md:w-[550px]">
          <h1 className="text-myBlack font-Helvetica-Neue font-medium text-[16px] md:text-[22px]">Shop Women&apos;s</h1>
          <IoIosArrowDropleftCircle className="text-gray-300 text-[18px] md:text-[32px]"></IoIosArrowDropleftCircle>
          <IoIosArrowDroprightCircle className="text-gray-400 text-[18px] md:text-[32px]"></IoIosArrowDroprightCircle>
          </div>
           {/* Images with detail */}
        <div className="md:flex">
         <div className="w-[100%] h-auto p-3 md:w-[300px] md:hover:shadow-xl">
            <Image src="/images/gearup3.png" alt="pic1"width={400} height={200} className="md:w-[250px] md:h-[250px]"></Image>
            <div className="flex justify-between p-3">
                <div className="flex flex-col">
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[12px]">Nike Dri-FIT ADV Run Division</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[12px]">Women&apos;s Long-Sleeve Running Top</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">₹ 5 295</p>
            </div>
        </div>
        <div className="w-[100%] h-auto p-3 md:w-[300px] md:hover:shadow-xl">
            <Image src="/images/gearup4.png" alt="pic1"width={400} height={200} className="md:w-[250px] md:h-[250px]"></Image>
            <div className="flex justify-between p-3">
                <div className="flex flex-col">
                <h1  className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[12px]">Nike Fast</h1>
                <p className="text-gray-400 text-[12px] font-Helvectica-Neue font-medium md:text-[10px]">Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets</p>
                </div>
                <p className="text-myBlack text-[12px] font-Helvectica-Neue font-medium md:text-[15px]">₹ 3 795</p>
            </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Gear
