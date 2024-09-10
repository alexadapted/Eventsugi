import { NextPage } from 'next'
import Head from 'next/head'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing'
import { getMetaData } from '~/utils/meta'

const ContactUsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact Us | Eventsugi Dubai</title>
        {getMetaData(
          'Contact Us | Eventsugi Dubai',
          'Contact Eventsugi Dubai for the best Event Management Services in Dubai. We assure you the best packages and services.',
          '/contact-us',
          ['Contact Us']
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/contact-us`} />
      </Head>
      <Header />
      <Landing
        title="CONTACT US"
        subtitle="Let's get started."
        image="/Images/event-management-company/Images _ 15 Contact Us/Contact Us Banner (2).png"
      />
      <div className="section">
        <div className="flex flex-col px-4 pb-24 pt-12 sm:px-8 xl:px-24 2xl:px-32">
          <Breadcrumbs
            data={[
              {
                title: 'Home',
                link: '/'
              },
              {
                title: 'Contact Us'
              }
            ]}
          />
          <div className="mt-12" />
          <ContactUsFormSection />
          <div className="mt-4 flex flex-col items-center justify-center gap-8 lg:flex-row">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14459.37209154072!2d55.1443962!3d25.0394008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4a13d5492c3d315%3A0x210d025e9e91775!2sEventsugi%20LLC%20%7C%20Event%20Management%20Company!5e0!3m2!1sen!2sin!4v1694325176976!5m2!1sen!2sin"
              className="min-h-[450px] w-full border-0 lg:w-1/2"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUsPage
