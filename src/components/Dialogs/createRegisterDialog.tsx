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
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog"
import { toast } from "sonner"
import { postData } from "@/helpers/crudOperations/crudOperations"

type CreateRegisterDialogProps = {
    fetchData: () => void;
};

export const CreateRegisterDialog = ({ fetchData }: CreateRegisterDialogProps) => {

    const [body, setBody] = useState<string>("")
    const [title, setTitle] = useState<string>("")

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>
                        Crear
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Ingresar informacion</DialogTitle>
                        <DialogDescription>
                            Ingrese los datos que desea guardar.
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
                        <DialogClose asChild >
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button >Guardar registro</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel onClick={()=>DialogClose}>Cancelar</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => {
                                            postData(body, title, fetchData)
                                            toast.success("Registro creado exitosamente", {
                                                position: "top-right",
                                            })
                                        }}>
                                            Continuar
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        </>
    )
}
