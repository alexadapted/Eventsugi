import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import { FAQs } from '~/components/FAQs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing'
import { getMetaData } from '~/utils/meta'
// import { services } from '~/utils/services'
import { api } from '~/utils/trpc'

const faqs = [
  {
    question: 'What types of events do you specialize in?',
    answer: (
      <p>
        At Eventsugi, we specialize in a wide range of events, including{' '}
        <Link href="/corporate-events" className="text-[#ba96fd]">
          corporate events
        </Link>
        , social celebrations, and{' '}
        <Link href="/theme-decoration" className="text-[#ba96fd]">
          themed parties
        </Link>
        . As top event planners in Dubai, our expertise covers everything from
        corporate events to milestone celebrations, ensuring each event is a
        unique and unforgettable experience.
      </p>
    )
  },
  {
    question: 'How do you handle event logistics and coordination?',
    answer:
      'We will work closely with you to understand your unique requirements and preferences. We will then curate a list of vendors and venues that best suit your needs and budget. We will coordinate with all vendors and venues to ensure that everything is in place for your event. We will also manage all logistical aspects of your event, including transportation, accommodation, and more.'
  },
  {
    question: 'How far in advance should I book your services?',
    answer: (
      <p>
        To ensure a well-planned event, we recommend booking our{' '}
        <Link href="/event-planning" className="text-[#ba96fd]">
          Event planners in the UAE
        </Link>{' '}
        as early as possible. With intricate preparations and vendor
        coordination, early booking allows us to tailor our services to your
        vision and secure the best suppliers. This ensures a stress-free and
        exceptional event experience.
      </p>
    )
  },
  {
    question:
      'Can you assist with obtaining necessary permits or licenses for the event?',
    answer:
      'Certainly, as a leading event management company in UAE, we are well-versed in local regulations. Our experienced event organizers in UAE can guide you through obtaining permits and licenses to ensure your event is compliant with legal standards. Trust us to handle the necessary paperwork, allowing you to fully enjoy your event.'
  }
]

const ServicesPage: NextPage = () => {
  const { data: services } = api.service.getAll.useQuery()

  if (!services) return null

  return (
    <div>
      <Head>
        <title>Services | Eventsugi</title>
        {getMetaData('Services | Eventsugi', undefined, '/services', [
          'Services',
          ...services.map(s => s.name)
        ]).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/services`} />
      </Head>
      <Header />
      <Landing
        title="SERVICES"
        subtitle="Setting the stage for unforgettable moments."
        image="/Images/event-management-company/Images _ 3 Services/Banner Image.png"
      />
      <div className="bg-white text-gray-900">
        <div className="flex flex-col px-4 pb-16 pt-8 sm:px-8 xl:px-24 2xl:px-32">
          <div className="w-full">
            <Breadcrumbs
              data={[
                {
                  title: 'Home',
                  link: '/'
                },
                {
                  title: 'Services'
                }
              ]}
            />
            <h2 className="mt-8 text-center font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
              Eventsugi - One of the Leading Event Management Agencies In Dubai
            </h2>
            <p className={`mt-8 px-4 text-center font-light text-gray-700`}>
              At our event company in Dubai, we firmly believe in the
              transformative power of every moment. It&apos;s an opportunity to
              craft memories that linger, and that&apos;s precisely what we
              strive to achieve. Our comprehensive suite of{' '}
              <Link href="/" className="text-[#ba96fd]">
                Event Services
              </Link>{' '}
              is meticulously tailored to turn your vision into a reality that
              not only meets but exceeds your expectations. Fueled by an
              unwavering passion for excellence and a keen eye for detail, we
              specialize in curating unforgettable experiences for every
              occasion. When you choose to collaborate with us, you&apos;re
              choosing to partner with a team that not only comprehends your
              vision but possesses the expertise to transform it into reality.
              As seasoned Event Organizers in Dubai , we flawlessly manage every
              facet of your event - from the initial spark of ideation and
              meticulous planning to flawless execution and even beyond.
              <br />
              <br />
              Our forte lies in orchestrating a symphony of Event Planning,
              seamlessly choreographing transitions from concept to execution.
              Our expertise spans diverse domains ensuring that every element of
              your event is infused with panache and sophistication. We are not
              only event planners but creators of memories that linger in the
              hearts of attendees. Reach out to us at{' '}
              <a className="text-[#ba96fd]" href="tel:+971558605027">
                +971558605027
              </a>{' '}
              or email{' '}
              <a className="text-[#ba96fd]" href="mailto:hello@eventsugi.com">
                hello@eventsugi.com
              </a>{' '}
              to embark on a journey where events become extraordinary
              narratives.
            </p>

            <div className="mt-16 flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-2 xl:grid-cols-3">
              {services.map(service => (
                <Link
                  key={service.name}
                  href={'/' + service.slug}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="relative">
                    <Image
                      src={service.image?.url || ''}
                      alt={service.name}
                      className="object-cover brightness-75 transition-all duration-300 hover:brightness-50"
                      layout="responsive"
                      width={1}
                      height={1}
                    />
                    <span
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-heading text-2xl font-semibold uppercase text-gray-100`}
                    >
                      {service.name}
                    </span>
                  </div>
                  <div>
                    <button className="border px-3 py-2.5 text-lg font-bold outline-none transition-all duration-300 hover:ring hover:ring-purple-300 focus:ring focus:ring-purple-300">
                      KNOW MORE
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <FAQs faqs={faqs} />
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

export default ServicesPage
