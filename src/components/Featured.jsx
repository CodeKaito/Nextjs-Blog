import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className=''>
      <h1 className='text-8xl mt-10'>
        Hey, <b className='text-[var(--softColor)]'>I'm Kaito</b> Discover my stories and creative ideas.
      </h1>
      <div className='flex items-center gap-5 mt-6'>
        <div className='flex-1 relative h-[500px]'>
          <Image className="object-cover" src="/p1.jpeg" fill alt="" />
        </div>
        <div className='flex-1 flex flex-col'>
          <h1 className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna vitae arcu venenatis ultrices. Vestibulum luctus mauris eu ante convallis, vel lacinia lacus eleifend. </h1>
          <p className='text-md font-md mt-5 text-[--softTextColor]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna vitae arcu venenatis ultrices. Vestibulum luctus mauris eu ante convallis, vel lacinia lacus eleifend. Integer non justo ac justo dapibus fermentum. Morbi convallis dolor nec arcu laoreet, id commodo odio cursus. Sed ullamcorper, urna nec bibendum facilisis, lectus sapien luctus nunc, eu suscipit lectus sapien in metus. Aliquam vel augue eget quam luctus consectetur. Duis sollicitudin mauris ut vehicula cursus.</p>
          <button className='p-4 mt-5 hover:underline rounded-md bg-[var(--inverseBg)]'>
            <p className='text-[var(--inverseColor)]'>Read More</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
