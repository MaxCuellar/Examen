import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

export const ButtonPage = () => {
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("bg-black", pressed);
    document.body.classList.toggle("text-white", pressed);
    return () => {
      document.body.classList.remove("bg-black", "text-white");
    };
  }, [pressed]);

  return (
    <div className="absolute top-70">
      <Button
        variant="default2"
        className={`w-80 h-40 text-2xl transition-colors duration-200 justify-center
        ${pressed ? "bg-white text-black" : "bg-black text-white"}`}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        {pressed ? "Presionado" : "Presionar"}
      </Button>
    </div>
  );
};
