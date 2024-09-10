import { NextPage } from 'next'
import Head from 'next/head'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { LineShape } from '~/components/LineShape'
import { Portfolios } from '~/components/Portfolios'
import { getMetaData } from '~/utils/meta'

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Eventsugi Dubai</title>
        {getMetaData(
          'Portfolio | Eventsugi Dubai',
          'Portfolio of Eventsugi',
          '/portfolio',
          ['Portfolio']
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/portfolio`} />
      </Head>
      <Header />
      <div className="bg-black text-white">
        <div className="flex min-h-screen flex-col px-4 pt-28 sm:px-8 xl:px-24 2xl:px-32">
          <Breadcrumbs
            dark={true}
            data={[
              {
                title: 'Home',
                link: '/'
              },
              {
                title: 'Portfolio'
              }
            ]}
          />
          <h1 className="mt-8 font-heading text-3xl font-bold uppercase tracking-wide lg:text-4xl xl:text-5xl">
            Portfolio
          </h1>
          <LineShape />
          <div className="grid gap-y-8 sm:gap-y-16 md:grid-cols-2">
            {/* {[
              '/Images/event-management-company/Portfolio/1.png',
              '/Images/event-management-company/Portfolio/2.png',
              '/Images/event-management-company/Portfolio/3.png',
              '/Images/event-management-company/Portfolio/4.png',
              '/Images/event-management-company/Portfolio/5.png',
              '/Images/event-management-company/Portfolio/6.png',
              '/Images/event-management-company/Portfolio/7.png',
              '/Images/event-management-company/Portfolio/8.jpg',
              '/Images/event-management-company/Portfolio/9.jpg',
              '/Images/event-management-company/Portfolio/10.jpg',
              '/Images/event-management-company/Portfolio/11.jpg'
            ].map((image, i) => (
              <div className="relative overflow-hidden px-4" key={i}>
                <Image
                  src={image}
                  layout="responsive"
                  alt={`Portfolio ${i + 1}`}
                  height={1}
                  width={1}
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
              </div>
            ))} */}
            <Portfolios />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portfolio
