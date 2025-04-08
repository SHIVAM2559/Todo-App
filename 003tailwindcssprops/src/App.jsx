import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-900 p-3'>hello this prashant singh</h1>
     <Card username='Hitesh'/>
     <Card />
     <Card />

    </>
  )
}

export default App
