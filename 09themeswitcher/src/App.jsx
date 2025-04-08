import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn.jsx';
import Card from './components/Card';
import { ThemeProvider } from './context/theme';

function App() {
  const [themeMode , seThemeMode]=useState('light')

  const darkTheme=()=>{
    seThemeMode('dark')
  }

  const lightTheme=()=>{
    seThemeMode('light')
  }

  

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}} >
   
       <div className="flex flex-wrap min-h-screen bg-amber-300 items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
     
    </ThemeProvider>
  )
}

export default App
