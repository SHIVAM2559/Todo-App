import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'

function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom]=useState('USD')
  const [to,setTo]=useState('INR')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  // console.log(options);

  const convert = () => {
    // console.log(`i am writting: ${currencyInfo} - ${currencyInfo[to]}`);
    
    if (!currencyInfo || !currencyInfo[to]) {
      alert("Conversion rates not available");
      return;
    }
    setConvertedAmount(amount * currencyInfo[to]);
  };
  

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  


  

  return (
    <>
    
      <div className='w-screen min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat'
      style={{backgroundImage: 'url(https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'}}
      >
       <div className='w-full'>
       <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30' >
       <form onSubmit={(e)=>{
        e.preventDefault()
        convert()
       }}>
        <div className='w-full mb-1' >
          <InputBox 
          label="from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectedCurrency={from}
          />
        </div>
        
        <div className='relative w-full h-0.5' >
          <button
          className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md !bg-blue-600 text-black px-2 py-0.5'
          onClick={swap}
          >Swap</button>
          
        </div>
        <div className='w-full mb-1' >
          <InputBox 
          label="To"
          currencyOptions={options}
          amount={convertedAmount}
          onCurrencyChange={(currency)=> setTo(currency)}
          selectedCurrency={to}
          amountDisabled={false}
          />
        </div>
        <button
          type='submit'
          className='w-full !bg-blue-600 text-white px-4 py-3 rounded-lg'
          >Convert</button>
       </form>
       </div>
       </div>
      </div>
    </>
  )
}

export default App
