import mongoose from "mongoose";
import { routes } from "./routes";
import { jwt } from '@elysiajs/jwt'
import { cors } from '@elysiajs/cors'
import { cookie } from '@elysiajs/cookie'
import { Elysia, InternalRoute } from "elysia";
import { jwtConfig } from "./config/jwtConfig";
import { corsConfig } from "./config/corsConfig";

const PORT: string | 8080 = process.env.PORT || 8080;

// connect to mongodb
await mongoose.connect(process.env.MONGODB_SERVER as string + process.env.DB_NAME as string);

// create Elysia server
export const server: Elysia  = new Elysia()
  .use(jwt(jwtConfig))
  .use(cookie())
  .use(cors(corsConfig))

// create application routes
routes(server);

// listen server
server.listen(PORT, (): void => {
  console.log('-'.repeat(50));
  server.routes.forEach((route: InternalRoute): void => {
    if (route.path === '/*') {
      return;
    }
    console.log(`${route.method} ${route.path}`);
  });
  console.log('-'.repeat(50));

  console.log(`Server is running on port ${PORT}`);
});
