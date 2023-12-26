import { z } from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({ message: 'An email is required' }),
    password: z.string().min(1, { message: 'Password is required' }).regex(new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/), 'Password')
})