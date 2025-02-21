import { Button } from "@/components/ui/button";
import { useState } from "react"

export const Counter = () => {

  const [count, setCount] = useState(0);


  return (
    <>
      <h1 className="text-center text-2xl font-bold mb-8">{count}</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <Button onClick={()=>setCount(count - 1)} className="grid col-1">-1</Button>
        <Button onClick={()=>setCount(0)} className="grid col-2">Reset</Button>
        <Button onClick={()=>setCount(count + 1)} className="grid col-3">+1</Button>
      </div>
    </>

  )
}
