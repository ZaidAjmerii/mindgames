import React from 'react'
import Image from 'next/image'

export default function Quotes() {
  return (
    <div className="main lg:h-[900px] h-[1500px] md:h-[1000px] font-poppins flex flex-col justify-center items-center">
      <div className="great font-semibold text-2xl mb-3 text-purple-400">greatest minds of all times</div>
      <div className="free text-center text-4xl  sm:text-6xl font-bold">Become Free, Become Better</div>
      <div className="w-11/12 mt-8  md:grid md:grid-cols-3">

        <div className="1 flex flex-col justify-center items-center">

        <div className="container bg-[#6d6565] mt-2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] xl:h-96 xl:w-96 rounded-2xl p-6 flex justify-center items-center">
        
        <Image className=' rounded-2xl object-cover w-full h-full'
          src="/mar.jpeg"
          width={250}
          height={250}
          alt="Logo"
          />

        </div>

        <div className="font-poppins container flex flex-col justify-center items-center bg-[#121212] mt-2  md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] xl:h-96 xl:w-96 rounded-2xl text-purple-400 text-lg md:text-xl lg:text-2xl font-semibold p-6">
        “You have power over your mind - not outside events. Realize this, and you will find strength”  <span className='text-white'>~ Marcus Aurelius, Meditations</span>
        </div>

        </div>







        <div className="2 flex flex-col justify-center items-center">
        <div className="container bg-[#6d6565] mt-2 md:w-[250px] w-[200px] h-[200px] md:h-[250px] lg:w-[310px] lg:h-[310px] xl:h-96 xl:w-96 rounded-2xl p-6">
        <Image className=' rounded-2xl object-cover w-full h-full'
          src="/pm.jpg"
          width={250}
          height={250}
          alt="Logo"
          />


        </div>
        <div className="font-poppins container flex flex-col justify-center items-center bg-[#121212] mt-2 md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] xl:h-96 xl:w-96 rounded-2xl text-purple-400 text-lg md:text-xl lg:text-2xl font-semibold p-6">“Richness is not having many belongings, but richness is contentment of the soul”  <span className='text-white'>~ Prophet Muhammad (PBUH)</span></div>

        </div>



        <div className="3 flex flex-col justify-center items-center">

        <div className="container bg-[#6d6565] mt-2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] xl:h-96 xl:w-96 rounded-2xl p-6">
        <Image className=' rounded-2xl object-cover w-full h-full'
          src="/epic.jpg"
          width={250}
          height={250}
          alt="Logo"
          />


        </div>

        <div className="font-poppins container flex flex-col justify-center items-center bg-[#121212] mt-2 md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] xl:h-96 xl:w-96 rounded-2xl text-purple-400 text-lg md:text-xl lg:text-2xl font-semibold p-6">“He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has”        <span className='text-white'>~ Epictetus, ancient Greek philosopher</span></div>

        </div>





        
        
        

      </div>
    </div>
  )
}
