import { NextResponse } from "next/server";
import db from "@/modules/db";
import { hash } from "bcrypt";
import { ProductSchema } from "@/lib/validation/productSchema";
import { getCategoryName } from "@/lib/categoryName";
import { revalidatePath } from "next/cache";

export async function POST(
  req: Request,
) {
  try {
    const body = await req.json();
    
    const { 
        categoryId,
        categoryName,
        sku,
        name,
        description,
        weight,
        width,
        length,
        height,
        image,
        harga,  } = ProductSchema.parse(body);
        
        const categoriesName = getCategoryName(categoryId);

    const addProduct = await db.product.create({
        data: { categoryName: categoriesName ,...body }
    })
    
    revalidatePath("/")
    return NextResponse.json({ Product: addProduct, message: "Product Successfully Registered"}, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error"}, { status: 500 });
  }
}