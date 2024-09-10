import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { BsCheck2Circle } from 'react-icons/bs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

const ThankYouPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thank You</title>
        <link rel="canonical" href={`https://www.eventsugi.com/thank-you`} />
      </Head>
      <Header forceDark={true} />
      <div className="flex h-screen flex-col items-center justify-center gap-2 bg-gray-50 px-2 text-gray-900">
        <BsCheck2Circle className="mb-4 h-24 w-24 text-green-600" />
        <h1 className="font-heading text-5xl font-bold">THANK YOU!</h1>
        <p className="text-gray-800">
          Thanks for reaching out. We will get back to you as soon as possible.
        </p>
        <Link
          href="/contact-us"
          className="text-lg text-blue-500 underline underline-offset-2 transition-all hover:text-[#ba96fd] focus:text-[#ba96fd]"
        >
          Go Back
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default ThankYouPage
