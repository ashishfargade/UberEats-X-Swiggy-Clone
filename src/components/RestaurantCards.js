import React from 'react'
import { CardLayout } from './CardLayout';
import { restaurantData } from '../data/Restaurants';

export const RestaurantCards = () => {
  return (
    <div>
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      
        {restaurantData.map((item)=> {
            return CardLayout(item);
        })}
    </div>
    </div>
  )
}
