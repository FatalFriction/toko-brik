import { NextResponse } from "next/server";
import db from "@/modules/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function GET(
  req: Request,
) {
  try {
    const session = await getServerSession();

    if(!session || !session.user) {
      redirect("/api/auth/signin");
    }

    const products = await db.product.findMany({ orderBy: { createdAt: 'asc' } })

    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}