import { useState } from "react"


const MorePractice = () => {
   const [count, setCount] = useState(0);

   const handle = ()=>{
    setCount(count + 5);
   }
  return (
    <div>
        <button onClick={handle} className="bg-purple-300 rounded-lg font-semibold p-3 mt-6">{count}</button>
        <button/>
    </div>
  )
}

export default MorePractice