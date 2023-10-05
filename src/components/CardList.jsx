import React from 'react'
import { Card, Pagination } from '.'

const CardList = () => {
  return (
    <div className='w-4/5'>
      <h1 className='mt-6 mb-5 text-2xl font-semibold'>Recent Posts</h1>
        <div className=''>
          <Card />
          <Card />
        </div>
      <Pagination />
    </div>
  )
}

export default CardList
