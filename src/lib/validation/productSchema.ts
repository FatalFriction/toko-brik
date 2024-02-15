import * as z from 'zod'

export const ProductSchema = z.object({
    name: z.string().min(3,"Product name is required").max(100),
    description: z.string().min(3,"Product description is required").max(100),
    sku: z.string().length(4,"SKU must contain 4 characters"),
    categoryId: z.coerce.number().min(1,"Number out of range").max(3,"Number out of range"),
    categoryName: z.string().min(1,"please input a category"),
    weight: z.coerce.number().min(1,"Weight is too light").max(100,"Weight is too Heavy"),
    width: z.coerce.number().min(1,"Width is too small").max(100,"Width is too large"),
    length: z.coerce.number().min(1,"Length is too short").max(100,"Length is too long"),
    height: z.coerce.number().min(1,"Height is too short").max(100,"Height is too tall"),
    harga: z.coerce.number().min(1,"Price is too low")
})