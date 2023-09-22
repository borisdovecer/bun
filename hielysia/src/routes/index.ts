import { server } from '../index';
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";

export function routes(elysiaServer: typeof server) {
  elysiaServer.group('/api', (app) => {
    userRoutes(app);
    authRoutes(app)
    return app;
  });

  elysiaServer.all('*', (context) => {
    context.set.status = 404;
    context.body = {
      message: 'Route Not Found',
    };
    return context.body;
  });
}
