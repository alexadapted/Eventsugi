import { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { getMetaData } from '~/utils/meta'

const PrivacyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Eventsugi Dubai UAE</title>
        {getMetaData(
          'Privacy Policy | Eventsugi Dubai UAE',
          'Check out Eventsugi, The best Event Management Company in Dubai to know about our privacy policy.',
          '/privacy',
          ['privacy', 'policy', 'eventsugi', 'privacy policy']
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/privacy`} />
      </Head>
      <Header />
      <div className="px-4 py-16">
        <main className="container mx-auto mt-8 rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
          <p className="mb-4">
            At Eventsugi LLC, accessible from{' '}
            <a
              href="https://www.eventsugi.com"
              className="text-blue-500"
              target="_blank"
            >
              https://www.eventsugi.com
            </a>
            , we prioritize the privacy of our visitors. This Privacy Policy
            explains the types of information we collect and how we use it. If
            you have any questions or need more information about our Privacy
            Policy, please feel free to contact us at{' '}
            <a href="mailto:hello@eventsugi.com" className="text-blue-500">
              hello@eventsugi.com
            </a>
            .
          </p>

          <h2 className="mt-4 text-xl font-semibold">Consent</h2>
          <p className="mb-4">
            By using our website, you consent to our Privacy Policy and agree to
            its terms. Your use of the site indicates your acceptance of the
            policies outlined here.
          </p>

          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mb-4">
            We may ask you to provide personal information for specific
            purposes, and we will always clarify why we need this information.
            The personal information you may be asked to provide includes but is
            not limited to:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>
              Name: To address you properly and communicate with you
              effectively.
            </li>
            <li>
              Email Address: To send you important updates and respond to your
              inquiries.
            </li>
            <li>
              Phone Number: To reach out to you if necessary or requested.
            </li>
            <li>
              Additional Details: Any other information you choose to share with
              us voluntarily.
            </li>
          </ul>
          <p className="mb-4">
            This information helps us maintain a reliable communication channel
            with you.
          </p>

          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p className="mb-4">
            We utilize the collected information for various purposes,
            including:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>
              Operating and maintaining our website: Ensuring the smooth
              functioning and accessibility of our online platform.
            </li>
            <li>
              Improving and personalizing user experience: Analyzing user
              behavior and preferences to enhance your interactions with our
              website.
            </li>
            <li>
              Understanding how visitors use our website: Gathering insights
              into user engagement to optimize our content and services.
            </li>
            <li>
              Developing new products, services, and features: Using your
              feedback and preferences to innovate and provide better offerings.
            </li>
            <li>
              Communicating with you for customer service and updates: Keeping
              you informed about changes, events, and services related to
              Eventsugi LLC.
            </li>
            <li>
              Sending you emails for marketing and promotional purposes:
              Informing you about exciting offers, promotions, and industry
              updates (You can opt-out of promotional emails anytime).
            </li>
            <li>
              Preventing and detecting fraud: Ensuring a safe and secure online
              environment for all users.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">Log Files</h2>
          <p className="mb-4">
            We follow standard log file procedures to analyze trends, administer
            the site, and gather demographic information. This data includes IP
            addresses, browser type, ISP, date and time stamp, referring/exit
            pages, and click behavior. None of this information is linked to
            personally identifiable data. We use log files to understand user
            preferences, track website traffic, and make data-driven decisions
            for website improvement.
          </p>

          <h2 className="text-xl font-semibold">
            Google DoubleClick DART Cookie
          </h2>
          <p className="mb-4">
            Google, as a third-party vendor, uses DART cookies to serve ads
            based on user interactions with our site and other websites on the
            internet. Users can opt-out of DART cookies by visiting
            Google&apos;s ad and content network Privacy Policy. The use of
            cookies helps personalize the advertising content you see and
            enables a better user experience on our site.
          </p>

          <h2 className="text-xl font-semibold">Our Advertising Partners</h2>
          <p className="mb-4">
            Some advertisers on our site may use cookies and web beacons. Each
            advertising partner has its own Privacy Policy for handling user
            data. The presence of advertisements on our website does not
            indicate endorsement or responsibility for their Privacy Policies.
            We encourage you to review the Privacy Policies of third-party ad
            servers for more detailed information.
          </p>

          <h2 className="text-xl font-semibold">
            Third-Party Privacy Policies
          </h2>
          <p className="mb-4">
            Our Privacy Policy does not apply to other advertisers or websites.
            Please refer to the respective Privacy Policies of third-party ad
            servers for more detailed information. While we strive to provide a
            safe browsing experience on our website, we have no control over
            cookies used by third-party advertisers.
          </p>

          <h2 className="text-xl font-semibold">Your Data Protection Rights</h2>
          <p className="mb-4">As a user, you have the right to:</p>
          <ul className="mb-4 list-disc pl-6">
            <li>
              Access your personal data: You can request copies of your personal
              data collected by Eventsugi LLC.
            </li>
            <li>
              Rectify any inaccurate information: You can request corrections to
              any information you believe is inaccurate or incomplete.
            </li>
            <li>
              Request erasure of your personal data: You can ask us to delete
              your personal information if it is no longer necessary for the
              purposes outlined in this policy.
            </li>
            <li>
              Restrict the processing of your personal data: You can request
              that we limit the processing of your personal data in specific
              circumstances.
            </li>
            <li>
              Object to the processing of your personal data: You can object to
              our processing of your personal data, subject to specific
              situations.
            </li>
            <li>
              Data portability: You can request that we transfer the data we
              have collected to another organization, or directly to you, under
              certain conditions.
            </li>
          </ul>
          <p className="mb-4">
            If you would like to exercise any of these rights, please contact
            us. We will do our best to address your requests promptly and
            effectively.
          </p>

          <h2 className="text-xl font-semibold">Children&apos;s Information</h2>
          <p className="mb-4">
            We prioritize protecting children&apos;s online activity. We
            encourage parents to participate and guide their children&apos;s
            internet usage.
          </p>
          <p className="mb-4">
            Eventsugi LLC does not knowingly collect Personal Identifiable
            Information from children under the age of 13. If you believe your
            child provided such information on our website, please contact us
            immediately, and we will promptly remove it from our records.
            Protecting the privacy of children is of utmost importance to us.
          </p>

          <p className="mb-4">
            This Privacy Policy aims to be transparent about how we handle your
            data while ensuring a positive user experience on our website. We
            are committed to safeguarding your personal information and strive
            to maintain the highest standards of data protection and privacy. If
            you have any questions or concerns regarding our Privacy Policy,
            please feel free to reach out to us. Thank you for choosing
            Eventsugi LLC!
          </p>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPage
