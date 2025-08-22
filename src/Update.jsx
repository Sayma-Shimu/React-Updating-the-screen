import { useState } from "react"


const Update = () => {
    const [a, setA] = useState(0);
    const handleClick = ()=>{
        setA(a + 10000);
    }
  return (
    <div>
        <button onClick={handleClick} className="bg-blue-700 text-white font-semibold p-4 mt-7 rounded-lg">{a} Clicked</button>
        <button/>
    </div>
  )
}

export default Update