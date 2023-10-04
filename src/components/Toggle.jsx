"use client"

import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

const Toggle = () => {

  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
        onClick={toggle} 
        className='hidden md:flex relative w-[40px] h-[20px] items-center justify-between rounded-full cursor-pointer'
        style={theme === "dark"
        ? { backgroundColor: "white"} 
        : { backgroundColor: "#0f172a"}
        }>
      <Image src="/moon.png" width={14} height={14} alt="moon" />
      <div className="absolute w-[15px] h-[15px] rounded-full transition ease-in-out duration-500 delay-150 hover:-translate-y-1 hover:scale-120 hover:bg-indigo-500" 
        style={theme === "dark"
        ? { left: 1, background: "#0f172a" }
        : { right: 1, background: "white" }
        }></div>
      <Image src="/sun.png" width={14} height={14} alt="moon" />
    </div>
  )
}

export default Toggle
