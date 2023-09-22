import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {type: String, required: true},
    password: {type: String, required: true},
  }
);

export type User = mongoose.InferSchemaType<typeof userSchema>;
export const User = mongoose.model('User', userSchema);
