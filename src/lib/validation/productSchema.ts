import * as z from 'zod'

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ProductSchema = z.object({
    username: z.string().min(3,"username is required").max(100),
    email: z.string().min(1,"Email is required").email("Invalid email"),
    password: z.string().min(3,"Password is required").min(8, "Password must have at least 8 characters"),
    categoryId: z.number().min(1,"Number out of range").max(3,"Number out of range"),
    categoryName: z.string(),
    sku: z.string().length(4,"SKU must contain 4 characters"),
    name: z.string().min(3,"Product name is required").max(100),
    description: z.string().min(3,"Product description is required").max(100),
    weight: z.number().min(1,"Weight is too light").max(100,"Weight is too Heavy"),
    width: z.number().min(1,"Width is too small").max(100,"Width is too large"),
    length: z.number().min(1,"Length is too short").max(100,"Lenght is too long"),
    height: z.number().min(1,"Height is too short").max(100,"Height is too tall"),
    image: z.any().refine((files) => {
       return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
    harga: z.number().min(1,"Price is too low")
})