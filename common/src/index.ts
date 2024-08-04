import z from 'zod';
//these are the variables that my backend need
export const signupInput = z.object({
    name: z.string().optional(),
    username: z.string().email(),
    password: z.string().min(6)
});

export const loginInput = z.object({
    username: z.string().email(),
    password: z.string().min(6)
});

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string()
});

export const updateBlogInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.number()
});

//these are the schema which my frontend will need
export type SignupSchema = z.infer<typeof signupInput>;
export type LoginSchema = z.infer<typeof loginInput>;
export type CreateBlogSchema = z.infer<typeof createBlogInput>;
export type UpdateBlogSchema = z.infer<typeof updateBlogInput>;