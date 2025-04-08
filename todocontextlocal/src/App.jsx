import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <div
  className='bg-red-200'
  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, architecto id?</div>
    </>
  )
}

export default App
