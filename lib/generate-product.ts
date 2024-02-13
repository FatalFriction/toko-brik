import { faker } from '@faker-js/faker';

export async function genProduct(db:any) {
    const categoryId = faker.number.int({ min: 1, max: 3 });
    const categoryName = getCategoryName(categoryId);

    await db.product.createMany({
        data: [
            {
                categoryId,
                categoryName,
                sku: faker.number.hex({ min: 0, max: 65535 }),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                weight: faker.number.int({ min: 1, max: 10 }),
                width: faker.number.int({ min: 1, max: 10 }),
                length: faker.number.int({ min: 1, max: 10 }),
                height: faker.number.int({ min: 1, max: 10 }),
                image: faker.image.url(),
                harga: faker.number.int({ min: 1000, max: 10000 }),
            }
        ]
    });
}

function getCategoryName(categoryId:number) {
    //logic to map categoryId to categoryName
    
    switch (categoryId) {
        case 1:
            return 'Cemilan';
        case 2:
            return 'Minuman';
        case 3:
            return 'Permen';
        default:
            return '';
    }
}
