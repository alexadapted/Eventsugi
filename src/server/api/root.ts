import { contactUsLeadRouter } from '~/server/api/routers/contactUsLead'
import { exampleRouter } from '~/server/api/routers/example'
import { createTRPCRouter } from '~/server/api/trpc'
import { serviceRouter } from './routers/service'
import { clientRouter } from './routers/client'
import { portfolioRouter } from './routers/portfolio'
import { blogsRouter } from './routers/blogs'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  contactUsLeads: contactUsLeadRouter,
  service: serviceRouter,
  client: clientRouter,
  blogs : blogsRouter,
  portfolio: portfolioRouter
})

// export type definition of API
export type AppRouter = typeof appRouter
