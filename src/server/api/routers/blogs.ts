// src/server/routers/blogs.ts
import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../trpc';

const QUERY_TIMEOUT = 30000; // 30 seconds

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Query timed out")), ms)
  );
  return Promise.race([promise, timeout]);
}

export const blogsRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.string())  // Expects a string input
    .query(async ({ ctx: { prisma }, input }) => {
      return await withTimeout(
        prisma.blog.findUnique({
          where: { slug: input },
        }),
        QUERY_TIMEOUT
      );
    }),

  getAll: publicProcedure.query(async ({ ctx: { prisma } }) => {
    try {
      return await withTimeout(
        prisma.blog.findMany({
          where: { published: true },
          orderBy: { createdAt: 'desc' },
          take: 15, // Ensure you fetch all or specify a desired number
        }),
        QUERY_TIMEOUT
      );
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred while fetching blogs');
      }
    }
  }),
});

/*
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
      try {
        return await prisma.blog.findMany({
          where: { published: true },
          orderBy: { createdAt: 'desc' },
          take: 15, // Ensure you fetch all or specify a desired number
        });
      } catch (error) {
        throw new Error('Failed to fetch blogs');
      }
    }),
});
*/