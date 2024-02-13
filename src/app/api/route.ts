import { NextResponse } from "next/server";
import db from "@/modules/db";

export async function GET(
  req: Request,
) {
  try {

    const products = await db.product.findMany({ orderBy: { createdAt: 'asc' } })

    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}