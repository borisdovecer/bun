import { User } from '../models/UserModel';
import { userContextProps } from "../interfaces/userInterface";

/**
 * Fetches all users from the database.
 * @returns - Array of users.
 */
export const getUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;  // Rethrow or handle it based on your use-case
  }
};

/**
 * Fetches a user by their username.
 * @param username The username of the user.
 * @returns - The user object or null if not found.
 */
export const getUserByUsername = async ({ body }: userContextProps) => {
  try {
    return await User.findOne({ username: body.username });
  } catch (error) {
    console.error(`Error fetching user with username ${body.username}:`, error);
    throw error;
  }
};

/**
 * Updates a user's details.
 * @param body Contains the user details to update.
 * @returns - The updated user object or null if not found.
 */
export const updateUser = async ({ body }: userContextProps) => {
  try {
    return await User.findOneAndUpdate({username: body.username}, body, {new: true});
  } catch (error) {
    console.error(`Error updating user with username ${body.username}:`, error);
    throw error;
  }
};

/**
 * Deletes a user by their username.
 * @param username The username of the user.
 * @returns - Delete result object.
 */
export const deleteUser = async ({ body }: userContextProps) => {
  try {
    return await User.deleteOne({ username: body.username });
  } catch (error) {
    console.error(`Error deleting user with username ${body.username}:`, error);
    throw error;
  }
};
