import React from 'react'
import { FoodData } from '../data/FoodData'
import { useState } from 'react';

export const FoodCards = () => {
    const [foods, setFoods] = useState(FoodData);

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center pb-8'>Top Rated Menu Items</h1>

        {/* Filter Row */}
        <div className='flex flex-col md:flex-row justify-evenly'>
            {/* Filter Type */}
            <div className='pb-4'>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='md:mx-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button className='md:mx-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button className='md:mx-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button className='md:mx-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button className='md:mx-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            {/* Filter Price */}
            <div >
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>

        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5'>
            {foods.map((item, index) => {
                return <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            })}
        </div>

    </div>
  )
}
