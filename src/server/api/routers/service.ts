import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'

export const serviceRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.string())
    .query(async ({ ctx: { prisma }, input }) => {
      return await prisma.service.findUnique({
        where: {
          slug: input
        },
        include: {
          image: true,
          faqs: true,
          serviceFeatures: true,
          children: true
        }
      })
    }),

  getAll: publicProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.service.findMany({
      where: {
        showOnPage: true,
        parentId: null
      },
      include: {
        image: true
      },
      orderBy: { order: 'asc' }
    })
  }),

  getAllHome: publicProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.service.findMany({
      where: {
        showOnHomePage: true
      },
      include: {
        image: true
      },
      orderBy: { order: 'asc' }
    })
  }),

  getHeaders: publicProcedure.query(async ({ ctx: { prisma } }) => {
    return prisma.headerServices.findMany({
      include: {
        service: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        }
      },
      orderBy: {
        order: 'asc'
      }
    })
  })
})
