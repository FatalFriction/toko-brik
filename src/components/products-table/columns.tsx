"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";

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
        header: "Name",
    },
    {
        accessorKey: "categoryName",
        header: "Category",
    },
    {
      accessorKey: "image",
      header: () => <div className="text-center">Image</div>,
        cell: ({ row }) => {
        const url = row.getValue("image") as string
        return <Image src={url} alt="product_images" width={200} height={200}/>
        },
    },
    {
      accessorKey: "harga",
      header: () => <div className="text-center">Harga</div>,
        cell: ({ row }) => {
        const amount = parseInt(row.getValue("harga"))   
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "IDR",
        }).format(amount)
    
        return <div className="text-right font-medium">{formatted}</div>
        },
    },
  ];