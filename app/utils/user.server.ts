import bcrypt from "bcryptjs";
import type { RegisterForm } from "./types.server";
import cuid from "cuid";
import { prisma } from "./prisma.server";
import { Profile } from "@prisma/client";

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10);
  
  const newUser= await prisma.user.create({
    data:{
      email: user.email,
      password: passwordHash,
      profile:{
        firstName:user.firstName,
        lastName: user.lastName
      }
    }
  })

  return {
    id: newUser.id,
    email: newUser.email
  };
};

export const getOtherUsers = async (userId: string) => {
  return await prisma.user.findMany({
   select:{id: true, email:true, profile:true},
   where:{id:{not: userId}},
   orderBy:{profile:{
     firstName:'asc'
   }}
  })
 
};

export const getUserById = async (userId: string) => {
  // Grab a user by ID
  return await prisma.user.findUnique({
    select:{id:true, email:true, profile:true},
    where:{id:userId}
  })
};

export const updateUser = async (userId: string, profile: any) => {
  
  return await prisma.user.update({
    where:{id: userId},
    data:{profile: {update:profile}}
  })
};

export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: {id: id}
  })
};
