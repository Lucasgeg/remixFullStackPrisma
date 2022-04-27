import bcrypt from "bcryptjs";
import type { RegisterForm } from "./types.server";
import cuid from "cuid";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);

  // create user

  return {
    id: cuid(), // new user's id
    email: "demo@prisma.io", // new user's email
  };
};

export const getOtherUsers = async (userId: string) => {
  // return all users where id != userId.
  // Sort the results in ascending order by firstName
  return [
    {
      id: cuid(),
      email: "demo2@gmail.com",
      profile: {
        firstName: "Another",
        lastName: "User",
      },
    },
    {
      id: cuid(),
      email: "demo3@gmail.com",
      profile: {
        firstName: "Power",
        lastName: "User",
      },
    },
  ];
};

export const getUserById = async (userId: string) => {
  // Grab a user by ID
  return {
    id: cuid(),
    email: "demo2@gmail.com",
    profile: {
      firstName: "Another",
      lastName: "User",
    },
  };
};

export const updateUser = async (userId: string, profile: any) => {
  // Update a user's profile information
};

export const deleteUser = async (id: string) => {
  // delete a user by id
};
