import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className="w-[100%] mt-4 md:w-[100%] md:flex md:flex-col md:items-center">
    <Image src="/images/featured.png" alt="hero" width={600} height={700} className="md:w-[90%] md:h-[700px]"></Image>
    <div className="flex flex-col justify-center items-center mt-5 md:mt-6 md:w-[900px] md:h-[300px]">
      <h1 className="text-myBlack text-[16px] font-Helvetica-Neue font-medium md:text-[56px]">STEP INTO WHAT FEELS GOOD</h1>
      <p className="text-myBlack text-[10px] font-Helvetica-Neue font-medium text-center md:text-[15px] md:text-center">Cause everyone should know the feeling of running in that perfect pair.</p>
     <button className="bg-myBlack text-background rounded-md mt-4 p-1 w-[150px] h-[30px] hover:bg-slate-300 hover:text-myBlack md:w-[150px] md:rounded-full">Find Your Shoe</button>
      
    </div>
  </div>
      
  )
}

export default Featured