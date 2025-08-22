import { useState } from "react"


const UserGive = () => {
    const [text, setText] = useState('');

    const data = (findData)=>{
        setText(findData.target.value);
    }

  return (
    <div>
        <label htmlFor="">input value :  </label>
        <input onChange={data} className="border-2 rounded-md mt-5" type="text" name="" id="" />
        <p>{text}</p>
    </div>
  )
}

export default UserGive