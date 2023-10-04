import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Login, Toggle } from '.'

const Navbar = () => {
  return (
    <div className='flex h-100 items-center justify-between'>
      <div className='hidden lg:flex gap-1 flex-1'>
        <Image src="/facebook.png" width={24} height={24} alt="facebook" className='hidden lg:block' />
        <Image src="/instagram.png" width={24} height={24} alt="instagram" className='hidden lg:block' />
        <Image src="/tiktok.png" width={24} height={24} alt="tiktok" className='hidden lg:block' />
        <Image src="/youtube.png" width={24} height={24} alt="youtube" className='hidden lg:block' />
      </div>

      <div className='flex-1 lg:text-center sm:text-left sm:text-xl xl:text-4xl md:text-2xl font-bold'>.kaitoblog</div>

      <div className='flex flex-1 gap-4 justify-end xl:text-md text-sm md:gap-2'>
        <Toggle />
        <Link href="/" className='hidden md:block'>Homepage</Link>
        <Link href="/" className='hidden md:block'>Contact</Link>
        <Link href="/" className='hidden md:block'>About</Link>
        <Login />
      </div>
    </div>
  )
}

export default Navbar
