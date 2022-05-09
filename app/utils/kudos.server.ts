import { Prisma, style } from "@prisma/client";
import cuid from "cuid";
import { prisma } from "./prisma.server";

export const createKudo = async (
  message: string,
  userId: string,
  recipientId: string,
  style: style
) => {
  await prisma.kudo.create({
    data: {
      message,
      author: {
        connect: {
          id: userId,
        },
      },
      recipient: {
        connect: {
          id: recipientId,
        },
      },
      style,
    },
  });
};

export const getFilteredKudos = async (
  userId: string,
  sortFilter: Prisma.KudoOrderByWithRelationInput,
  whereFilter: Prisma.KudoWhereInput
) => {
  return await prisma.kudo.findMany({
    orderBy: sortFilter,
    select: {
      id: true,
      style: true,
      message: true,
      author: { select: { profile: true } },
    },
    where: {
      recipientId: userId,
      ...whereFilter,
    },
  });
};

export const getRecentKudos = async () => {
  // get the most recent three kudos. Include the recipients data and the emoji
  return await prisma.kudo.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      style: { select: { emoji: true } },
      recipient: {
        select: {
          id: true,
          profile: true,
        },
      },
    },
    take: 3,
  });
};
