import { createTRPCRouter, publicProcedure } from '../trpc'

export const clientRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const clients = await prisma.client.findMany({
      include: {
        image: true
      },
      orderBy: {
        order: 'asc'
      }
    })

    return clients
  })
})
