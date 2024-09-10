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

const eventTypes = [
  {
    name: 'WEDDING',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/1-Wedding.png',
    content:
      'Love stories deserve grand celebrations, and we are here to make your dream wedding a reality. From breathtaking venues to exquisite theme decor, we infuse every detail with love and create a day that reflects your unique journey.'
  },
  {
    name: 'ENGAGEMENT',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Engagement.png',
    content:
      "Your love deserves to be celebrated in style. Let us curate a mesmerizing engagement event that captures the essence of your romance. With personalized touches and thoughtful surprises, we'll set the stage for a lifetime of happiness."
  },
  {
    name: 'BRIDAL SHOWER',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Bridal Shower.png',
    content:
      'Toast to the bride-to-be and her upcoming journey with an unforgettable bridal shower. From glamorous themes to delightful activities, we create an atmosphere of joy and anticipation, making the bride feel cherished and loved.'
  },
  {
    name: 'ANNIVERSARY',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/1-Anniversary.png',
    content:
      'Milestones are meant to be celebrated, and your anniversary deserves a special tribute. Allow us to create an intimate and meaningful event that honors your enduring love story, creating memories to last a lifetime.'
  },
  {
    name: 'BIRTHDAY PARTY',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Birthday Party.png',
    content:
      "Birthdays are moments to embrace your inner child and celebrate life. With our expert event planning, we'll make each birthday party a magical experience, filled with joy, surprises, and the warmth of loved ones.",
    link: '/social-events/birthday'
  },
  {
    name: 'BABY SHOWER',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Baby Shower.png',
    content:
      'The arrival of a little one brings immeasurable joy. Let us create a whimsical and heartwarming baby shower setup that reflects your excitement and love. From decor to entertainment, it will be a day filled with happiness.'
  },
  {
    name: 'GENDER REVEAL',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Gender Reveal.png',
    content:
      'Discovering the gender of your baby is a moment of pure delight. Our team specializes in creating captivating gender reveal events that build anticipation and create lifelong memories. Get ready to celebrate this joyful surprise in style.'
  },
  {
    name: 'COCKTAIL PARTY',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Cocktail Party.png',
    content:
      "Raise a glass and indulge in the art of mingling at a sophisticated cocktail party. From handcrafted drinks to elegant ambiance, we'll curate an experience that exudes refinement, allowing you to savor every conversation and connection."
  },
  {
    name: 'GRADUATION',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Graduation.png',
    content:
      "Achievements are worth celebrating, and we'll help you honor your graduate's accomplishments with an exceptional graduation party. Whether it's a high school milestone or a university triumph, our expertise ensures a remarkable celebration of success."
  },
  {
    name: 'PROPOSAL',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Proposal.png',
    content:
      "Love deserves its moment of celebration. Allow us to design a setting that's picture-perfect for your proposal, customizing each detail to align with your unique love story. Prepare to step into the next chapter of your journey, marked by an unforgettable and cherished moment."
  },
  {
    name: 'BRUNCH PARTY',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Brunch Party2.jpg',
    content:
      "Embrace the joy with a delightful brunch party. We'll design a relaxed and inviting atmosphere where friends and family can gather, indulge in delectable cuisine, and create beautiful memories over laughter and conversation."
  },
  {
    name: 'FESTIVAL CELEBRATION',
    image:
      '/Images/event-management-company/Images _ 13 Social Events/Festival Celebration.png',
    content:
      "We excel in curating extraordinary festival experiences that leave a lasting impression. Whether it's an Eid celebration, Christmas, National Day, New Year celebration, or any other cultural festival, our expertise lies in infusing a personalized touch that brings the essence of the occasion to life."
  }
]

