import React from 'react'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>

        {/* Card */}
        <div className='rounded-xl relative'>

            {/* Overlay */}
            <div className='absolute w-full h-full rounded-xl text-white bg-black/60 flex flex-col justify-between'>
                <div className='mt-2'>
                <p className=' font-bold text-2xl px-2 pt-4'>Pheobe's Dineout</p>
                <p>8/16 - Boulevard Avenue</p>
                </div>
                <button className='max-w-[160px] self-center m-2 bg-white border-white text-orange-600 font-bold mb-7'> Order Now </button>
            </div>

            <img className='max-h-[170px] md:max-h-[230px] w-full object object-cover rounded-xl'
                src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80' 
                alt='/'
            />

        </div>

    </div>
  )
}

export default HeadlineCards