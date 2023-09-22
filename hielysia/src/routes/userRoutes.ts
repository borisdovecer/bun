import { getUsers } from "../controllers/userController";

export function userRoutes(server: any) {
  server.group('/users', (app: any) => {
    app.get('/', () => getUsers());
    app.post('/', () => getUsers());
    app.delete('/', () => getUsers());
    app.get('/:id', () => getUsers());
    app.post('/:id', () => getUsers());
    return app;
  });
}
