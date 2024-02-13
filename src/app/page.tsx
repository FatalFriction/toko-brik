import db from "@/modules/db";

export default async function Home() {

  const products = await db.product.findMany({orderBy: {createdAt: 'desc'}});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button>Generate product</button>
      <div>
        {products.map((product:any) => (
          <div key={product.id}/>
        ))}
      </div>
    </main>
  );
}
