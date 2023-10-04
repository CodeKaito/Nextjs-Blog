"use client"

import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {
  const status = "not logged in"
  const [open, setOpen] = useState(false)

  return (
    <>
      {status === "not logged in"? (
        <Link href="/login" className='cursor-pointer hover:underline'>Login</Link>
      ) : (
        <>
          <Link className='hidden md:block' href="/write">Write</Link>
          <span className='hidden md:block cursor-pointer hover:underline'>Logout</span>
        </>
      )}
      <div 
        className='w-[20px] h-[16px] flex md:hidden flex-col justify-between cursor-pointer'
        onClick={() => setOpen(!open)}>
        <div className='w-100% h-[2px] bg-[--textColor]'></div>
        <div className='w-100% h-[2px] bg-[--textColor]'></div>
        <div className='w-100% h-[2px] bg-[--textColor]'></div>
      </div>
      {open && (
        <div className='absolute flex flex-col max-h-max max-w-max bg-white'>
          <div onClick={() => setOpen(!open)} className='font-bold text-right'>X</div>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
            {status === "not logged in"? (
            <Link href="/login" className='cursor-pointer hover:underline'>Login</Link>
            ) : (
            <>
            <Link className='hidden md:block' href="/write">Write</Link>
            <span className='hidden md:block cursor-pointer hover:underline'>Logout</span>
            <Link href="/">X</Link>
          </>
        )}
        </div>
      )}
    </>
  )
}

export default Login
