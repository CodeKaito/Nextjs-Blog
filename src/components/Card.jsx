import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='flex mt-3 mb-10 gap-10'>
        <div className='flex-1 h-[500px] relative'>
            <Image src="/p1.jpeg" fill alt="Card image cap" className='object-cover' />
        </div>
        <div className='flex-1'>
            <div className='flex'>
                <span className='text-gray-400'>11.02.2023 </span>
                <span className='uppercase text-gray-300'> - Nature</span>
            </div>
            <h1 className='text-xl font-bold mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <p className='text-md font-extralight mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et urna vitae arcu venenatis ultrices. Vestibulum luctus mauris eu ante convallis, vel lacinia lacus eleifend. Integer non justo ac justo dapibus fermentum. Morbi convallis dolor nec arcu laoreet, id commodo odio cursus. Sed ullamcorper, urna nec bibendum facilisis, lectus sapien luctus nunc, eu suscipit lectus sapien in metus. Aliquam vel augue eget quam luctus consectetur. Duis sollicitudin mauris ut vehicula cursus.
            </p>
            <Link href="" className=''>
                <button className='mt-1 justify-center hover:bg-slate-500 rounded-md'>...Read More</button>
            </Link>
        </div>
    </div>
  )
}

export default Card
