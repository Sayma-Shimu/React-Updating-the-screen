import { useState } from "react";

const Another = () => {
    const [text, setText] = useState('');

  return (
    <div>
        <label htmlFor="">data: </label>
        <input onChange={(data)=>{setText(data.target.value)}} className="border-2 rounded-md mt-5" type="text" name="" id="" />
        <p>{text}</p>
    </div>
  )
}

export default Another