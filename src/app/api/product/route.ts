import { NextResponse } from 'next/server';
import db from '@/modules/db';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const addProduct = await db.product.create({
        data: { ...body }
    })
    revalidatePath("/")
    return NextResponse.json({productData:addProduct , message: 'Product Successfully Registered' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Internal Product Server Error' }, { status: 500 });
  }
}