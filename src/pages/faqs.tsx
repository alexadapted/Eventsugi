import { NextPage } from 'next'
import Head from 'next/head'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { FAQs } from '~/components/FAQs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { allFaqs } from '~/utils/allFaqs'
import { getMetaData } from '~/utils/meta'

const faqs: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FAQ | Eventsugi Dubai</title>
        {getMetaData(
          'FAQ | Eventsugi Dubai',
          'Explore our comprehensive FAQ page to find answers to commonly asked questions. Streamline your experience by browsing through our frequently updated FAQ section of Eventsugi Dubai',
          '/faqs',
          ['FAQ', 'FAQs']
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/faqs`} />
      </Head>
      <Header forceDark={true} />
      <div className="bg-black px-4 pt-28">
        <Breadcrumbs
          dark={true}
          data={[
            {
              title: 'Home',
              link: '/'
            },
            {
              title: 'FAQs'
            }
          ]}
        />
      </div>
      <FAQs faqs={allFaqs} useH1={true} />
      <Footer />
    </div>
  )
}

export default faqs