const faqs = [
  {
    question:
      'Can you provide guidance on selecting the perfect theme decor for my event?',
    answer:
      'Absolutely, we offer expert assistance in theme decor selection for your event. Collaborating closely with you, we delve into your vision and preferences, meticulously curating a collection of theme decor options that seamlessly align with your requirements and budget.'
  },
  {
    question: 'Can you help with invitations and guest management?',
    answer:
      'Certainly, we specialize in invitations and guest management. Our dedicated team comprehends your guest list and preferences, crafting a range of invitation choices tailored to your specifications and budget. Moreover, we efficiently handle RSVPs and guest lists, ensuring all elements are meticulously arranged for your event.'
  },
  {
    question:
      "How do you create an event experience that's truly unique to each client?",
    answer:
      'Our philosophy revolves around infusing every event with elegance and distinction. Our seasoned professionals blend their wealth of expertise and creativity to bring your vision to life. By closely collaborating with you, we gain insights into your distinct requirements and preferences. This enables us to propose a curated array of options that perfectly suit your needs and budget. Additionally, we expertly manage all logistical aspects, encompassing transportation, accommodation, and beyond'
  },
  {
    question:
      'Do you offer event coordination services on the day of the event?',
    answer:
      'Yes, we offer event coordination services on the day of the event. We will work closely with you to understand your unique requirements and preferences, and then curate a list of options that best suit your needs and budget. We will also manage all logistical aspects of your event, including transportation, accommodation, and more.'
  }
]

const SocialEvents: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dubai Party Planners | Eventsugi UAE</title>
        {getMetaData(
          'Dubai Party Planners | Eventsugi UAE',
          'Eventsugi Dubai Party Planners is the perfect choice for any kind of events. Make the event special with our excellent services',
          '/social-events',
          ['Social Events']
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
          href={`https://www.eventsugi.com/social-events`}
        />
      </Head>
      <Header />
      <Landing
        title="SOCIAL EVENTS"
        subtitle="We Create Magical Experiences."
        image="/Images/event-management-company/Images _ 13 Social Events/Social Banner.png"
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
                  title: 'Social Events'
                }
              ]}
            />
            <h2 className="mt-8 text-center font-heading text-3xl font-extrabold uppercase lg:text-4xl">
              Why Choose Eventsugi Among Top Event Management Companies in
              Dubai?
            </h2>
            <p className={`mt-8 px-4 text-center font-light text-gray-700`}>
              In the realm of event planning, Eventsugi stands out as more than
              just a typical organizer - we are the architects of dreams. When
              you join forces with us, you&apos;re aligning with a team that
              comprehends your vision and transforms it into a tangible reality.
              As seasoned{' '}
              <Link href="/event-planning" className="text-[#ba96fd]">
                Event organizers
              </Link>{' '}
              in Dubai, we adeptly manage every aspect of your event with
              finesse - from initial ideation and strategic planning to flawless
              execution and beyond. Eventsugi welcomes you into a world where
              every event becomes a canvas for Dubai event management
              excellence. We possess a unique mastery in infusing enchantment
              into every intricate detail, transforming ordinary moments into
              extraordinary, enduring memories.
              <br />
              <br />
              Our unparalleled passion distinguishes us as a leading{' '}
              <Link href="/" className="text-[#ba96fd]">
                Event Management Company in Dubai
              </Link>
              . We take immense pride in crafting unforgettable experiences that
              leave an indelible mark. Our team comprises seasoned professionals
              who meld expertise and creativity, channeling their dedication to
              transform your distinct vision into a splendid reality. Choose
              Eventsugi today and witness your dreams undergo a breathtaking
              transformation into a vivid, tangible reality. As dedicated Dubai
              party planners, we&apos;re here to make your events truly
              exceptional.
            </p>

            <div className="mt-16 flex flex-col gap-16 md:grid md:grid-cols-2 xl:grid-cols-3">
              {eventTypes.map(service => (
                <Link
                  href={service.link || '/contact-us'}
                  key={service.name}
                  className="flex flex-col gap-4 text-center"
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

export default SocialEvents
