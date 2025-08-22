import { useState } from "react"


const Nothing = () => {
   const [text, setText]= useState('');
  return (
    <div>
        <label htmlFor="">input text : </label>
        <input onChange={(pailam)=>{setText(pailam.target.value)}} className="border-2 rounded-md mt-5" type="text" name="" id="" />
        <p>{text}</p>
    </div>
  )
}

export default Nothing