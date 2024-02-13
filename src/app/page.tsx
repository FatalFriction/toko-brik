"use client"
import { columns } from "@/components/products-table/columns";
import { DataTable } from "@/components/products-table/data-table";
import db from "@/modules/db";
import { useEffect, useState } from "react";

type ProductTypes = {
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
};

export default function Home() {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsData = await fetch("/api")
      const response = await productsData.json()
      setProducts(response);
    }

    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={products} />
      </div>
    </main>
  );
}
