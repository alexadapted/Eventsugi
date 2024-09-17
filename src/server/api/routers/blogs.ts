// src/server/routers/blogs.ts
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

export const blogsRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.string())  // Expects a string input
    .query(async ({ ctx: { prisma }, input }) => {
      return await prisma.blog.findUnique({
        where: {
          slug: input
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.blog.findMany({
      where: {
        published: true,
      },
      orderBy: { createdAt: 'desc' }
    });
  }),
});
