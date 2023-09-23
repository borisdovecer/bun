import { User } from '../models/UserModel';
import {ElysiaAuthContextType, ILoginReturn, newUserType} from "../interfaces/authInterface";

/**
 * Login function
 * @param body - username and password
 * @param jwtPlugin - Jwt
 * @param setCookie - function that set cookies
 */
export const login = async ({ body, jwtPlugin, setCookie }: ElysiaAuthContextType): Promise<ILoginReturn> => {
  const user: User | null = await User.findOne({ username: body.username });

  if (!user) {
    return {
      message: 'User not found'
    }
  }

  const isPasswordMatched: boolean = await Bun.password.verify(body.password, user.password);

  if (!isPasswordMatched) {
    return {
      message: 'Password do not matched',
    };
  }

  const accessToken: string = await jwtPlugin.sign({ username: user.username });

  setCookie("access_token", accessToken, {
    maxAge: 15 * 60,
    path: "/",
  });

  return {
    message: 'success',
    username: user.username,
    role: 'admin',
    token: accessToken
  }
}

/**
 * Register user
 * @param body - username and password for now
 */
export const register = async ({ body }: ElysiaAuthContextType): Promise<ILoginReturn> => {
  const newUser: newUserType = new User({
    username: body.username,
    password: await Bun.password.hash(body.password)
  });

  await newUser.save();

  return {
    message: 'user created',
    username: newUser.username,
  }
}
