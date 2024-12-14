import React from 'react'
import Image from "next/image";

export default function Proof() {
  return (
    <div className=' font-poppins h-[1080px] flex flex-col-reverse lg:flex-row justify-between items-center lg:my-32 mx-32'>

    <div className="text w-[350px] sm:w-[450px] md:w-[500px] lg:w-2/3 flex flex-col gap-6">
      <div className="aboutus font-semibold max-lg:text-center text-purple-400">
        The Fake World
      </div>
      <div className="lf text-4xl lg:text-6xl font-poppins max-lg:text-center font-bold">The 1% Lifestyle is inside yourself.</div>
      <div className="description font-poppins max-lg:text-center font-semibold text-gray-300">The happiness of those who want to be popular depends on others; the happiness of those who seek pleasure fluctuates with moods outside their control; but the happiness of the wise grows out of their own free acts - Marcus Aurelius</div>
      <div className="center flex max-lg:justify-center max-sm:items-center">
      <div className="buttons  grid grid-cols-2 xl:grid-cols-3 w-2/3">
        <button className='py-[12px] px-[20px] m-1  rounded-[10px] duration-300 hover:opacity-75 h-fit font-semibold bg-[#3D73FF1A] text-purple-400 flex items-center gap-2 text-xs md:text-sm lg:text-base'>Intelligence</button>
        <button className='py-3 px-5 m-1  rounded-[10px] duration-300 hover:opacity-75 h-fit font-semibold bg-[#3D73FF1A] text-purple-400 flex items-center gap-2 text-xs md:text-sm lg:text-base'>Stoicism</button>
        <button className='py-3 px-5 m-1  rounded-[10px] duration-300 hover:opacity-75 h-fit font-semibold bg-[#3D73FF1A] text-purple-400 flex items-center gap-2 text-xs md:text-sm lg:text-base'>Contentment</button>
        <button className='py-3 px-5 m-1  rounded-[10px] duration-300 hover:opacity-75 h-fit font-semibold bg-[#3D73FF1A] text-purple-400 flex items-center gap-2 text-xs md:text-sm lg:text-base'>Humbleness</button>
        <button className='py-3 px-5 m-1  rounded-[10px] duration-300 hover:opacity-75 h-fit font-semibold bg-[#3D73FF1A] text-purple-400 flex items-center gap-2 text-xs md:text-sm lg:text-base'>Wisdom</button>
        <button className='py-3 px-5 m-1  rounded-[10px] duration-300 hover:opacity-75 h-fit font-semibold bg-[#3D73FF1A] text-purple-400 flex items-center gap-2 text-xs md:text-sm lg:text-base'>Happiness</button>
      </div>
      </div>
    </div>

    <div className="img w-[320px] h-[466px] sm:w-[480px] sm:h-[700px] lg:w-[320px] lg:h-[466px] xl:w-[480px] xl:h-[700px]">
      <Image className=''
      src="/about-us.webp"
      width={480}
      height={700}
      alt="Logo"
      objectFit='contain'
      />

    </div>



    </div>
  )
}
