import { useState } from "react"


const UserDibe = () => {
   const [count, setCount] =  useState('')
  return (
    <div>
        <label htmlFor=" ">input text: </label>
        <input onChange={(paise)=>{setCount(paise.target.value)}} className="border-2 mt-4" type="text" name="" id="" />

        <p>{count}</p>
    </div>
  )
}

export default UserDibe
