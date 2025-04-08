import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';


import App from './App.jsx'

const reactElement={
    type:'a',
    props :{
        href: "https://google.com",
        target: '_blank'
    },
    children : 'click me to visit google'
}

function MyApp(){
    return (
        <div>
            <h1>custom react app</h1>
        </div>
    )
}

const AnotherElement =(
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const areactElement=React.createElement(
    'a',
    {href: 'https://google.com' , target:"_blank"},
    'click tu visit google'
)


createRoot(document.getElementById('root')).render(
  
    <App />
  
)
