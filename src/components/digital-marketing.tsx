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
import { WhyWorkWithUs } from '~/components/WhyWorkWithUs'
import { getMetaData } from '~/utils/meta'

const faqs = [
  {
    question: 'What should I look for in a digital marketing agency in Dubai?',
    answer:
      'When searching for a digital marketing agency in Dubai, prioritize experience, diverse services, industry knowledge, and a data-driven approach. Choose a transparent agency with clear reporting, open communication, and positive reviews. Look for a partner that aligns with your budget and emphasizes innovation to stay ahead in the ever-evolving digital landscape.'
  },
  {
    question:
      'How do I know if a digital marketing agency in Dubai is the right choice for my business?',
    answer:
      'Check their experience, expertise, and track record in delivering results. Ensure they offer a range of services, understand your industry, and provide customized strategies. Look for transparency in communication, data-driven decision-making, and positive client reviews. Align with your budget and ensure they prioritize innovation and adaptability.'
  },
  {
    question: 'How to choose the best digital marketing agency in Dubai?',
    answer:
      'To choose the best digital marketing agency in Dubai, conduct thorough research on their experience, expertise, and services offered. Look for customized strategies, a data-driven approach, and transparent communication. Check client reviews and consider agencies with industry knowledge and innovation. Verify their ability to adapt and provide ongoing support. Align their offerings with your business goals and budget for the best fit.'
  },
  {
    question:
      'Which services are offered in Dubai by digital marketing agencies?',
    answer:
      'Digital marketing agencies in Dubai typically offer a wide range of services to cater to diverse business needs. These services include search engine optimization (SEO) to improve website visibility on search engines, pay-per-click (PPC) advertising for targeted online ads, social media marketing to engage and grow audiences, content marketing for valuable and relevant content creation, email marketing to reach and nurture leads, web design and development, and analytics and reporting to track campaign performance. Additionally, they may offer services like influencer marketing, video marketing, online reputation management, and more to ensure a comprehensive approach to digital marketing strategies.'
  }
]

const DigitalMarketingPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Digital Marketing Company Dubai| Eventsugi UAE</title>
        {getMetaData(
          'Digital Marketing Company Dubai| Eventsugi UAE',
          "Crack your brand's full potential with Eventsugi's top-notch Digital Marketing Services in Dubai. Our experts deliver tailored strategies for online success. Contact us today",
          '/digital-marketing',
          ['Digital Marketing', 'Google Ads', 'SEO', 'Social Media']
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
          href={`https://www.eventsugi.com/digital-marketing`}
        />
      </Head>
      <Header />
      <Landing
        title="DIGITAL MARKETING SERVICES"
        subtitle="Let's skyrocket your business together!"
        image="/Images/event-management-company/Digital Marketing _ Images/Digital Marketing Banner Image.png"
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
                  title: 'Services',
                  link: '/services'
                },
                {
                  title: 'Digital Marketing'
                }
              ]}
            />
            <h2 className="mt-8 text-center font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
              Digital Marketing Services in Dubai
            </h2>
            <p className={`text-center font-common font-light text-gray-800`}>
              Experience the power of digital marketing with our comprehensive
              solutions tailored to meet your business goals. From strategic
              planning and creative content to data-driven campaigns and
              performance analysis, we cover all aspects of digital marketing.
              Our team of experts leverages the latest trends and technologies
              to deliver impactful results, driving growth and success for your
              brand in the digital landscape.
            </p>

            <div className="mt-8 flex flex-col items-center justify-between gap-8 px-2 md:grid md:grid-cols-3">
              {[
                {
                  title: 'Search Engine Optimization',
                  text: 'Get found and stand out in the digital landscape with our expert SEO services. Our team will optimize your website, boost your search rankings, and drive organic traffic to increase your online visibility. Stay ahead of the competition and reach your target audience with our strategic SEO solutions',
                  link: '/digital-marketing/seo',
                  image:
                    '/Images/event-management-company/Digital Marketing _ Images/Digital Marketing 3 images/1.png'
                },
                {
                  title: 'Google Ads Services',
                  text: 'Unlock the full potential of Google Ads and drive targeted traffic to your website. Our Google Ads specialists will craft compelling campaigns, leverage keywords, and optimize ad performance to maximize your ROI. Reach the right audience at the right time and watch your business soar with our data-driven Google Ads strategies.',
                  link: '/digital-marketing/google-ads',
                  image:
                    '/Images/event-management-company/Digital Marketing _ Images/Digital Marketing 3 images/2.png'
                },
                {
                  title: 'Social Media Marketing',
                  text: "Connect, engage, and build a strong online community with our result-driven social media marketing services. We'll create captivating content, manage your social profiles, and execute strategic campaigns across platforms to foster meaningful connections. Elevate your brand's presence with our social media expertise.",
                  link: '/digital-marketing/social-media',
                  image:
                    '/Images/event-management-company/Digital Marketing _ Images/Digital Marketing 3 images/3.png'
                }
              ].map(item => (
                <div
                  key={item.title}
                  className="flex h-full flex-col items-center justify-between gap-2"
                >
                  <Image
                    layout="responsive"
                    width={1}
                    height={1}
                    alt={item.title}
                    src={item.image}
                  />
                  <h5 className={`text-lg font-medium`}>{item.title}</h5>
                  <p className={`text-center font-light text-gray-700`}>
                    {item.text}
                  </p>
                  <Link
                    href={item.link}
                    className="mt-4 w-full rounded-full bg-[#ba96fd] py-2 text-center text-lg font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900">
        <WhyWorkWithUs />
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

export default DigitalMarketingPage
