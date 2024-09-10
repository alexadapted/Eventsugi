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
    question: 'What types of birthday decorations do you offer?',
    answer:
      'We offer a wide range of birthday decorations, including balloon decoration, themed setups, birthday room decoration, birthday wall decoration, and more. Our birthday decoration is tailored to match your preferences and the theme of the celebration.'
  },
  {
    question:
      "Can you customize decorations based on my child's favorite characters or interests?",
    answer:
      "Absolutely! We love creating personalized decorations that reflect your child's interests and favorite characters. Just share your ideas with us, and we'll bring them to life."
  },
  {
    question: 'Do you provide decorations for milestone birthdays?',
    answer:
      'Yes, we specialize in decorations for all ages, from 1st birthdays to milestone celebrations like 60 birthday decor. Our decorators can create age-appropriate setups that suit the significance of the occasion.'
  },
  {
    question: 'Can you set up decorations at my preferred venue?',
    answer: (
      <p>
        Absolutely, we can set up decorations at the venue of your choice,
        whether it&apos;s your home, an event space, or an outdoor location. Our{' '}
        <Link href="/theme-decoration" className="text-[#ba96fd]">
          decorators
        </Link>{' '}
        will transform the space according to your chosen theme.
      </p>
    )
  },
  {
    question: 'Can you provide decorations for a surprise birthday party?',
    answer:
      "Of course! We're experienced in organizing surprise birthday parties, and our decorators can work discreetly to set up decorations and create a delightful surprise for the guest of honor."
  }
]

const BirthdayPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Birthday Decoration Dubai, Balloons Decoration | Eventsugi UAE
        </title>
        {getMetaData(
          'Birthday Decoration Dubai, Balloons Decoration | Eventsugi UAE',
          'Meet the experts in Birthday Party Management in Dubai. From Birthday Balloons to Decoration, we are here to give an exceptional experience.',
          '/social-events/birthday',
          ['Birthday', 'Birthday Parties']
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
          href={`https://www.eventsugi.com/social-events/birthday`}
        />
      </Head>
      <Header />
      <Landing
        title="BIRTHDAY PARTY"
        subtitle="Experience Unforgettable Birthdays with Our Expert Party Planning"
        image="/Images/event-management-company/Social Events - Birthday/Banner.png"
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
                title: 'Social Events',
                link: '/social-events'
              },
              {
                title: 'Birthday'
              }
            ]}
          />
          <h2 className="mt-8 text-center font-heading text-3xl font-semibold uppercase lg:text-5xl">
            Birthday Decoration in Dubai
          </h2>
          <p className="mt-8 text-center font-light text-gray-700 sm:px-2 lg:px-8">
            {
              "At Eventsugi, we specialize in turning birthday dreams into reality with our exceptional birthday decoration services. Whether it's a joyful birthday 1st decoration, a milestone 60 birthday decor, or any age in between, our expert team is here to transform your venue into a whimsical wonderland. With a focus on unique concepts, attention to detail, and a commitment to bringing your vision to life, we create memories that will be cherished for a lifetime."
            }
          </p>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12 xl:mt-24 xl:gap-16">
            {[
              {
                title: 'Birthday Balloons Decoration',
                subtitle:
                  'Balloons have an innate ability to bring instant joy to any celebration, and at Eventsugi, we understand the magic they hold. Our skilled team crafts stunning birthday balloon decoration that add a touch of vibrancy and festivity to your special day. From classic arrangements to innovative designs, we tailor our creations to match your theme, color scheme, and preferences. With a wide variety of colors, shapes, and sizes, we create balloon decorations that capture the essence of your celebration.'
              },
              {
                title: 'Captivating Decor Concepts and Themes',
                subtitle:
                  "Is your little one a fan of Cocomelon or car-themed birthday celebrations? We've got you covered. Our expertise extends to creating captivating themed decorations that transport your guests into a world of wonder. From enchanting Jungle Theme balloons decoration to exciting car-themed birthday setup, we capture the essence of your chosen theme in every detail. Let us know your theme, and watch as our team transforms your venue into an immersive experience that delights both young and old."
              },
              {
                title: 'First Birthday Celebrations',
                subtitle:
                  "The first birthday is a milestone that deserves an extra dose of magic. Our 1st birthday decorations are designed to create a heartwarming and enchanting setting for this special occasion. We infuse creativity and tenderness into every detail, ensuring that your little one's first birthday celebration is as unique as they are. With an eye for detail, we craft decorations that reflect the joy"
              },
              {
                title: 'Celebrating Milestone',
                subtitle:
                  'Milestone birthdays, like the 60th, are a time for reflection and celebration. Our 60 birthday decor is carefully curated to honor a lifetime of experiences while looking ahead to new adventures. We blend elegance, nostalgia, and joy into the decorations, creating an atmosphere that pays tribute to the remarkable journey of the birthday honoree.'
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

export default BirthdayPage
