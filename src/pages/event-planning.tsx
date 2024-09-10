import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import { FAQs } from '~/components/FAQs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing'
import { LineShape } from '~/components/LineShape'
import { getMetaData } from '~/utils/meta'

const faqs = [
  {
    question: 'What types of events do you specialize in planning?',
    answer: (
      <p>
        We specialize in planning a wide range of events, including{' '}
        <Link href="/corporate-events" className="text-[#ba96fd]">
          corporate conferences
        </Link>
        , weddings,{' '}
        <Link href="/social-events" className="text-[#ba96fd]">
          social gatherings
        </Link>
        ,{' '}
        <Link href="/theme-decoration" className="text-[#ba96fd]">
          themed parties
        </Link>
        , and much more.
      </p>
    )
  },
  {
    question: 'Can you help with event planning in Abu Dhabi as well?',
    answer:
      'Absolutely! We offer event planning services in both Dubai and Abu Dhabi, tailoring our expertise to match the unique atmosphere of each city.'
  },
  {
    question: 'What sets your event planning services apart from others?',
    answer:
      'Our approach is characterized by creativity, attention to detail, and a personalized touch. We work closely with you to ensure your vision is translated into a memorable event.'
  },
  {
    question: 'Can you assist with finding event venues?',
    answer: (
      <p>
        Yes, we have a network of{' '}
        <Link href="/venue-management" className="text-[#ba96fd]">
          trusted venues in Dubai
        </Link>
        , Abu Dhabi and all over UAE. We can recommend suitable venue options
        based on your event&apos;s requirements.
      </p>
    )
  },
  {
    question:
      'Do you offer event planning for both small and large gatherings?',
    answer:
      'Absolutely, our event planning services cater to gatherings of all sizes, from intimate affairs to grand celebrations. Each event receives our dedicated attention.'
  }
]

const EventPlanningPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Event Planners in Dubai, Event Organisers | Eventsugi UAE</title>
        {getMetaData(
          'Event Planners in Dubai, Event Organisers | Eventsugi UAE',
          'Top Event Planners in Dubai UAE. Contact the experts in Event organising, Eventsugi Dubai UAE.',
          '/event-planning',
          ['Event Planning', 'Event Organisers']
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
          href={`https://www.eventsugi.com/event-planning`}
        />
      </Head>
      <Header />
      <Landing
        title="EVENT PLANNING"
        subtitle="Crafting Extraordinary Moments"
        image="/Images/event-management-company/Images _ 16 Event Planning/Banner.png"
      />
      <div className="bg-white text-gray-900">
        <div className="flex flex-col px-4 pb-16 pt-8 sm:px-8 md:py-24 xl:px-24 xl:py-32 2xl:px-32">
          <Breadcrumbs
            data={[
              {
                title: 'Home',
                link: '/'
              },
              {
                title: 'Event Planning'
              }
            ]}
          />
          <h2 className="mt-8 text-center font-heading text-3xl font-semibold uppercase lg:text-5xl">
            Event Planning in Dubai
          </h2>
          <p className="mt-8 text-center font-light text-gray-700 sm:px-2 lg:px-8">
            {
              'Welcome to Eventsugi, where dreams evolve into memorable experiences. As one of the premier event organizers in Dubai, we specialize in transforming your ideas into reality, crafting seamless and extraordinary events that leave a lasting impression. Our team of dedicated professionals understands the nuances of event planning, ensuring every detail aligns with your vision to create moments that are truly unforgettable.'
            }
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12 xl:mt-24 xl:gap-16">
            {[
              {
                title: 'Expertise Beyond Expectations: Dubai Event Organizers',
                subtitle:
                  'When it comes to orchestrating events that exceed expectations, our expertise speaks for itself. As one of the top event organisers in Dubai, we blend creativity, innovation, and precision to curate events that are uniquely tailored to your preferences. From corporate events that inspire to extravagant social parties that delight, our commitment to excellence is evident in every aspect of our planning process.'
              },
              {
                title: 'Personalised Touch: Event Planning in Dubai and Beyond',
                subtitle:
                  "We understand that no two events are alike, which is why our event planning services are characterized by a personalised touch. Our Dubai event organizers collaborate closely with you, taking the time to understand your vision, objectives, and desired outcomes. Whether it's a corporate conference, a themed party, or a grand wedding, we tailor our approach to match your unique aspirations."
              },
              {
                title: 'A Symphony of Detail: Event Planner Abu Dhabi',
                subtitle:
                  'Our expertise extends beyond Dubai to the vibrant city of Abu Dhabi. As sought-after event planners in Abu Dhabi, we infuse every event with meticulous planning and creative flair. From intimate gatherings in the heart of the city to grand celebrations by the coast, we ensure that every element harmonizes with the setting and atmosphere.'
              },
              {
                title: 'From Vision to Reality: Trusted Party Planners',
                subtitle:
                  'When you envision an event, we embark on a journey to bring that vision to life. Our party planners in Dubai specialize in curating celebrations that resonate with your style and preferences. From crafting captivating themes to coordinating every logistical detail, we ensure that your party is a seamless fusion of creativity and execution'
              },
              {
                title: 'Beyond the Expected Event Organisation UAE',
                subtitle:
                  "Event organisation is not just about logistics; it's about creating an immersive experience that captivates all senses. Our team delves into every detail, crafting environments that evoke emotions, spark conversations, and leave a lasting impact. Our approach goes beyond the expected, creating experiences that are truly extraordinary."
              },
              {
                title: 'Creating Moments: Event Organisers in Dubai',
                subtitle:
                  "As unmatched Dubai event organizers, we believe that every moment deserves to be celebrated in style. From intimate gatherings to grand galas, we approach each event with enthusiasm and dedication. Our team's commitment to seamless planning and flawless execution ensures that your event is a reflection of your vision and a celebration of life's milestones."
              }
            ].map(card => (
              <div
                key={card.title}
                className="text-2xl font-bold text-gray-900 md:text-3xl"
              >
                <h4 className="mb-1 font-heading uppercase">{card.title}</h4>
                <LineShape />
                <p className={`text-base font-light text-gray-800`}>
                  {card.subtitle}
                </p>
              </div>
            ))}
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

export default EventPlanningPage
