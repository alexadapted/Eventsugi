import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing'
import { LineShape } from '~/components/LineShape'
import { getMetaData } from '~/utils/meta'

const AboutPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Event Production Company in Dubai | Eventsugi UAE</title>
        {getMetaData(
          'Event Production Company in Dubai | Eventsugi UAE',
          'Searching for an Event Production Company in Dubai? Eventsugi Dubai is here to provide you the Event Production Services.',
          '/about',
          ['About Us']
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/about`} />
      </Head>
      <Header />
      <Landing
        title="ABOUT US"
        subtitle="Crafting extraordinary experiences for every occasion."
        image="/Images/event-management-company/Images _ 2 About Us/1-About Us Page Banner.png"
      />
      <div>
        <div className="flex gap-12 px-4 sm:px-8 xl:px-24 2xl:px-32">
          <div className="w-full pb-24 pt-12 md:min-h-screen md:w-2/3">
            <Breadcrumbs
              data={[
                {
                  title: 'Home',
                  link: '/'
                },
                {
                  title: 'About Us'
                }
              ]}
            />
            <h2 className="mt-12 font-heading text-3xl font-extrabold uppercase tracking-wide lg:text-4xl xl:text-5xl">
              Eventsugi - Trusted Event Management Company in Dubai
            </h2>
            <LineShape />
            <p className={`font-light text-gray-600 lg:text-lg`}>
              Welcome to Eventsugi - your trusted partner in the world of event
              management in Dubai. Our commitment is resolute as we strive to
              elevate your events into unforgettable experiences. As a{' '}
              <Link href="/" className="text-[#ba96fd]">
                premier event company in UAE
              </Link>
              , we take immense pride in curating seamless and extraordinary
              events that consistently exceed expectations.
              <br />
              <br />
              Our approach is marked by meticulous attention to detail,
              innovative concepts, and an unwavering dedication that sets us
              apart as the preferred choice among event management companies in
              Dubai. We don&apos;t just organize events; we weave together
              dreams and visions into reality. Whether you&apos;re envisioning a
              grand corporate symposium, an opulent gala, or an intimate social
              gathering, we infuse passion into every element, ensuring your
              event stands as a testament to excellence.
              <br />
              <br />
              We excel, bringing together technology, creativity, and seamless
              execution to transform concepts into captivating realities. As
              your chosen Event Production Company in Dubai , we craft immersive
              experiences that captivate and inspire your audience, leaving a
              lasting impact.
            </p>
          </div>
          <div className="relative my-24 hidden w-1/3 md:block">
            <Image
              src="/Images/event-management-company/Images _ 1 Home Page/2-Home and About Us Page.png"
              fill
              alt="About Us Image"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mb-16 px-4 sm:px-8 xl:px-24 2xl:px-32">
          <h3 className="font-heading text-3xl font-bold uppercase tracking-wide text-black">
            Seamless Event Management in Abu Dhabi
          </h3>
          <br />
          <p className="font-light text-gray-600 lg:text-lg">
            For those who seek remarkable experiences beyond the bustling
            cityscape of Dubai, we extend our expertise as an event management
            company in Abu Dhabi. Just as in Dubai, our commitment remains
            unswerving, our attention to detail unwavering, and our passion for
            crafting unforgettable events undiminished. As we traverse the
            dynamic{' '}
            <Link className="text-[#ba96fd]" href="/event-planning">
              event planning
            </Link>{' '}
            landscape, from the radiant heart of Dubai to the vibrant spirit of
            Abu Dhabi, we proudly stand among the most sought-after event
            production companies in Abu Dhabi . Our unwavering commitment to
            excellence ensures that your event journey is marked by seamless
            planning, impeccable execution, and cherished memories that will be
            relished for years to come.
            <br />
            <br />
            Thank you for considering Eventsugi as your partner in orchestrating
            extraordinary events. We eagerly anticipate the opportunity to
            transform your visions into a splendid reality, whether it&apos;s
            within the bustling streets of Dubai or the captivating landscapes
            of Abu Dhabi. As an event production company, our dedication to
            creating exceptional experiences is unwavering, and we&apos;re ready
            to bring your event dreams to life. Contact us at{' '}
            <a href="tel:+971 558605027" className="text-[#ba96fd]">
              +971 558605027
            </a>{' '}
            or email us at{' '}
            <a href="mailto:hello@eventsugi.com" className="text-[#ba96fd]">
              hello@eventsugi.com
            </a>{' '}
            to explore the limitless possibilities of event innovation.
          </p>
        </div>
      </div>
      <div className="bg-black text-gray-100">
        <div className="flex flex-col px-4 py-24 sm:px-8 xl:px-24 2xl:px-32">
          <div className="w-full">
            <h2 className="font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
              Why Eventsugi?
            </h2>
            <LineShape />
            <h4 className={`my-8 text-2xl font-bold`}>Our Mission</h4>
            <p className={`font-light text-gray-200`}>
              From conceptualization to execution, we provide a comprehensive
              suite of services designed to bring your vision to life. Our team
              of expert event planners in Dubai collaborates closely with you,
              understanding your distinct requirements, crafting captivating
              themes, curating exquisite decor, coordinating premier vendors,
              and meticulously managing every logistical detail. Whether
              you&apos;re planning a gala party, a milestone celebration, or a
              grand wedding, our expertise extends its reach across the UAE as
              one of the distinguished event management companies in UAE. Our
              mission is to turn your vision into unforgettable memories.
            </p>

            <h4 className={`mb-8 mt-16 text-2xl font-bold`}>Our Values</h4>
            <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
              {[
                {
                  title: 'Customer Satisfaction',
                  text: (
                    <p>
                      Your satisfaction is our top priority. We are dedicated to
                      providing all our clients with exceptional service,
                      personalized attention, and a seamless event planning
                      experience.
                    </p>
                  )
                },
                {
                  title: 'Excellence',
                  text: 'We strive for excellence in everything we do. From event planning and coordination to customer service, we go above and beyond to exceed your expectations.'
                },
                {
                  title: 'Integrity',
                  text: 'We believe in honesty, transparency, and ethical business practices. We value open communication, maintaining the utmost integrity in all our interactions, and building long-lasting relationships.'
                }
              ].map(item => (
                <div key={item.title}>
                  <h5 className={`font-medium`}>{item.title}</h5>
                  <LineShape small />
                  <div className={`font-light text-gray-200`}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col px-4 py-24 sm:px-8 xl:px-24 2xl:px-32">
          <ContactUsFormSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage
