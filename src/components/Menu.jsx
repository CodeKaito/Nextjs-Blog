import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className='w-1/5' >
      <h2 className='text-gray-500 font-normal text-base'>What's hot</h2>
      <h1 className='text-2xl font-semibold'>Most Popular</h1>
      <div className='mt-3'>
        <Link href="" className='flex items-center gap-[20px]'>

        <div className='flex flex-col gap-1'>
          <span className='p-1 pr-3 pl-3 w-max items-center justify-center rounded-lg font-semibold text-color-white bg-[var(--softBg)] uppercase text-xs'>Nature</span>
          <p className='text-sm font-semibold text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>          
          <div className='text-base'>
            <span className='text-xs'>John Doe</span>
            <span className='text-xs text-gray-400'> - 10.03.2023</span>
          </div>
        </div>
        </Link>
        <Link href="" className='flex items-center gap-[20px]'>

        <div className='flex flex-col gap-1'>
          <span className='p-1 pr-3 pl-3 w-max items-center justify-center rounded-lg font-semibold text-color-white bg-[var(--softBg)] uppercase text-xs'>Nature</span>
          <p className='text-sm font-semibold text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>          
          <div className='text-base'>
            <span className='text-xs'>John Doe</span>
            <span className='text-xs text-gray-400'> - 10.03.2023</span>
          </div>
        </div>
        </Link>
        <Link href="" className='flex items-center gap-[20px]'>

        <div className='flex flex-col gap-1'>
          <span className='p-1 pr-3 pl-3 w-max items-center justify-center rounded-lg font-semibold text-color-white bg-[var(--softBg)] uppercase text-xs'>Nature</span>
          <p className='text-sm font-semibold text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>          
          <div className='text-base'>
            <span className='text-xs'>John Doe</span>
            <span className='text-xs text-gray-400'> - 10.03.2023</span>
          </div>
        </div>
        </Link>
      </div>
      <h2 className='mt-10 text-gray-500 font-normal text-base'>Discover by topic</h2>
      <h1 className='text-2xl font-semibold'>Categories</h1>
        <div>
          <Link href='/blog?cat=style' className=''>Styles</Link>
        </div>
      <h2 className='mt-10 text-gray-500 font-normal text-base'>Choosen by the editor</h2>
      <h1 className='text-2xl font-semibold'>Editors Pick</h1>
      <div className='mt-3'>
        <Link href="" className='flex items-center gap-[20px]'>
        <div className='w-1/5 aspect-square relative'>
          <Image src='/p1.jpeg' fill className='rounded-full border-2 border-gray-400 object-cover ' alt=''/>
        </div>
        <div className='w-3/5 flex flex-col gap-1'>
          <span className='p-1 pr-3 pl-3 w-max items-center justify-center rounded-lg font-semibold text-color-white bg-[var(--softBg)] uppercase text-xs'>Nature</span>
          <p className='text-sm font-semibold text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>          
          <div className='text-base'>
            <span className='text-xs'>John Doe</span>
            <span className='text-xs text-gray-400'> - 10.03.2023</span>
          </div>
        </div>
        </Link>
        <Link href="" className='flex items-center gap-[20px]'>
        <div className='w-1/5 aspect-square relative'>
          <Image src='/p1.jpeg' fill className='rounded-full border-2 border-gray-400 object-cover ' alt=''/>
        </div>
        <div className='w-3/5 flex flex-col gap-1'>
          <span className='p-1 pr-3 pl-3 w-max items-center justify-center rounded-lg font-semibold text-color-white bg-[var(--softBg)] uppercase text-xs'>Nature</span>
          <p className='text-sm font-semibold text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>          
          <div className='text-base'>
            <span className='text-xs'>John Doe</span>
            <span className='text-xs text-gray-400'> - 10.03.2023</span>
          </div>
        </div>
        </Link>
        <Link href="" className='flex items-center gap-[20px]'>
        <div className='w-1/5 aspect-square relative'>
          <Image src='/p1.jpeg' fill className='rounded-full border-2 border-gray-400 object-cover ' alt=''/>
        </div>
        <div className='w-3/5 flex flex-col gap-1'>
          <span className='p-1 pr-3 pl-3 w-max items-center justify-center rounded-lg font-semibold text-color-white bg-[var(--softBg)] uppercase text-xs'>Nature</span>
          <p className='text-sm font-semibold text-[var(--softTextColor)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>          
          <div className='text-base'>
            <span className='text-xs'>John Doe</span>
            <span className='text-xs text-gray-400'> - 10.03.2023</span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
