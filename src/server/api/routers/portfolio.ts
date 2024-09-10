import { createTRPCRouter, publicProcedure } from '../trpc'

export const portfolioRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const portfolios = await prisma.portfolio.findMany({
      include: {
        image: true,
        video: true
      },
      orderBy: {
        order: 'asc'
      }
    })

    return portfolios
  })
})
