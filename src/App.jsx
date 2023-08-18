import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react';
import CoffeeCard from './components/CoffeeCard';

function App() {
  const loadCoffee = useLoaderData();
  console.log(loadCoffee);
  const [coffee, setCoffee] = useState(loadCoffee)
  return (
    <div>
      <h1 className='text-3xl text-purple-900 font-semibold text-center
       mt-10'>Cold Hot Coffee {coffee.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 p-20 gap-8'>
        {
          coffee.map(cof => <CoffeeCard
          key={cof._id}
          coffee = {cof}
          >

          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
