import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req:Request, res:Response) => {
  const formData = await req.formData();

  const file = formData.get("images");

  if (!file || typeof file === 'string' ) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = "/" + Date.now() + file.name.replaceAll(" ", "_");
  try {
    await writeFile(
      path.join(process.cwd(), "public/" + filename),
      buffer
    );
    return NextResponse.json({fileName: filename , Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};