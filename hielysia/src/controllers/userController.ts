import { User } from '../models/UserModel';

export const login = async (context: any) => {
  const user = await User.findOne({ username: context.body.username });

  if (!user) {
    return {
      message: 'User not found'
    }
  }

  const isPasswordMatched = await Bun.password.verify(
    context.body.password,
    user.password,
  );

  if (!isPasswordMatched) {
    return {
      message: 'Password is not matched',
    };
  }

  const accessToken = await context.jwtPlugin.sign({
    userId: user._id,
  });

  context.setCookie("access_token", accessToken, {
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

export const register = async (context: any) => {


  const newUser = new User({
    username: context.body.username,
    password: await Bun.password.hash(context.body.password)
  });

  console.log(context)

  await newUser.save();

  return 'sve kul'
}

export const getUsers = async () => {
  const users = await User.find();

  console.log(users)
  return users
}
