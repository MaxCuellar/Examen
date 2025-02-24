import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label"
import { Input } from "../ui/input"
import { Button } from '../ui/button'
import { useState } from "react"
// import axios from "axios"
import { putData } from "@/helpers/crudOperations/putData"
import { toast } from "sonner"

type EditRegisterDialogProps = {
    id: string
}

export const EditRegisterDialog = ({ id }: EditRegisterDialogProps) => {

    const [body, setBody] = useState<string>("")
    const [title, setTitle] = useState<string>("")

    // const sendDataToAPI = () => {

    //     axios.put(`https://67bb8b11ed4861e07b37aba9.mockapi.io/Crud/${id}`, {
    //         title,
    //         body
    //     })
    // }

    // const setIdToLocalStorage = (id: string) => {
    //     localStorage.setItem("ID", id)
    // }
    // useEffect(() => {
    //     setBody(localStorage.getItem("body") ?? "");
    //     setTitle(localStorage.getItem("title") ?? "");
    // }, [])

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {/* <Button onClick={() => (setIdToLocalStorage(id))} variant="ghost"> */}
                    <Button variant="ghost">
                        Editar
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar campos</DialogTitle>
                        <DialogDescription>
                            Realize los cambios necesarios y al terminar de clic en aceptar.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="title" className="text-right">
                                Title
                            </Label>
                            <Input onChange={(e) => setTitle(e.target.value)} type="text" id="title" value={title || ""} className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="body" className="text-right">
                                Body
                            </Label>
                            <Input onChange={(e) => setBody(e.target.value)} type="text" id="body" value={body || ""} className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button onClick={() => {
                                putData(id, body, title)
                                toast.info("Registro editado exitosamente", {
                                    position: "top-right",
                                })
                            }} type="submit">Guardar cambios</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
