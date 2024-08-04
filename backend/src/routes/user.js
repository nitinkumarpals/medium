import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import bcrypt from 'bcryptjs';
import { signupInput, loginInput } from '@nitinkumarpal/medium-common';
export const userRouter = new Hono();
userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        //zod, 
        const { name, username, password } = await c.req.json();
        const { success } = signupInput.safeParse({ name, username, password });
        if (!success) {
            c.status(403);
            return c.json({ Error: Error, message: 'Invalid Inputs' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword
            }
        });
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.json({ password: user.password, jwt });
    }
    catch (error) {
        c.status(403);
        return c.json({ error: error.message, message: 'User already exists with this username' });
    }
});
userRouter.post('/login', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
        const { username, password } = await c.req.json();
        const { success } = loginInput.safeParse({ username, password });
        if (!success) {
            c.status(403);
            return c.json({ Error: Error, message: 'Invalid Inputs' });
        }
        const user = await prisma.user.findFirst({
            where: {
                username: username,
                password: password
            }
        });
        if (!user) {
            c.status(403);
            return c.json({ Error: Error, message: 'Invalid credentials' });
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.text(jwt);
    }
    catch (error) {
        console.log(error);
        c.status(411);
        return c.json({ error: error.message });
    }
});
