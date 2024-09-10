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
    question: 'Which type Google Ads is most effective?',
    answer:
      'Search ads are the most effective type of Google Ads. They appear on the search engine results page (SERP) when users search for specific keywords. These ads are highly targeted and relevant to the user’s search intent, making them more likely to convert. Search ads are also cost-effective, as you only pay when a user clicks on your ad.'
  },
  {
    question: 'What are the 3 levels of Google Ads?',
    answer:
      'The three levels of Google Ads are campaign, ad group, and ad. A campaign is a set of ad groups that share a budget, location targeting, and other settings. An ad group contains one or more ads that target a shared set of keywords. An ad is a combination of a headline, description, and URL that promotes your business. '
  },
  {
    question: 'How long do Google Ads take to work?',
    answer:
      'Google Ads can take anywhere from a few hours to a few months to work. The time it takes for your ads to work depends on several factors, including your budget, competition, and ad quality. It can take a few hours for your ads to start running, but it can take a few months to see results. '
  },
  {
    question: 'How much should a beginner budget for Google Ads?',
    answer:
      'Beginners should budget at least $5 per day for Google Ads. This budget is enough to run a few ads and test the platform. However, it is not enough to run a successful campaign. To run a successful campaign, you should budget at least $10 per day. '
  }
]

const GoogleAdsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Google Ads Digital Marketing| Eventsugi Dubai</title>
        {getMetaData(
          'Google Ads Digital Marketing| Eventsugi Dubai',
          'Meet the Google Ads experts at Eventsugi Dubai for taking your business to the next level. For more details, Call +971 55 860 5027',
          '/digital-marketing/google-ads',
          ['Google Ads']
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
          href={`https://www.eventsugi.com/digital-marketing/google-ads`}
        />
      </Head>
      <Header />
      <Landing
        title="GOOGLE ADS SERVICES"
        subtitle="Drive Conversions and Boost ROI"
        image="/Images/event-management-company/Digital Marketing _ Images/Google Ads Banner Image.png"
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
              title: 'Google Ads'
            }
          ]}
        />
        <h2 className="mt-8 text-center font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
          Google Ads Services in Dubai
        </h2>
        <p className={`mt-4 text-center font-common font-light text-gray-800`}>
          Our targeted campaigns are designed to boost your online visibility,
          drive traffic, and convert leads into customers. We create data-
          driven campaigns with measurable goals to ensure you get the best
          results from your investment. The team at our PPC agency Dubai is
          committed to providing cost-effective solutions and superior client
          service, so you can rest assured that you are in good hands. Get
          started today and take advantage of our comprehensive approach to PPC
          marketing!
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-4 px-4 sm:px-8 md:flex-row md:items-center md:justify-between xl:px-24 2xl:px-32">
        <div className="relative px-24 md:w-1/2 md:px-0 lg:w-1/3">
          <Image
            src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/Google Ads 1.png"
            alt="Google Ads Image"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="mb-4 text-2xl font-semibold">
            The Top PPC Advertising Agency Dubai
          </h3>
          <p>
            At Eventsugi, we offer tailored Google ads services in Dubai that
            are designed to meet your specific needs. Our team of experienced
            professionals will work with you to create an effective campaign
            that is focused on optimizing your ROI. Our comprehensive approach
            covers everything from keyword research to ad copy optimization, bid
            management, analytics, and more. Get in touch with us today to learn
            how our PPC services Dubai can help you succeed online.
            <br />
            <br />
            Take your business to the next level with our Google Ads Dubai
            services. Contact us today and discover how our solutions can help
            you reach more customers and grow your online presence! Let our team
            of experienced professionals take care of all the details for you,
            so you don&apos;t have to. Get in touch now and get started on your
            journey to success.
          </p>
        </div>
      </div>
      <div className="mt-16 px-4 sm:px-8 xl:px-24 2xl:px-32">
        <h3 className="mb-4 text-2xl font-semibold">
          Our Approach To PPC Marketing Services
        </h3>
        <div className="relative px-16 md:hidden">
          <Image
            src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/Google Ads 2.png"
            alt="Google Ads Image 2"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <p>
          At our digital marketing company, we specialize in boosting your
          Google search rankings and optimizing your online presence. Through
          data- driven strategies and meticulous analysis, we increase your
          website&apos;s visibility, attracting the right audience to your
          brand. Analyzing the industry, understanding the end user needs and
          creating effective keywords from users search point. Creating Google
          Search Engine Marketing Campaigns with specific client needs (includes
          Location, Network, Devices, CPC, CPM, CPA, Bidding Option).
        </p>
        <div className="mt-4 flex flex-col-reverse justify-between md:flex-row md:items-center">
          <ul className="ml-3 list-disc">
            {[
              'Compelling and Highly Effective Ads',
              'Conversion Tracking',
              'Google Analytics Tracking',
              'Bidding & Budget Suggestions',
              'Display Planning & Ads for GDN',
              'Negative Keywords',
              'Ad extensions',
              'Ad Strategy & Conceptualization',
              'Audience research for targeting purpose',
              'Competitor Ad Analysis',
              'Ad Creatives & Copies',
              'Ad Persuasive Copywriting',
              'Ad campaign execution, monitoring & optimization',
              'A/B testing',
              'Retargeting & Fine-tuning target audience',
              'Ad campaign reports, and Monthly Meetings'
            ].map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <div className="relative hidden w-1/3 px-0 md:block">
            <Image
              src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/Google Ads 2.png"
              alt="Google Ads Image 3"
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

export default GoogleAdsPage
