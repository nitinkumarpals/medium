import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use('/*',async (c, next) => {
    try {
        const authHeader = c.req.header('Authorization') || "";
    if (!authHeader) {
        c.status(403);
        return c.json({ Error: Error, message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    const user = await verify(token , c.env.JWT_SECRET);
    if(!user) {
        c.status(403);
        return c.json({ Error: Error, message: 'Unauthorized' });
    }
    if (user) {
        c.set("userId", user.id as string);
        await next();
    }
    else{
        c.status(403);
        return c.json({ Error: Error, message: 'Unauthorized' });
    }
    } catch (error) {
        c.status(403);
        return c.json({ Error: Error, message: 'Unauthorized' });
    }
});

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const { title, content } = await c.req.json();
        const authorId = c.get("userId");
        const blog = await prisma.blog.create({
            data: {
                title: title,
                content: content,
                authorId: Number(authorId)
            }
        })
        return c.json(blog.id);
    } catch (error: any) {
        c.status(500);
        return c.json({ error: error.message, message: 'error while creating blog post' });
    }
});

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const { id, title, content } = await c.req.json();
    const blog = await prisma.blog.update({
        where: {
            id: id
        },
        data: {
            title: title,
            content: content,
        }
    })
    return c.json(blog.id);
});

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const blogs = await prisma.blog.findMany();
    return c.json(blogs);
});

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try {
        const id = c.req.param('id');
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            }
        });
        return c.json({blog});
    } catch (error: any) {
        c.status(500);
        c.json({ error: error.message, message: 'error while fetching blog post' });
    }
});




