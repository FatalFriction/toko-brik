"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { CardModal } from "../modals";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
interface Product {
    id: number;
    categoryId: number;
    categoryName: string;
    sku: string;
    name: string;
    description: string;
    weight: number;
    width: number;
    length: number;
    height: number;
    image: string;
    harga: number;
    createdAt: Date;
    updatedAt: Date;
  }

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
              >
                Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
    },
    {
      accessorKey: "image",
      header: () => <div>Image</div>,
        cell: ({ row }) => {
        const url = row.getValue("image") as string
        return <Image src={url} alt="product_images" width={200} height={200}/>
        },
    },
    {
      accessorKey: "harga",
      header: ({ column }) => 
        <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
            className="right-0"> 
            Harga
            <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>,
        cell: ({ row }) => {
        const amount = parseInt(row.getValue("harga"))   
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "IDR",
        }).format(amount)
    
        return <div className="font-bold">{formatted}</div>
        },
    },
    {
        accessorKey: "details",
        header: () => <></>,
          cell: ({ row }) => {
          const product = row.original
          return <CardModal data={product}/>
          },
      },
  ];