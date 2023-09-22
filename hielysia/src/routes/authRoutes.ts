import { t } from 'elysia';
import { login, register } from "../controllers/userController";

const LoginValidationSchema = t.Object({
  username: t.String(),
  password: t.String(),
});

export function authRoutes(server: any) {
  server.group('/auth', (app: any) => {
    app.post('/login', login, { body: LoginValidationSchema });
    app.post('/register', register, { body: LoginValidationSchema });
    return app;
  });
}
