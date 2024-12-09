import React from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'

const Member = () => {
  return (
    <div className="mt-10 w-[100%]">
        <div className="w-[90%] h-[900px] m-5 shadow-xl flex flex-col justify-center items-center gap-2 p-2 md:w-[40%] md:ml-80 md:mt-24">
        <Image src="/images/nikelogo.png" alt='logo' width={50} height={50}></Image>
        <h1 className="font-Helvetica-Neue font-bold text-[16px] text-center text-myBlack md:w-[180px] md:text-[18px] md:font-Helvetica-Neue md:mt-2">BECOME A NIKE MEMBER</h1>
        <p className="font-Helvetica-Neue font-bold text-[12px] text-center text-myBlack md:w-[180px] md:text-[14px] md:font-Helvetica-Neue md:mt-2">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
     
    <div className="w-[100%] p-8 md:p-10">
    <form>
      {/* <!-- Email Input --> */}
      <div className="mb-4">
        <input 
          type="email" 
          id="email" 
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-sm" 
          placeholder="Enter your email" 
          required
        />
      </div>
      
      {/* <!-- Password Input --> */}
      <div className="mb-4">
        <input 
          type="password" 
          id="password" 
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-sm" 
          placeholder="Enter your password" 
          required
        />
      </div>
        {/* <!-- First Name Input --> */}
      <div className="mb-4">
        <input 
          type="firstname" 
          id="firstname" 
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-sm" 
          placeholder="First Name" 
          required
        />
      </div>

       {/* <!-- Last Name Input --> */}
       <div className="mb-4">
        <input 
          type="lastname" 
          id="lastname" 
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-sm" 
          placeholder="Last Name" 
          required
        />
      </div>

       {/* <!-- DOB Input --> */}
       <div className="mb-4">
        <input 
          type="text" 
          id="text" 
          className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-sm" 
          placeholder="Date of Birth" 
          required
        />
      </div>

      <p className="font-Inter font-normal text-[16px] text-center text-[#8D8D8D] md:text-[11px] md:font-Helvetica-Neue md:mt-2">Get a Nike Member Reward every year on your Birthday.</p>

      {/* <!-- Location --> */}
      <div className="justify-between items-center mb-4 flex flex-row w-full mt-1 px-4 text-[#8D8D8D] py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:rounded-sm md:w-full md:justify-between">
        <h1>India</h1>
        <IoIosArrowDown/>
      </div>

      
    {/* <!-- Gender --> */}
    <div className='flex flex-col gap-3 md:flex md:flex-row md:justify-evenly'>
       <button className='font-Inter font-normal text-[13px] p-2 text-[#8D8D8D] w-[150px] border-2 border-gray-300 rounded-lg hover:bg-black hover:text-white md:rounded-sm'>Male</button>
       <button className='font-Inter font-normal text-[13px] p-2 text-[#8D8D8D] w-[150px] border-2 border-gray-300 rounded-lg hover:bg-black hover:text-white md:rounded-sm'>Female</button>
      </div>

      {/* <!-- Checkbox --> */}
      <div className='md:flex md:flex-row md:justify-between md:mt-2'>
      <div className="flex items-center mb-4">
        <input 
          type="checkbox" 
          id="SignUp" 
          className="h-4 w-4 text-[#8D8D8D] border-gray-300 rounded focus:ring-blue-500" placeholder='j'
        />
        <label className="ml-2 text-[11px] font-Inter text-[#8D8D8D] w-[250px]">Sign up for emails to get updates from Nike on products, offers and your Member benefits</label>
      </div>
      </div>

      {/* <!-- Privacy Policy --> */}
      <p className="text-xs text-[#8D8D8D] mb-6 font-Inter font-normal md:text-[12px] md:w-[270px] md:text-center md:ml-20">
      By creating an account, you agree to Nike&apos;s <a href="#" className="text-[#8D8D8D] underline">Privacy Policy</a> and <a href="#" className="text-[#8D8D8D] underline">Terms of Use</a>.
      </p>

      {/* <!-- Sign-In Button --> */}
      <button 
        type="submit" 
        className="w-full bg-myBlack text-white font-Inter font-medium py-2 rounded-lg hover:bg-gray-400 focus:ring-2 focus:bg-gray-400 focus:outline-none md:rounded-sm"
      >
        JOIN US
      </button>
    </form>

    {/* <!-- Not a Member --> */}
    <p className="text-sm text-[#8D8D8D] text-center mt-6 font-Inter">
      Already a Member? <a href="#" className="text-myBlack font-medium underline hover:text-[#8D8D8D]">Sign in.</a>
    </p>
  </div>
        </div>
      
    </div>
  )
}

export default Member
