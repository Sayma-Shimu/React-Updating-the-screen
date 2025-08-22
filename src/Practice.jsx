import { useState } from "react"


const Practice = () => {
    const [count, setCount]= useState(0);
    const handleIt = ()=>{
        setCount(count + 10000);
    }
  return (
    <div>
        <button onClick={handleIt} className="bg-fuchsia-400 rounded-lg font-semibold p-3 mt-8">Click hoyeche {count}bar</button>
        <button/>
        </div>
  )
}

export default Practice