import * as z from 'zod'

export const userSchema = z.object({
    username: z.string().min(3,"username is required").max(100),
    email: z.string().min(1,"Email is required").email("Invalid email"),
    password: z.string().min(3,"Password is required").min(8, "Password must have at least 8 characters"),
})