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

const services = [
  {
    name: 'CONFERENCE',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Conference.png',
    content:
      "Immerse yourself in meticulously executed conferences that serve as catalysts for engagement, networking, and impactful insights. Our focus is on creating an environment where knowledge flows seamlessly, leaving a lasting imprint on attendees' professional journeys."
  },
  {
    name: 'EXHIBITIONS',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Exhibitions.png',
    content:
      "Transform spaces into immersive realms that spotlight your offerings, enabling meaningful interactions and fostering connections that drive business growth. Our expert curation ensures attendees experience your brand's essence and offerings, leaving a profound impact."
  },
  {
    name: 'FAMILY DAY',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Family Day.png',
    content:
      'Infuse joy into family-oriented events by combining entertainment, interactive activities, and moments of bonding. Our meticulously crafted experiences cater to all ages, leaving cherished memories that resonate long after the event.'
  },
  {
    name: 'GALA DINNER PARTY',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Gala Dinner Party.png',
    content:
      'Elevate events to new heights with opulent venues, refined decor, world-class gastronomy, and captivating entertainment. We orchestrate experiences that exude sophistication, creating indelible memories for esteemed guests.'
  },
  {
    name: 'AWARD CEREMONY',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Award Ceremony.png',
    content:
      "Our meticulous approach to award ceremonies ensures every accolade is presented with prestige and significance. Celebrate outstanding talents within your organization with an event that's both memorable and impactful."
  },
  {
    name: 'ANNUAL DAY',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Annual Day.png',
    content:
      "We craft annual events that celebrate achievements, fostering unity and pride among employees. The atmosphere reflects your organization's culture, creating an event that resonates deeply with all attendees."
  },
  {
    name: 'BRAND LAUNCH',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Brand Launch.png',
    content:
      "Entrust us with your brand launch and witness innovative strategies that capture attention and ignite excitement. Our creativity and execution ensure your brand's message resonates effectively, leaving a lasting impression."
  },
  {
    name: 'GRAND OPENING',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Grand Opening.png',
    content:
      "Mark new beginnings with an inviting atmosphere that embodies your company's values. Our expertise transforms office openings into celebrations of growth and success, leaving a positive and lasting impression on guests."
  },
  {
    name: 'TEAM BUILDING',
    image:
      '/Images/event-management-company/Images _ 14 Corporate Events/Team Building.png',
    content:
      'Strengthen teamwork and camaraderie with customized programs that go beyond activities. Our immersive experiences foster collaboration, positive work culture, and lasting connections among team members.'
  }
]

const faqs = [
  {
    question:
      'Can you assist with venue selection and booking for corporate events?',
    answer:
      "Absolutely! Our team specializes in providing top-notch support for venue selection and booking for corporate events. We collaborate closely with you to comprehend your specific requirements and preferences. Subsequently, we meticulously curate a comprehensive array of venues that perfectly align with your criteria and financial plan. Our involvement doesn't stop there - we also seamlessly liaise with the chosen venue to ensure flawless arrangements, guaranteeing your event's success."
  },
  {
    question:
      'Do you assist in managing event registration and attendee coordination?',
    answer:
      'Certainly, we offer comprehensive support for managing event registration and attendee coordination. Our team works closely with you to grasp your preferences and needs. Subsequently, we provide a curated list of registration and attendee management options that align with your budget. Moreover, we handle all aspects of registration and attendee management to ensure a seamless event experience.'
  },
  {
    question: 'Can you assist with corporate branding and signage for events?',
    answer:
      "Absolutely, our team is ready to provide assistance with corporate branding and signage for your events. We'll collaborate closely with you to comprehend your preferences and requirements. Afterward, we'll create a customized collection of branding and signage options that perfectly align with your budget and needs. Additionally, we'll take care of all the details related to branding and signage to guarantee a flawless setup for your event."
  },
  {
    question:
      'Do you offer on-site event coordination services for corporate functions?',
    answer:
      'Yes, we provide specialized on-site event coordination services tailored for corporate functions. Our team closely interacts with you to comprehend your preferences and requirements. Subsequently, we offer a personalized list of options that align with your budget. Furthermore, we meticulously manage all logistical aspects of your event, encompassing transportation, accommodation, and more, to ensure a seamless corporate function.'
  }
]

const CorporateEvents: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Corporate Event Services in Dubai | Eventsugi UAE</title>
        {getMetaData(
          'Corporate Event Services in Dubai | Eventsugi UAE',
          'Eventsugi Dubai will help you plan the best Corporate Events. Our expert team will work to make the perfect event planning for you.',
          '/corporate-events',
          ['Corporate Events']
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
          href={`https://www.eventsugi.com/corporate-events`}
        />
      </Head>
      <Header />
      <Landing
        title="CORPORATE EVENTS"
        subtitle="Innovate, Connect, Celebrate."
        image="/Images/event-management-company/Images _ 14 Corporate Events/Corporate Banner.png"
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
                  title: 'Corporate Events'
                }
              ]}
            />
            <h2 className="mt-8 text-center font-heading text-3xl font-extrabold uppercase lg:text-4xl">
              Corporate Events Services in Dubai
            </h2>
            <p className={`mt-8 px-4 text-center font-light text-gray-700`}>
              Our corporate event services in Dubai cater to events of all
              scales, from grand conferences to intimate networking occasions.
              Our devoted team offers proactive guidance, creative concepts, and
              seamless communication to ensure your event&apos;s success. At
              Eventsugi, we recognize the distinctiveness of each corporate
              event. Our strength lies in customization. Collaborating closely
              with you, we grasp your event aspirations and create bespoke
              solutions aligned with your brand, vision, and budget.
              <br />
              <br />
              Crafting excellence is our guiding principle. From strategic
              logistics planning to intricate decor, each facet of your
              Corporate Event is meticulously executed. This ensures a seamless
              journey for both you and your attendees. In the realm of corporate
              events, innovation is paramount. Choose Eventsugi as your partner
              in crafting noteworthy Corporate Events in Dubai. Our creative
              team infuses your{' '}
              <Link className="text-[#ba96fd]" href="/">
                event
              </Link>{' '}
              with distinct ideas that set it apart, ensuring an enduring
              experience for your attendees. Reach out to us at{' '}
              <a href="tel:+971558605027" className="text-[#ba96fd]">
                +971558605027
              </a>{' '}
              to embark on this journey of excellence.
            </p>

            <div className="mt-16 flex flex-col gap-16 md:grid md:grid-cols-2 xl:grid-cols-3">
              {services.map(service => (
                <div
                  key={service.name}
                  className="flex flex-col  gap-4 text-center"
                >
                  <div className="relative bg-black">
                    <Image
                      src={service.image}
                      alt={service.name}
                      className="object-cover transition-all duration-300"
                      layout="responsive"
                      width={1}
                      height={1}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25" />
                    <span
                      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-2xl font-semibold uppercase text-gray-100`}
                    >
                      {service.name}
                    </span>
                  </div>
                  <div>{service.content}</div>
                </div>
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

export default CorporateEvents
