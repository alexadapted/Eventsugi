import { NextPage } from 'next'
import Head from 'next/head'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Breadcrumbs } from '~/components/Breadcrumbs'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { LineShape } from '~/components/LineShape'
import { getMetaData } from '~/utils/meta'

const Testimonials: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Testimonials | Eventsugi Dubai</title>
        {getMetaData(
          'Testimonials | Eventsugi Dubai',
          "Hear from the customers about Eventsugi's Best Event Management Services. Contact Us to get more details.",
          '/testimonials',
          ['Testimonials']
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <link rel="canonical" href={`https://www.eventsugi.com/testimonials`} />
      </Head>
      <Header />
      <div>
        <div
          className="min-h-screen !justify-start bg-gray-500 bg-cover bg-center bg-no-repeat text-white bg-blend-multiply"
          style={{
            backgroundImage: `url('/Images/event-management-company/Images _ 1 Home Page/Testimonials.png')`
          }}
        >
          <div className="flex h-[100vh] flex-col px-4 pb-8 pt-28 sm:px-8 xl:px-24 2xl:px-32">
            <Breadcrumbs
              dark={true}
              data={[
                {
                  title: 'Home',
                  link: '/'
                },
                {
                  title: 'Testimonials'
                }
              ]}
            />
            <h1 className="mt-12 font-heading text-3xl font-bold uppercase tracking-wide lg:text-4xl xl:text-5xl">
              Testimonials
            </h1>
            <LineShape />
            <div className="flex h-full flex-col justify-center">
              <Slider
                autoplay
                infinite
                slidesToShow={2}
                className="mx-8"
                slidesToScroll={1}
                responsive={[
                  {
                    breakpoint: 1280,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]}
              >
                {[
                  {
                    quote:
                      "I couldn't be happier with the exceptional service provided by Eventsugi. From the initial planning stages to the flawless execution, they went above and beyond to make our event a huge success. The attention to detail, creativity, and professionalism exhibited by their team truly set them apart. I highly recommend their services and look forward to working with them again in the future.",
                    author: 'Sarah M.'
                  },
                  {
                    quote:
                      "Working with Eventsugi was an absolute pleasure. Their expertise in event planning and execution is unparalleled. They took the time to understand our vision and delivered an event that exceeded our expectations. The seamless coordination, stunning decor, and impeccable service made our special day truly unforgettable. I can't thank them enough for their dedication and commitment to making our event a tremendous success.",
                    author: 'David P.'
                  },
                  {
                    quote:
                      'Choosing Eventsugi to plan our corporate gala was the best decision we made. Their professionalism, creativity, and attention to detail were evident in every aspect of the event. They transformed our venue into a stunning space that perfectly captured our brand identity. The seamless organization and flawless execution made for an unforgettable evening. I would highly recommend their services to anyone seeking a top-notch event management team.',
                    author: 'Mark R.'
                  }
                ].map((testimonial, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-8 px-8 sm:w-1/2 md:w-1/3 md:px-12"
                  >
                    <BiSolidQuoteAltLeft size={32} />
                    <p>{testimonial.quote}</p>
                    <p>- {testimonial.author}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Testimonials
