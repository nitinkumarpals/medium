import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt';
import bcrypt from 'bcryptjs';

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  
  try {
    //zod, 
    const { name, username, password} =  await c.req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name: name,
        username: username,
        password: hashedPassword
      }
    });
    const jwt = await sign({ username: user.id }, c.env.JWT_SECRET);
    return c.json(user);
  } catch (error : any) {
    c.status(403);
    return c.json({ error: error.message, message: 'User already exists with this username' });
  }

})

app.post('/api/v1/user/login', (c) => {
  return c.text('signin route')
})

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id');
  console.log(id);
  return c.text(' get blog route')
  }
)

app.post('/api/v1/blog', (c) => {
  return c.text(' post blog route')
})

app.put('/api/v1/blog', async (c) => {
  
  return c.text(' put blog route')
})
export default app
