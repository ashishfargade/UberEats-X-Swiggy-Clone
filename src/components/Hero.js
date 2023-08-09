import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 text-left max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl float-left sm: text-5xl md: text-6xl lg:text-7xl font-bold'> Good <span className='text-orange-600'> Food </span></h1>
                <h1 className='px-4 text-4xl text-orange-600 sm: text-5xl md: text-6xl lg:text-7xl font-bold'> Fast <span className='text-gray-200'> Delivery </span></h1>
            </div>

            <img src='https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg' 
                alt='/'
                className='w-full max-h-[500px] object-cover'
            />
            
        </div>
    </div>
  )
}
