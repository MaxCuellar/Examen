import { Button } from "@/components/ui/button";
import { useState } from "react"

export const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={`text-center font-bold mb-8 transition-all duration-300 absolute top-60`} style={{ fontSize: `${Math.max(2, 2 + count * 0.2)}rem` }}>
        {count}</h1>
      <div className={`relative top-80 grid grid-cols-3 gap-4`}>
        <Button id="subButton" onClick={() => setCount(count - 1)} className="grid col-1">-1</Button>
        <Button onClick={() => setCount(0)} className="grid col-2">Reset</Button>
        <Button onClick={() => {
          setCount(count + 1)
          if(count > 29) setCount(30)
        }} className="grid col-3">+1</Button>
      </div>
    </>

  )
}
