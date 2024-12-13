"use client"
import Image from "next/image";
import Navbar from "./components/navbars";
import Hero from "./components/Hero";
import Proof from "./components/Proof"
import Quotes from "./components/Quotes"
import End from "./components/End"


export default function Home() {
  
  return (

    <div className=" min-h-screen font-poppins gap-16 m-0 p-0 bg-black relative z-0  overflow-hidden"  >
      <Image className="flex absolute animate-spin [animation-duration:40s] right-0 top-24 -z-10"
    
      unoptimized
      src="/circle.gif"
      // src="/abstract-bottom.gif"
      width={550}
      height={550}
      alt="Logo"
      />

    <Navbar />
    <Hero />
    <Proof />
    <Quotes />
    <End />

    <Image className="flex absolute right-56 bottom-0 -z-10"
    
      unoptimized
      src="/points.gif"
      // src="/abstract-bottom.gif"
      width={1000}
      height={1000}
      alt="Logo"
      />
    
      
      <div className="last">Copyright © 2024 Xnow / x.com/0xXnow</div>

    </div>
    
  );
}
