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
    question: 'How much does SEO Cost in Dubai?',
    answer:
      'The cost of SEO in Dubai varies depending on the agency you choose. Some agencies charge a flat fee, while others charge a percentage of your ad spend. Some agencies charge a monthly retainer, while others charge a percentage of your ad spend.'
  },
  {
    question:
      'How involved should a business owners be with their marketing campaign?',
    answer:
      'Business owners should be involved in their marketing campaign as much as possible. They should be involved in the planning, execution, and evaluation of their marketing campaign. They should also be involved in the day-to-day management of their marketing campaign.'
  },
  {
    question: 'Do I need SEO?',
    answer:
      'Yes, you need SEO. SEO is a long-term investment that will help you grow your business. It will help you increase your website traffic, generate more leads, and increase your sales. It will also help you build relationships with your customers and increase customer loyalty.'
  },
  {
    question: 'How long does SEO take to show results?',
    answer:
      'SEO takes time to show results. It takes time to build a website, create content, and optimize your website.'
  },
  {
    question: 'Can I do SEO myself for my website?',
    answer:
      'Yes, you can do SEO yourself for your website. You can do SEO yourself for your website by following certain steps but you will need to get specific resource to learn from.'
  },
  {
    question: 'What factors to consider when engaging an SEO agency?',
    answer:
      "There are many factors to consider when engaging an SEO agency. Some of the factors to consider are: - The agency's experience - The agency's track record - The agency's reputation - The agency's pricing - The agency's customer service - The agency's communication"
  },
  {
    question: 'Is SEO competitive in Dubai?',
    answer: 'Yes, SEO is competitive in Dubai.'
  }
]

const SEOPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Best SEO Company in Dubai | Eventsugi</title>
        {getMetaData(
          'Best SEO Company in Dubai | Eventsugi',
          'Looking for organic results through best SEO services? Contact the SEO experts at Eventsugi in Dubai today.',
          '/digital-marketing/seo',
          ['Search Engine Optimization']
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
          href={`https://www.eventsugi.com/digital-marketing/seo`}
        />
      </Head>
      <Header />
      <Landing
        title="SEARCH ENGINE OPTIMIZATION"
        subtitle="Unlock Your Website's Potential with Expert SEO Services"
        image="/Images/event-management-company/Digital Marketing _ Images/SEO Banner Image.png"
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
              title: 'SEO Company Dubai'
            }
          ]}
        />
        <h2 className="mt-8 text-center font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
          SEO Services in Dubai
        </h2>
        <p className={`mt-4 text-center font-common font-light text-gray-800`}>
          Boost your online visibility and outrank your competition with our
          top-notch SEO services. Our team of experts will optimize your
          website, drive organic traffic, and deliver measurable results. Get
          ready to dominate the search engine rankings and attract more
          qualified leads to your business. Let&apos;s take your online presence
          to the next level!
        </p>
      </div>
      <div className="mt-2 flex flex-col gap-4 px-4 sm:px-8 md:flex-row md:items-center md:justify-between xl:px-24 2xl:px-32">
        <div className="relative px-24 md:w-1/2 md:px-0 lg:w-1/3">
          <Image
            src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/SEO 1.png"
            alt="SEO Image 1"
            layout="responsive"
            width={1}
            height={1}
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="mb-4 text-2xl font-semibold">
            Drive More Traffic, Generate More Leads With Our 360 Degree SEO
            Services in Dubai
          </h3>
          <p>
            At Eventsugi, we pride ourselves on our comprehensive, holistic
            approach to SEO UAE strategy development. Our team of SEO experts in
            Dubai has the skills and knowledge to craft a highly customized
            solution that encompasses all aspects of search engine optimization
            - from keyword research and content writing to link building, off
            page optimization, and local SEO.
            <br /> <br /> As leading providers of SEO Dubai services, our
            mission is to empower you as industry leaders. We understand that
            achieving legitimacy in your field requires high rankings on organic
            Google search results, digital platform visibility, and a strong
            social media presence. That&apos;s why we, as the best SEO company
            in Dubai, are committed to investing in your success by placing your
            business at the top of search engine results pages (SERPs), opening
            doors to increased brand awareness and sales opportunities.
            <br /> <br /> As one of the premium SEO companies in Dubai, UAE, we
            possess the expertise and resources needed to make this a reality.
            Moreover, we stay ahead of the curve as search engine algorithms
            constantly evolve, continuously enhancing our knowledge to deliver
            exceptional and consistent results through the best SEO services in
            Dubai.
          </p>
        </div>
      </div>
      <div className="mt-16 px-4 sm:px-8 xl:px-24 2xl:px-32">
        <h3 className="mb-4 text-2xl font-semibold">
          Our Approach To SEO Services
        </h3>
        <div className="relative px-16 md:hidden">
          <Image
            src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/SEO 2.png"
            alt="SEO Image 2"
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
          brand.
        </p>
        <div className="flex flex-col-reverse justify-between md:mt-1 md:flex-row md:items-start md:pr-8 lg:pr-24 xl:mt-2 xl:pr-32 2xl:mt-4 2xl:pr-40">
          <ul className="ml-3 mt-3 list-disc">
            {[
              'Keyword Research & Analysis',
              'Keywords Optimization',
              'On-Page Optimization',
              'Off-Page Optimization (Link Building)',
              'Site Structure Optimization',
              'GMB Setup/Management',
              'Monthly Reports'
            ].map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
          <div className="relative hidden w-[30%] px-0 md:block">
            <Image
              src="/Images/event-management-company/Digital Marketing _ Images/DM Services Images/SEO 2.png"
              alt="SEO Image 3"
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-6 px-4 sm:px-8 md:grid-cols-3 xl:px-24 2xl:px-32">
        <div className="border-2 border-black p-3">
          <h4 className="text-lg font-semibold">Technical SEO</h4>
          <ul className="ml-6 mt-2 list-disc">
            {[
              'Optimize Mobile Responsive Website',
              'Disallow Toxic backlinks',
              'Optimizing Website URL’s',
              'Content Optimization',
              'Business Location Optimization',
              'Generate Robot.txt. file',
              'Canonical Tags Optimization',
              'Optimize Accelerated Mobile Pages',
              'Add Breadcrumbs for Menu',
              'Redirections Optimization',
              'Create a custom 404 page'
            ].map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-black p-3">
          <h4 className="text-lg font-semibold">On-Page SEO</h4>
          <ul className="ml-6 mt-2 list-disc">
            {[
              "Create SEO Friendly URL's",
              'Optimize Content Hierarchy',
              'Header Tags Creation',
              'Meta Data Optimization',
              'Image Optimization',
              'Internal Links Creation',
              'Social Media Buttons',
              'Link Blogs to the Website',
              "Add FAQ's Section",
              'Keyword Density Optimization'
            ].map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-black p-3">
          <h4 className="text-lg font-semibold">Off-Page SEO</h4>
          <ul className="ml-6 mt-2 list-disc">
            {[
              'Guest Postings',
              'Article Submissions',
              'Blog Postings',
              'Blog Commenting',
              'Social Bookmarking',
              'Profile Creation',
              'Directory Submissions',
              'Classified Submissions',
              'Web 2.0 Creations / Link Building',
              "Media Submissions (PDF's, PPT's, Audio, Video, Images)"
            ].map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>
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

export default SEOPage
