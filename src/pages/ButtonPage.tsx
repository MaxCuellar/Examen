import { useState } from "react"
import { Button } from "../components/ui/button"

export const ButtonPage = () => {

  const [pressed, setPressed] = useState(false)

  return (
    <>
      <Button onMouseDown={()=>setPressed(true)} onMouseUp={()=>setPressed(false)}>
        {pressed ? 'Presionado' : 'Presionar'}
      </Button>
    </>
  )
}
