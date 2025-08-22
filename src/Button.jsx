import { useState } from "react"


const Button = () => {
  const [count, setCount] = useState(1);

  const handleClick = ()=>{
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className="text-lg bg-amber-400 py-2 px-3 rounded-lg">Submit</button>
      <p>{count}</p>
      <button/>
    </div>
  )
}

export default Button