import { useState } from "react"


const Display = () => {
    const [confidant, publisher] = useState(0);

    const handle = ()=>{
        publisher(confidant + 1);
    }

  return (
    <div>
        <button onClick={handle} className="bg-cyan-100 rounded-lg p-3 text-center font-semibold">Display  {confidant}-Clicked </button>
        <button/>
    </div>
  )
}

export default Display
