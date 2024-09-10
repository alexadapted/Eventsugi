import { useRouter } from 'next/router'
import { FC, ReactNode, RefObject, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { api } from '~/utils/trpc'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger
} from './Dialog'
import { LineShape } from './LineShape'

const captchaSiteKey = '6Lf8hBMoAAAAAHOXpr_mFNmSxTO_1kKpnMwM56DE'

const ContactUsForm: FC<{
  isCatalog?: boolean
}> = ({ isCatalog }) => {
  // ? useState
  const [submitted, setSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState('')

  // ? useMutation
  const { mutateAsync: createInquiry, isLoading } =
    api.contactUsLeads.createOne.useMutation()

  // ? useRef
  const formRef = useRef<HTMLFormElement>(null)
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null)

  // ? useRouter
  const router = useRouter()

  return (
    <form
      ref={formRef}
      className="flex w-full flex-col gap-8 sm:w-3/5"
      onSubmit={async e => {
        e.preventDefault()

        if (!isCatalog && !captchaToken) return alert('Please verify captcha')

        const target = e.currentTarget as any
        const name = target.name.value.trim()
        const email = target.email.value.trim()
        const message = target.message?.value?.trim()
        const phone = target.phone.value.trim()
        const subscribe = target.subscribe?.checked || false

        try {
          await createInquiry({
            name,
            email,
            message,
            phone,
            page: window.location.href,
            subscribe,
            captchaToken: !isCatalog ? captchaToken : undefined,
            type: isCatalog ? 'Catalog' : 'Contact'
          })
          setSubmitted(true)
          formRef.current?.reset()
          setCaptchaToken('')
          if (!isCatalog) {
            router.push('/thank-you')
          } else {
            window.open('/Eventsugi.pdf', '_blank')
          }
        } catch (error: any) {
          if (error?.data?.zodError?.fieldErrors) {
            alert('Invalid ' + Object.keys(error.data.zodError.fieldErrors)[0])
          } else
            alert(
              error.message || 'Something went wrong, please try again later'
            )
        }
      }}
    >
      <input
        className="border border-gray-700 px-5 py-2.5 text-gray-800 outline-none transition-all duration-300 focus:border-[#ba96fd] focus:ring focus:ring-[#ba96fd]"
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        className="border border-gray-700 px-5 py-2.5 text-gray-800 outline-none transition-all duration-300 focus:border-[#ba96fd] focus:ring focus:ring-[#ba96fd]"
        type="text"
        placeholder="Email"
        name="email"
        required
      />
      <input
        className="border border-gray-700 px-5 py-2.5 text-gray-800 outline-none transition-all duration-300 focus:border-[#ba96fd] focus:ring focus:ring-[#ba96fd]"
        type="tel"
        placeholder="Phone"
        name="phone"
        required
      />
      {!isCatalog! ? (
        <textarea
          className="border border-gray-700 px-5 py-2.5 text-gray-800 outline-none transition-all duration-300 focus:border-[#ba96fd] focus:ring focus:ring-[#ba96fd]"
          placeholder="Message"
          name="message"
          rows={3}
          required
        />
      ) : null}
      {!isCatalog ? (
        <div className="flex items-center gap-2">
          <input
            name="subscribe"
            className="h-4 w-4 border border-gray-700 outline-none transition-all duration-300 focus:ring"
            type="checkbox"
            defaultChecked
          />
          <span className="text-gray-800">Subscribe to our newsletter</span>
        </div>
      ) : null}
      {!isCatalog ? (
        <ReCAPTCHA
          size="normal"
          sitekey={captchaSiteKey}
          onChange={(token: any) => setCaptchaToken(token || '')}
          ref={recaptcha}
        />
      ) : null}
      <button
        type="submit"
        className="max-w-max border border-gray-700 px-4 py-2.5 text-lg font-medium text-gray-950 outline-none transition-all duration-300 hover:border-[#ba96fd] hover:text-[#ba96fd] focus:border-[#ba96fd] focus:ring focus:ring-[#ba96fd] disabled:cursor-not-allowed"
        disabled={isLoading || submitted}
      >
        {!isCatalog ? 'Send' : 'Download'}
      </button>
    </form>
  )
}

export const CatalogDialog: FC<{ children: ReactNode }> = ({ children }) => (
  <Dialog>
    <DialogTrigger>{children}</DialogTrigger>
    <DialogContent>
      <div className="pb-2 pt-3">
        <div className="mb-3">
          <DialogDescription>
            Please fill in the below details to download our catalog
          </DialogDescription>
        </div>
        <ContactUsForm isCatalog />
      </div>
    </DialogContent>
  </Dialog>
)

export const ContactUsFormSection: FC = () => {
  return (
    <div className="w-full">
      <h2 className="font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
        Let&apos;s Bring Your Vision to Life
      </h2>
      <LineShape />
      <p className={`font-light text-gray-800`}>
        Ready to start planning your dream event? We can&apos;t wait to hear
        from you!
      </p>
      <div className="mt-12 flex flex-col items-start justify-center gap-12 sm:flex-row">
        <ContactUsForm />
        <div className="mt-8 w-full sm:mt-0 sm:block sm:w-2/5">
          <h4 className="text-xl font-bold text-gray-950">Contact Us</h4>
          <div
            className={`mt-3 flex flex-col gap-1 text-lg font-light text-gray-700`}
          >
            <a
              className="flex items-center justify-start gap-1"
              href="mailto:hello@eventsugi.com"
            >
              <span>
                <AiOutlineMail />
              </span>
              <span>hello@eventsugi.com</span>
            </a>
            <a
              className="flex items-center justify-start gap-1"
              href="https://wa.me/+971558605027"
            >
              <span>
                <AiOutlineWhatsApp />
              </span>
              <span>+971 558605027</span>
            </a>
            <a
              className="flex items-center justify-start gap-1"
              href="tel:+971558605027"
            >
              <span>
                <BsTelephone />
              </span>
              <span>+971 558605027</span>
            </a>
          </div>
          <h5 className="mb-2 mt-12 text-xl font-bold text-gray-950">
            Download our catalog below
          </h5>
          <CatalogDialog>
            <div className="cursor-pointer border border-gray-700 px-6 py-2 outline-none transition-all hover:border-[#ba96fd] hover:text-[#ba96fd] focus:border-[#ba96fd] focus:text-[#ba96fd]">
              CATALOG
            </div>
          </CatalogDialog>
        </div>
      </div>
    </div>
  )
}
