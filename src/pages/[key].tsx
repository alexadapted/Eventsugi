import { NextPage } from 'next'
import Head from 'next/head'
import { useSearchParams } from 'next/navigation'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import { FAQs } from '~/components/FAQs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing'
import { LineShape } from '~/components/LineShape'
import { getMetaData } from '~/utils/meta'
import { api } from '~/utils/trpc'

const ServicePage: NextPage = () => {
  const { get } = useSearchParams()

  const { data: service } = api.service.getOne.useQuery(get('key') as string)

  if (!service) {
    return null
  }

  return (
    <div>
      <Head>
        <title>{service.pageTitle}</title>
        {getMetaData(
          service.pageTitle,
          service.metaDescription,
          `/${service.slug}`,
          ['Services', service.name]
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link
          rel="canonical"
          href={`https://www.eventsugi.com/${service.slug}`}
        />
      </Head>
      <Header />
      <Landing
        title={service.name}
        subtitle={service.tagLine}
        image={service.image?.url || ''}
      />
      <div className="bg-white text-gray-900">
        <div className="flex flex-col px-4 pb-16 pt-8 sm:px-8 xl:px-24 2xl:px-32">
          <Breadcrumbs
            data={[
              {
                title: 'Home',
                link: '/'
              },
              {
                title: 'Services',
                link: '/services'
              },
              {
                title: service.name.toUpperCase()
              }
            ]}
          />
          <h2 className="mt-8 text-center font-heading text-3xl font-semibold uppercase lg:text-5xl">
            {service.heading}
          </h2>
          <p
            className={`mt-8 text-center font-light text-gray-700 sm:px-2 lg:px-8`}
          >
            {service.description}
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12 xl:gap-16">
            {service.serviceFeatures.map(card => (
              <div
                key={card.title}
                className="text-2xl font-bold text-gray-900 md:text-3xl"
              >
                <h4 className="font-heading uppercase">{card.title}</h4>
                <LineShape />
                <p className={`text-lg font-light text-gray-800`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          {/* {service.secondPage.endline ? (
            <div>
              <p className="mt-12 text-left font-light text-gray-700 sm:text-center">
                {service.secondPage.endline}
              </p>
            </div>
          ) : null}
          {service.secondPage.endline2 ? (
            <div>
              <p className="mt-4 text-left font-light text-gray-700 sm:text-center">
                {service.secondPage.endline2}
              </p>
            </div>
          ) : null} */}
        </div>
      </div>
      <FAQs faqs={service.faqs} />
      <div>
        <div className="flex flex-col px-4 py-24 sm:px-8 xl:px-24 2xl:px-32">
          <ContactUsFormSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ServicePage
