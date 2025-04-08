import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState('olive')

  function changeColor(color){
    return setCount(color)
  }

  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:count}} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2' >
          <button onClick={()=> changeColor('red')} className='outline-none px-4 py-1 rounded-full text-white bg-red-400 shadow-lg'>
            test </button>
            <button onClick={()=> changeColor('green')} className='outline-none px-4 py-1 rounded-full text-white bg-green-400 shadow-lg'>
            test </button>
            <button onClick={()=> changeColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white bg-yellow-400 shadow-lg'>
            test </button>
            <button onClick={()=> changeColor('pink')} className='outline-none px-4 py-1 rounded-full text-white bg-pink-400 shadow-lg'>
            test </button>
            <button onClick={()=> changeColor('black')} className='outline-none px-4 py-1 rounded-full text-white bg-black-400 shadow-lg'>
            test </button>      
            
        </div>
      </div>

    </div>
  )
}

export default App
