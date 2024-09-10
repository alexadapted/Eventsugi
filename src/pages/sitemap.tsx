import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { CatalogDialog } from '~/components/ContactUsForm'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { LineShape } from '~/components/LineShape'
import { getMetaData } from '~/utils/meta'
import { services } from '~/utils/services'

const Sitemap: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sitemap | Eventsugi Dubai</title>
        {getMetaData(
          'Sitemap | Eventsugi Dubai',
          'Access all the important pages and content on our website. Simplify your browsing experience and discover valuable information about the best Dubai Party Planners.',
          '/sitemap',
          ['Sitemap']
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/sitemap`} />
      </Head>
      <Header forceDark={true} />
      <div className="min-h-screen px-4 py-32 sm:px-8 xl:px-24 2xl:px-32">
        <h1 className="font-heading text-2xl font-extrabold uppercase lg:text-3xl xl:text-4xl">
          Sitemap
        </h1>
        <LineShape />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h3>
              <Link
                href="services"
                className="-ml-2 text-xl font-semibold text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
              >
                Services
              </Link>
            </h3>
            {services.map(service => (
              <Link
                key={service.key}
                href={`/${service.key}`}
                className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
              >
                {service.name2}
              </Link>
            ))}
            <Link
              href="/digital-marketing/seo"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              SEO
            </Link>
            <Link
              href="/digital-marketing/google-ads"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Google Ads
            </Link>
            <Link
              href="/digital-marketing/social-media"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Social Media
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="-ml-2 text-xl font-semibold">Company</h3>
            <Link
              href="/about"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              About Us
            </Link>
            <div>
              <CatalogDialog>
                <div className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]">
                  Catalog
                </div>
              </CatalogDialog>
            </div>
            <Link
              href="/portfolio"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Portfolio
            </Link>
            <Link
              href="/testimonials"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Testimonials
            </Link>
            <h3 className="-ml-2 mt-2 text-xl font-semibold">Events</h3>
            <Link
              href="/event-planning"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Event Planning
            </Link>
            <Link
              href="/social-events"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Social Events
            </Link>
            <Link
              href="/social-events/birthday"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Birthday Party
            </Link>
            <Link
              href="/corporate-events"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Corporate Events
            </Link>
            <h3 className="-ml-2 mt-2 text-xl font-semibold">
              Customer Services
            </h3>
            <Link
              href="/privacy"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              Contact Us
            </Link>
            <Link
              href="/faqs"
              className="text-blue-600 underline underline-offset-4 transition-all hover:text-[#ba96fd]"
            >
              FAQs
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sitemap
