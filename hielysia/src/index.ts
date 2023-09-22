import { Elysia } from "elysia";
import { routes } from "./routes";
import { jwt } from '@elysiajs/jwt'
import { cookie } from '@elysiajs/cookie'
import { cors } from '@elysiajs/cors'
import mongoose from "mongoose";

await mongoose.connect(process.env.MONGODB_SERVER as string + process.env.DB_NAME as string);
const PORT = process.env.PORT || 8080;

const jwtConfig = {
  name: 'jwtPlugin',
  secret: process.env.JWT_SECRET as string
}

export const server  = new Elysia()
  .use(jwt(jwtConfig))
  .use(cookie())
  .use(cors())

routes(server);

server.listen(PORT, () => {
  console.log('-'.repeat(50));
  server.routes.forEach((route) => {
    if (route.path === '/*') {
      return;
    }
    console.log(`${route.method} ${route.path}`);
  });
  console.log('-'.repeat(50));

  console.log(`Server is running on port ${PORT}`);
});
