import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className=''>
      <h1 className='mt-10 mb-5 text-4xl font-bold '>Popular Categories</h1>
      <div className='flex flex-wrap justify-between gap-4'>
        <Link href={"/blog?cat=style"} className='category style'>
          <div className=''>Style</div>
        </Link>
        <Link href={"/blog?cat=style"} className='category style'>
          <div className=''>Fashion</div>
        </Link>
        <Link href={"/blog?cat=style"} className='category style'>
          <div className=''>Coding</div>
        </Link>
        <Link href={"/blog?cat=style"} className='category style'>
          <div className=''>Nature</div>
        </Link>
        <Link href={"/blog?cat=style"} className='category style'>
          <div className=''>Crafting</div>
        </Link>
        <Link href={"/blog?cat=style"} className='category style'>
          <div className=''>Art</div>
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
