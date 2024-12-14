"use client"
import React from 'react'
import { useState } from 'react'
import './navbar.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [navOpen, setnavOpen] = useState(false);
  return (
    <div className='nav font-poppins'>
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
    
            <a href='https://x.com/zaidkamado'>
          <button className="logo flex items-center group">
            <Image className=' rotate-90'
            src="/vercel.svg"
            width={45}
            height={45}
            alt="Logo"
            />
            
            <div className="text-white font-poppins text-4xl font-bold ml-4 ">
              Xn<span className="group-hover:text-cyan-400 transition-all duration-500">0</span>w
            </div>
            </button>
            </a>
          </div>
          <div className="menu-toggle" onClick={() => {setnavOpen(!navOpen)}}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span className={navOpen ? "lineBottom spin" : "lineBottom"}></span>
            </div>
          </div>
        </div>
        <div className="nav-overlay" style={{
          top: navOpen ? "0" : "-100%",
          transitionDelay: navOpen ? "0.8s" : "0s",
        }}
        >
          <ul className="nav-links">
            <li className="nav-item">
              <Link href="https://x.com/zaidkamado" onClick={() => {setnavOpen(!navOpen)}}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "0.8s" : "0s",
              }}
              
              
              
              >Home</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link href="https://x.com/zaidkamado" onClick={() => {setnavOpen(!navOpen)}}

style={{
  top: navOpen ? "0" : "120px",
  transitionDelay: navOpen ? "0.9s" : "0s",
}}
               
              
              >Projects</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link href="https://x.com/zaidkamado" onClick={() => {setnavOpen(!navOpen)}}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1s" : "0s",
              }}>About</Link>
              <div className="nav-item-wrapper"></div>
            </li>
            <li className="nav-item">
              <Link href="https://x.com/zaidkamado" onClick={() => {setnavOpen(!navOpen)}}
              style={{
                top: navOpen ? "0" : "120px",
                transitionDelay: navOpen ? "1.1s" : "0s",
              }}>Contact</Link>
              <div className="nav-item-wrapper"></div>
            </li>
          </ul>
          <div className="nav-footer">
            <div className="location" style={{
              bottom: navOpen ? "0" : "-20px",
              opacity: navOpen ? "1" : "0",
              transitionDelay: navOpen ? "1.2s" : "0s",
            }}>
              <span>Dubai.0x</span>
            </div>
            <div className="nav-social-media">
              <a href='https://x.com/zaidkamado' style={{
              bottom: navOpen ? "0" : "-20px",
              opacity: navOpen ? "1" : "0",
              transitionDelay: navOpen ? "1.3s" : "0s",
            }}>X</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
