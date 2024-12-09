import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-[100%] md:w-[100%] md:flex md:flex-col md:items-center">
      <div className="bg-[#E5E5E5] w-[100%] h-[40px] mt-2 text-center pt-2 md:w-[100%] md:h-[50px] md:mt-[100px]">
      <h1 className="text-myBlack text-[10px] font-Helvetica-Neue font-medium md:font-Helvetica-Neue md:text-[15px]">Hello Nike App</h1>
      <p className="text-myBlack text-[8px] font-Helvetica-Neue font-refular md:font-Helvetica-Neue md:text-[11px]">Download the app to access everything Nike. Get Your Great</p>
    </div>
      <Image src="/images/hero.png" alt="hero" width={600} height={700} className="md:w-[90%] md:h-[700px]"></Image>
      <div className="flex flex-col justify-center items-center md:mt-6 md:w-[520px] md:h-[300px]">
        <h1 className="text-myBlack text-[10px] font-Helvetica-Neue font-medium md:text-[15px]">First Look</h1>
        <h1 className="text-myBlack text-[16px] font-Helvetica-Neue font-medium md:text-[56px]">Nike Air Max Pulse</h1>
        <p className="text-myBlack text-[10px] font-Helvetica-Neue font-medium text-center md:text-[15px] md:text-center">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        —designed to push you past your limits and help you go to the max.</p>
        <div className="flex flex-col gap-3 md:flex md:flex-row md:gap-4 md:mt-4">
          <button className="bg-myBlack text-background rounded-xl p-2 w-[200px] h-[40px] hover:bg-slate-300 hover:text-myBlack md:w-[100px] md:rounded-full">Notify Me</button>
          <button className=" bg-myBlack text-background rounded-xl p-2 w-[200px] h-[40px] hover:bg-slate-300 hover:text-myBlack md:w-[150px] md:rounded-full">Shop Air Max</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
