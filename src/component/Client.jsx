import React, { useState } from 'react'

const Client = () => {
   const [text, setText] = useState('');

   const findValue = (data)=>{
    setText(data.target.value)
   }
  return (
    <div>
        <label htmlFor="">Text : </label>
        <input onChange={findValue} className="border-2 rounded-md mt-5" type="text" name="" id="" />
        <p>{text}</p>
    </div>
  )
}

export default Client