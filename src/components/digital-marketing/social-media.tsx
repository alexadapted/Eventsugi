import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { ContactUsFormSection } from '~/components/ContactUsForm'
import { FAQs } from '~/components/FAQs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing'
import { WhyWorkWithUs } from '~/components/WhyWorkWithUs'
import { getMetaData } from '~/utils/meta'

const faqs = [
  {
    question: 'Which social media platform is most used in UAE?',
    answer:
      'Facebook is the most used social media platform in the UAE, with 97% of the population using it. Instagram is the second most used platform, with 89% of the population using it. YouTube is the third most used platform, with 73% of the population using it. LinkedIn is the fourth most used platform, with 48% of the population using it. Twitter is the fifth most used platform, with 39% of the population using it.'
  },
  {
    question: 'How much does social media marketing cost in Dubai?',
    answer:
      'Social media marketing costs in Dubai vary depending on the agency you choose. Some agencies charge a flat fee, while others charge a percentage of your ad spend. Some agencies charge a monthly retainer, while others charge a percentage of your ad spend.'
  },
  {
    question: 'How can my business benefit from social media marketing Dubai?',
    answer:
      'Social media marketing in Dubai can help your business reach a wider audience, increase brand awareness, and generate more leads. It can also help you build relationships with your customers and increase customer loyalty.'
  },
  {
    question: 'Why is social media marketing important?',
    answer:
      'Social media marketing is important because it helps you reach a wider audience, increase brand awareness, and generate more leads. It also helps you build relationships with your customers and increase customer loyalty.'
  }
]

const SocialMediaPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Social Media Marketing Dubai | Eventsugi UAE</title>
        {getMetaData(
          'Social Media Marketing Dubai | Eventsugi UAE',
          'Our experts craft impactful campaigns to boost your digital influence. Contact us for social success. Eventsugi Digital marketing Services in dubai.',
          '/digital-marketing/social-media',
          ['Social Media Marketing']
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
          href={`https://www.eventsugi.com/digital-marketing/social-media`}
        />
      </Head>
      <Header />
      <Landing
        title="SOCIAL MEDIA MARKETING"
        subtitle="Boost Your Online Presence"
        image="/Images/event-management-company/Digital Marketing _ Images/Social Media Banner Image.png"
      />
      <div className="bg-white px-4 pb-16 pt-8 text-gray-900 sm:px-8 xl:px-24 2xl:px-32">
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
              title: 'Digital Marketing',
              link: '/digital-marketing'
            },
            {
              title: 'Social Media Marketing'
            }
          ]}
        />
        <h2 className="mt-8 text-center font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
          Social Media Marketing Services in Dubai
        </h2>
        <p className={`mt-4 text-center font-common font-light text-gray-800`}>
          Supercharge your online presence with our Social Media Marketing
          services. Our expert team will craft engaging and strategic campaigns
          tailored to your brand, connecting you with your target audience and
          boosting your reach. From compelling content to data- driven insights,
          we&apos;ll help you achieve your marketing goals and make a lasting
          impact in the digital world. Let&apos;s ignite your brand&apos;s
          growth and leave a mark on social media!
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-4 px-4 sm:px-8 md:flex-row md:items-center md:justify-between xl:px-24 2xl:px-32">
        <div className="relative px-24 md:w-1/2 md:px-0 lg:w-1/3">
          <Image
            src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/Social Media 1.png"
            alt="Social Media Image 1"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="mb-4 text-2xl font-semibold">
            Empower Your Brand with a Leading Social Media Marketing Agency in
            Dubai
          </h3>
          <p>
            Working with a social media agency provides you with the benefits of
            industry expertise and up-to-date knowledge about an area of digital
            media that is constantly changing. Trends power social media
            engagement, and being able to predict, anticipate, and navigate them
            is crucial for successful marketing. With social media specialists
            managing your platforms, you have more opportunity to grow your
            presence and increase your following and engagement. Knowing what to
            post and when to post is an essential component of successful social
            media, and you need people on your team who understand the ebb and
            flow of this arena if you want to get the best out of your
            platforms.
            <br />
            <br />
            At Eventsugi, our social media strategies are designed to drive your
            brand and audience engagement, connecting you with leads that become
            clients. With services spanning all facets of social media including
            content creation, community management, advertising, lead generation
            and campaign management, we provide our clients with strategies
            tailored to their specific objectives.
          </p>
        </div>
      </div>
      <div className="mt-16 px-4 sm:px-8 xl:px-24 2xl:px-32">
        <h3 className="mb-4 text-2xl font-semibold">
          Our Approach To Social Media Marketing Services
        </h3>
        <div className="relative px-16 md:hidden">
          <Image
            src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/Social Media 2.png"
            alt="Social Media Image 2"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <p>
          Build trust, grow a community, inspire, educate and entertain with
          Social Media Management. From elevating customer service to enticing
          new customers through interaction, we use the right platforms
          consistently and carefully.
        </p>
        <div className="flex flex-col-reverse justify-between md:mt-1 md:flex-row md:items-start md:pr-8 lg:pr-24 xl:mt-2 xl:pr-32 2xl:mt-4 2xl:pr-40">
          <ul className="ml-3 list-disc">
            {[
              'Social Media Account Setup/ Optimization',
              'Social Media Audit, Strategy and SEO',
              'Social Media Branding',
              'Competitor Analysis',
              'Editorial Content Calendar (3x Revisions)',
              '16 branded organic posts per month',
              'Trending #Hashtag Research',
              'Dates and most relevant times for each post',
              'Instagram Highlights Icons, Stories',
              'Static images, GIFs, Short Animation Videos',
              'Professional persuasive copywriting (English/Arabic)',
              'Instagram Grid style layout',
              'Monthly Reports & Analytics',
              'Weekly updates/Monthly Meetings to review performance'
            ].map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <div className="relative hidden w-[30%] px-0 md:block">
            <Image
              src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/Social Media 2.png"
              alt="Social Media Image 3"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900">
        <WhyWorkWithUs />
      </div>
      <div>
        <FAQs faqs={faqs} />
      </div>
      <div className="flex flex-col px-4 py-24 sm:px-8 xl:px-24 2xl:px-32">
        <ContactUsFormSection />
      </div>
      <Footer />
    </div>
  )
}

export default SocialMediaPage
