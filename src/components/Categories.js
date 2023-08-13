import React from 'react'
import { categories } from '../data/FoodData'

export const Categories = () => {
  return (
    <div>
        <p className='text-orange-600 font-bold text-4xl pb-4'>Categories</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5'>
                {categories.map((items, key)=> {
                    return <div className='flex flex-auto justify-evenly bg-slate-200 rounded-lg hover:scale-105 duration-300 shadow-lg'>
                        <img className='flex justify-between' src={items.image}/>
                        <p className='self-center font-semibold pr-4'>{items.name}</p>
                    </div>
                })}
        </div>
    </div>
  )
}
