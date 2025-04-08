import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data=useLoaderData()

  // const [data,setData]=React.useState([])
  // useEffect(()=> {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((response) => response.json())
  //   .then((data)=> {
  //        setData(data)
  //       //  console(data)
  //   })
  // }, [] )

  return (
    <div
      className='bg-gray-200 text-red text-center text-5xl text-bold py-9'
    >Github : {data.followers} </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response=await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}