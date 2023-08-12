import { useState } from 'react';
import './App.css';
import HeadlineCards from './components/HeadlineCards';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RestaurantCards } from './components/RestaurantCards';
import {NewButton} from './components/NewButton'
import { FoodCards } from './components/FoodCards';

function App() {

  const [menu, setMenu] = useState(true);

  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <HeadlineCards />
      
      <FoodCards/>
      
    </div>
  );
}

export default App;
