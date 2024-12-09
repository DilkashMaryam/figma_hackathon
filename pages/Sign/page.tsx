import React from 'react'
import Image from 'next/image'

const Sign = () => {
  return (
    <div className="mt-10 w-[100%]">
        <div className="w-[80%] h-[700px] m-5 shadow-xl flex flex-col justify-center items-center gap-2 p-2 md:w-[40%] md:ml-80 md:mt-24">
        <Image src="/images/nikelogo.png" alt='logo' width={50} height={50}></Image>
        <h1 className="font-Helvetica-Neue font-bold text-[26px] text-center text-myBlack md:w-[180px] md:text-[18px] md:font-Helvetica-Neue md:mt-2">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
     
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

      {/* <!-- Checkbox --> */}
      <div className='md:flex md:flex-row md:justify-between'>
      <div className="flex items-center mb-4">
        <input 
          type="checkbox" 
          id="keepMeSignedIn" 
          className="h-4 w-4 text-[#8D8D8D] border-gray-300 rounded focus:ring-blue-500" placeholder='j'
        />
        <label className="ml-2 text-sm text-gray-600">Keep me signed in</label>
      </div>

      {/* <!-- Forget Password --> */}
      <div className="text-right mb-4">
        <a href="#" className="text-sm text-[#BCBCBC] hover:underline">Forgotten your password?</a>
      </div>
      </div>
      {/* <!-- Privacy Policy --> */}
      <p className="text-xs text-[#8D8D8D] mb-6 font-Helvetica-Neue font-normal md:text-[12px] md:w-[270px] md:text-center md:ml-20">
        By logging in, you agree to Nike&apos;s <a href="#" className="text-[#8D8D8D] underline">Privacy Policy</a> and <a href="#" className="text-[#8D8D8D] underline">Terms of Use</a>.
      </p>

      {/* <!-- Sign-In Button --> */}
      <button 
        type="submit" 
        className="w-full bg-myBlack text-white font-medium py-2 rounded-lg hover:bg-gray-400 focus:ring-2 focus:bg-gray-400 focus:outline-none md:rounded-sm"
      >
        Sign In
      </button>
    </form>

    {/* <!-- Not a Member --> */}
    <p className="text-sm text-[#8D8D8D] text-center mt-6">
      Not a Member? <a href="#" className="text-myBlack font-medium underline hover:text-[#8D8D8D]">Join Us</a>
    </p>
  </div>
        </div>
      
    </div>
  )
}

export default Sign
