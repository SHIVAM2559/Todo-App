import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className="py-3 bg-orange-700 text-center text-3xl text-bold text-white"   >User : {userid} </div>
  )
}

export default User