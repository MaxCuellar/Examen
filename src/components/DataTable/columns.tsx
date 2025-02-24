"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { EditRegisterDialog } from "../Dialogs/editRegisterDialog"
// import { deleteData } from "@/helpers/crudOperations/deleteData"
import { DeleteRegisterDialog } from "../Dialogs/deleteRegisterDialog"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Post = {
    id: string
    title: string
    body: string
}

export const columns = (fetchData: () => void): ColumnDef<Post>[] => [
    {
        accessorKey: "id",
        header: "Post ID",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "body",
        header: "Body",
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const post = row.original; // Obtener los datos de la fila actual
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="flex flex-col items-center">
                        <EditRegisterDialog id={post.id} fetchData={fetchData} />
                        <DropdownMenuSeparator />
                        <DeleteRegisterDialog id={post.id} fetchData={fetchData} />
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
