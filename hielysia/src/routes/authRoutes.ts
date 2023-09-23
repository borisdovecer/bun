import { Elysia, t } from 'elysia';
import { ElysiaAppType } from "./interfaces";
import { login, register } from "../controllers/authController";

/**
 * LoginValidationSchema defines body for login
 * username: string
 * password: string
 */
const LoginValidationSchema = t.Object({
  username: t.String(),
  password: t.String(),
});

/**
 * Auth routes
 * @description authRoutes are grouped routes for authentication on endpoint '/auth'
 * @param elysiaServer - Elysia server instance
 * @see login
 * @see registetr
 */
export function authRoutes(elysiaServer: Elysia<string>): void {
  elysiaServer.group('/auth', (app: ElysiaAppType): ElysiaAppType => {
    app.post('/login', login, { body: LoginValidationSchema });
    app.post('/register', register, { body: LoginValidationSchema });
    return app;
  });
}
