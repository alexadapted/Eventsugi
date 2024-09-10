import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'

const captchaSecret = '6Lf8hBMoAAAAAN7AV7D513ZSlz6dyIduogZc63HX'

export const contactUsLeadRouter = createTRPCRouter({
  createOne: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string().optional().nullable(),
        phone: z.string(),
        page: z.string(),
        subscribe: z.boolean(),
        captchaToken: z.string().min(1).optional().nullable(),
        type: z.string().optional().nullable()
      })
    )
    .mutation(async ({ ctx: { prisma }, input }) => {
      if (input.captchaToken) {
        const res = await fetch(
          `https://www.google.com/recaptcha/api/siteverify?secret=${captchaSecret}&response=${input.captchaToken}`
        )
        const json = await res.json()
        if (!json.success) throw new Error('Captcha failed')
      }
      await prisma.contactUsLead.create({
        data: {
          name: input.name,
          email: input.email,
          message: input.message,
          phone: input.phone,
          page: input.page,
          subscribe: input.subscribe,
          type: input.type === 'Catalog' ? 'Catalog' : 'Contact'
        }
      })
      return 'Done'
    })
})
