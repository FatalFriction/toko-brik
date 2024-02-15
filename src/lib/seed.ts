import { PrismaClient } from '@prisma/client'
import { genProduct } from './generate-product';
const prisma = new PrismaClient()

export async function seed() {
    for (let i = 0; i < 100; i++) {
        await genProduct(prisma);
    }
    
    return
}

seed()
    .catch(error => {
        console.error('Error generating products:', error);
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect();
      });
