type JwtConfig = {
  name: string;
  secret: string;
}

export const jwtConfig: JwtConfig = {
  name: 'jwtPlugin',
  secret: process.env.JWT_SECRET as string
}
