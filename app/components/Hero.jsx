import React from 'react'

function Hero() {
  return (
    <div className="main flex flex-col h-[780px] max-md:gap-5 font-poppins mx-14 sm:my-0 my-32 ">
      <div className="title font-bold text-5xl sm:text-7xl text-nowrap md:text-8xl lg:text-9xl mt-48">
          <div className='block'>
          Your <span className='text-cyan-400'><span className='hover:text-white transition-all duration-150'>M</span><span className='hover:text-white transition-all duration-150'>i</span><span className='hover:text-white transition-all duration-150'>n</span><span className='hover:text-white transition-all duration-150'>d</span></span>
          </div>
          <div className='block ml-1'>
          is all you got.
          </div>
      </div>
      <div className="cta w-[290px] sm:w-[400px] md:w-[500px] mt-3+ sm:mt-8 ml-2">
        <div className="font-semibold font-poppins  sm:text-base text-slate-300 mb-4">Investing on your self and getting exposed to the information that being hidden to average humans is the way to win, and Win BIG!</div>
        <a href='https://x.com/0xXnow'>
        <button className='bg-white font-poppins text-black px-8 py-3 rounded-md font-bold  hover:bg-cyan-400 hover:text-white transition-all duration-500 hover:translate-x-1 hover:translate-y-1'>
          Learn More
        </button>
        </a>
      </div>



    </div>

  )
}

export default Hero