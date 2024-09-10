import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

const Custom404: NextPage = () => {
  return (
    <div>
      <Head>
        <title>404 Page Not Found</title>
      </Head>
      <Header />
      <div className="flex h-[100vh] flex-col items-center justify-center gap-2 bg-gray-950 px-2 text-gray-50">
        <span>
          <HiOutlineEmojiSad className="h-10 w-10" />
        </span>
        <h1 className="text-3xl">404 Page Not Found</h1>
        <Link
          href="/"
          className="text-lg text-blue-500 underline underline-offset-2 transition-all hover:text-[#ba96fd] focus:text-[#ba96fd]"
        >
          Go Back
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Custom404
