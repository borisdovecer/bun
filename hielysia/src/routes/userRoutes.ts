import {Elysia, t} from "elysia";
import { ElysiaAppType } from "./interfaces";
import { getUsers, getUserByUsername, updateUser, deleteUser} from "../controllers/userController";
/**
 * LoginValidationSchema defines body for login
 * username: string
 * password: string
 */
const LoginValidationSchema = t.Object({
  username: t.String(),
});

/**
 * User routes
 * @description userRoutes are grouped routes for user management on endpoint '/users'
 * @param elysiaServer - Elysia server instance
 * @see getUsers
 * @see getUserByUsername
 * @see postUpdateUser
 * @see deleteUser
 */
export function userRoutes(elysiaServer: Elysia<string>): void {
  elysiaServer.group('/users', (app: ElysiaAppType): ElysiaAppType => {
    app.get('/', getUsers);
    app.get('/:id', getUserByUsername, { body: LoginValidationSchema });
    app.post('/:id', updateUser, { body: LoginValidationSchema });
    app.delete('/:id', deleteUser, { body: LoginValidationSchema });
    return app;
  });
}
