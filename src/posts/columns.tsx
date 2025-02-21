"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Trash2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Post = {
    userId: number
    id: number
    title: string
    body: string
}

export const columns: ColumnDef<Post>[] = [
    {
        accessorKey: "userId",
        header: "User ID",
    },
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
            const post = row.original

            return (
                <Button><Trash2Icon ></Trash2Icon></Button>
            )
        },
    },
]
