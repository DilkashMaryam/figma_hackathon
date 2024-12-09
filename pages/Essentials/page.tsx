import React from 'react'
import Image from 'next/image'

const Essentials = () => {
  return (
    <div className="w-[100%] mt-5 md:w-[100%]">
        <div className="flex flex-col">
        {/* Heading */}
      <h1 className="text-myBlack font-Helvetica-Neue font-medium p-2 text-[16px] md:text-[22px]">The Essentials</h1>
      {/* Images */}
      <div className="mt-6 relative md:mt-12 md:w-[100%] md:flex md:flex-row md:justify-evenly md:relative">
        {/* Image1 */}
      <div className="p-2">
      <Image src="/images/essentials1.png" alt='pic1' width={400} height={200}></Image>
      <button className="w-[50px] rounded-lg bg-background absolute md:absolute text-myBlack text-[12px] font-Helvetica-Neue bottom-[70%] left-6 md:bottom-[15%] md:left-20  hover:bg-black hover:text-background z-50">Men&apos;s</button>
      </div>
        {/* Image2 */}
        <div className="p-2">
      <Image src="/images/essentials2.png" alt='pic2' width={400} height={200}></Image>
      <button className="w-[70px] rounded-lg bg-background absolute text-myBlack text-[12px] font-Helvetica-Neue bottom-[40%] left-6 md:bottom-[15%] md:left-[40%] hover:bg-black hover:text-background z-50">Women&apos;s</button>
      </div>
       {/* Image2 */}
       <div className="p-2">
      <Image src="/images/essentials3.png" alt='pic3' width={400} height={200}></Image>
      <button className="w-[50px] rounded-lg bg-background absolute text-myBlack text-[12px] font-Helvetica-Neue  bottom-[5%] left-6 md:bottom-[15%] md:left-[70%] hover:bg-black hover:text-background z-50%">Kid&apos;s</button>
      </div>
      </div>
      </div>
      <div className="flex flex-col md:flex md:flex-row md:justify-evenly">
       <div className="gap-4 font-Helvetica-Neue space-y-4 mt-4">
        <h1 className="text-myBlack font-medium text-[15px]">Icons</h1>
        <p className="text-[#757575] font-medium text-[15px]">Air Force 1</p>
        <p className="text-[#757575] font-medium text-[15px]">Huarache</p>
        <p className="text-[#757575] font-medium text-[15px]">Air Max 90</p>
        <p className="text-[#757575] font-medium text-[15px]">Air Max 95</p>
       </div>
       <div className="gap-4 font-Helvetica-Neue space-y-4 mt-4">
        <h1 className="text-myBlack font-medium text-[15px]">Shoes</h1>
        <p className="text-[#757575] font-medium text-[15px]">All Shoes</p>
        <p className="text-[#757575] font-medium text-[15px]">Custom Shoes</p>
        <p className="text-[#757575] font-medium text-[15px]">Jordan Shoes</p>
        <p className="text-[#757575] font-medium text-[15px]">Running Shoes</p>
       </div>
       <div className="gap-4 font-Helvetica-Neue space-y-4 mt-4">
        <h1 className="text-myBlack font-medium text-[15px]">Clothing</h1>
        <p className="text-[#757575] font-medium text-[15px]">All Clothing</p>
        <p className="text-[#757575] font-medium text-[15px]">Modest Wear</p>
        <p className="text-[#757575] font-medium text-[15px]">Hoodies & Pullovers</p>
        <p className="text-[#757575] font-medium text-[15px]">Shirts & Tops</p>
       </div>
       <div className="gap-4 font-Helvetica-Neue space-y-4 mt-4">
        <h1 className="text-myBlack font-medium text-[15px]">Kid</h1>
        <p className="text-[#757575] font-medium text-[15px]">Infant & Toddler Shoes</p>
        <p className="text-[#757575] font-medium text-[15px]">Kid&apos;s Shoes</p>
        <p className="text-[#757575] font-medium text-[15px]">Kid&apos;s Jordan Shoes</p>
        <p className="text-[#757575] font-medium text-[15px]">Kid&apos;s Basketball Shoes</p>
       </div>

      </div>
    </div>
  )
}

export default Essentials
