import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'
import sgMail from '@sendgrid/mail';

const captchaSecret = '6Lf8hBMoAAAAAN7AV7D513ZSlz6dyIduogZc63HX'
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
const sendGridApiKey = process.env.SENDGRID_API_KEY;

if (!sendGridApiKey) {
  throw new Error('SendGrid API key is not defined in environment variables');
}

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
      // Email to the user
    const userMsg = {
      to: input.email, // recipient email
      from: {
        email: 'hello@eventsugi.com', // sender email (must be verified in SendGrid)
        name: 'Eventsugi LLC', // sender name
      },
      subject: 'Thank you for contacting us',
      text: `Hello ${input.name},\n\nThank you for your message. Here are the details you provided:\n\n` +
            `Name: ${input.name}\n` +
            `Email: ${input.email}\n` +
            `Phone: ${input.phone}\n` +
            `Message: "${input.message}"\n` +
            `Page: ${input.page}\n` +
            `Subscribe: ${input.subscribe ? 'Yes' : 'No'}\n` +
            `We will get back to you soon.\n\nBest regards,\nYour Team`,
      html: `<p>Hello <strong>${input.name}</strong>,</p>` +
            `<p>Thank you for your message. Here are the details you provided:</p>` +
            `<ul>` +
            `<li><strong>Name:</strong> ${input.name}</li>` +
            `<li><strong>Email:</strong> ${input.email}</li>` +
            `<li><strong>Phone:</strong> ${input.phone}</li>` +
            `<li><strong>Message:</strong> "${input.message}"</li>` +
            `<li><strong>Page:</strong> ${input.page}</li>` +
            `<li><strong>Subscribe:</strong> ${input.subscribe ? 'Yes' : 'No'}</li>` +
            `</ul>` +
            `<p>We will get back to you soon.</p>` +
            `<p>Best regards,<br>The Eventsugi Team</p>`,
    };

    // Email to the admin
    const adminMsg = {
      to: 'hello@eventsugi.com', // admin email (change to the actual admin email)
      from: {
        email: 'hello@eventsugi.com', // sender email (must be verified in SendGrid)
        name: 'Eventsugi LLC', // sender name
      },
      subject: 'New Inquiry Submitted',
      text: `A new inquiry has been submitted. Here are the details:\n\n` +
            `Name: ${input.name}\n` +
            `Email: ${input.email}\n` +
            `Phone: ${input.phone}\n` +
            `Message: "${input.message}"\n` +
            `Page: ${input.page}\n` +
            `Subscribe: ${input.subscribe ? 'Yes' : 'No'}\n` ,
      html: `<p>A new inquiry has been submitted. Here are the details:</p>` +
            `<ul>` +
            `<li><strong>Name:</strong> ${input.name}</li>` +
            `<li><strong>Email:</strong> ${input.email}</li>` +
            `<li><strong>Phone:</strong> ${input.phone}</li>` +
            `<li><strong>Message:</strong> "${input.message}"</li>` +
            `<li><strong>Page:</strong> ${input.page}</li>` +
            `<li><strong>Subscribe:</strong> ${input.subscribe ? 'Yes' : 'No'}</li>` +
            `</ul>`+
            `<p>Best regards,<br>The Eventsugi Team</p>`,
    };

    // Send both emails
    
      await sgMail.send(userMsg);
      await sgMail.send(adminMsg);
      return 'Done'
    })
})
