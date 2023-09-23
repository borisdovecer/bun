import { Elysia } from "elysia";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { BodyType, ElysiaAppType, ElysiaContextType } from "./interfaces";

/**
 * App routes
 * @description Defining and grouping application routes on endpoint '/api'
 *
 * @see authRoutes
 * @see userRoutes
 * @param elysiaServer - Elysia server instance
 */
export function routes(elysiaServer: Elysia<string>): void {
  elysiaServer.group('/api', (app: ElysiaAppType): ElysiaAppType => {
    userRoutes(app);
    authRoutes(app);
    return app;
  });

  elysiaServer.all('*', (context: ElysiaContextType): BodyType => {
    context.set.status = 404;
    context.body = {
      message: 'Route Not Found',
    };
    return context.body as BodyType;
  });
}
