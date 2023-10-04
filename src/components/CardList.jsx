import React from 'react'
import { Card, Pagination } from '.'

const CardList = () => {
  return (
    <div className='w-6/10'>
      <h1 className='mt-10 mb-5 text-2xl font-bold'>Recent Posts</h1>
        <div className=''>
          <Card />
          <Card />
        </div>
      <Pagination />
    </div>
  )
}

export default CardList
