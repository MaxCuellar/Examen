"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { EditRegisterDialog } from "../Dialog/editRegisterDialog"
// import { deleteData } from "@/helpers/crudOperations/deleteData"
import { DeleteRegisterDialog } from "../Dialog/deleteRegisterDialog"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Post = {
    id: string
    title: string
    body: string
}

export const columns: ColumnDef<Post>[] = [
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
        cell: ({ row }) => {
            const post = row.original; // Obtener los datos de la fila actual
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost">
                            <MoreHorizontal />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="justify-items-center">
                        <EditRegisterDialog id={post.id} />
                        <DropdownMenuSeparator />
                        <DeleteRegisterDialog id={post.id} />
                        {/* <Button onClick={()=>deleteData(post.id.toString())} variant="ghost">
                            Delete
                        </Button> */}
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
