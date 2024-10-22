import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import { FaPeopleLine } from 'react-icons/fa6'
import { PiConfettiLight } from 'react-icons/pi'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { CatalogDialog, ContactUsFormSection } from '~/components/ContactUsForm'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Landing } from '~/components/Landing'
import { LineShape } from '~/components/LineShape'
import { prisma } from '~/server/db'
import { getMetaData } from '~/utils/meta'
import { structuredData } from '~/utils/structuredData'
import { useEffect, useState } from 'react';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.homePageConfig.findFirst({
    where: {},
    include: {
      image: true
    }
  })

  return {
    props: {
      imageUrl:
        data?.image?.url ||
        '/Images/event-management-company/Images _ 1 Home Page/1-Home Page Banner Image.png'
    }
  }
}


const Home = ({ imageUrl }: { imageUrl: string }) => {
   // Set type for clients
  //const [clients, setClients] = useState([]);
  const [clients, setClients] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [portfolios, setPortfolios] = useState<any[]>([]);

 useEffect(() => {
  const fetchData = async () => {
    try {
      // Fetch all three APIs in parallel
      const baseURL = window.location.origin; // This will dynamically get the base URL

      // Fetch all three APIs in parallel
      const [response, service, portfolio] = await Promise.all([
        fetch(`${baseURL}/api/trpc/client.getAll`),
        fetch(`${baseURL}/api/trpc/service.getAllHome`),
        fetch(`${baseURL}/api/trpc/portfolio.getAll`)
      ]);


      // Log response statuses
      console.log('Service response status:', service.status);
      console.log('Portfolio response status:', portfolio.status);

      // Check if the client response was not okay
      if (!response.ok) {
        throw new Error('Client data fetch failed');
      }

      // Parse the JSON for all responses
      const clientData = await response.json();
      const serviceData = await service.json();
      const portfolioData = await portfolio.json();

      // Extract arrays from the response objects
      const clients = clientData?.result?.data?.json || [];
      const services = serviceData?.result?.data?.json || [];
      const portfolios = portfolioData?.result?.data?.json || [];

      // Set state for each array if it's valid
      if (Array.isArray(clients)) {
        setClients(clients);
      } else {
        console.error('Expected an array for clients but got:', clients);
      }

      if (Array.isArray(services)) {
        setServices(services);
      } else {
        console.error('Expected an array for services but got:', services);
      }

      if (Array.isArray(portfolios)) {
        setPortfolios(portfolios);
      } else {
        console.error('Expected an array for portfolios but got:', portfolios);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

 
  //const { data: clients } = fetchClients();
  // const { data: services } = api.service.getAllHome.useQuery()
  // const { data: portfolios } = api.portfolio.getAll.useQuery()

  return (
    <>
      <Head>
        <title>
          Event Management Company in Dubai Abu Dhabi | Eventsugi UAE
        </title>
        {getMetaData(
          'Event Management Company in Dubai Abu Dhabi | Eventsugi UAE',
          'Eventsugi is the best Event Management Company in Dubai and Abu Dhabi, UAE. Your one stop destination for managing corporate and private events.'
        ).map((m, i) => (
          <meta
            key={i}
            name={m.name}
            content={m.content}
            property={m.property}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }}
        />
        <link rel="canonical" href={`https://www.eventsugi.com`} />
        <meta
          name="google-site-verification"
          content="vkSPugbpfmSEP15YRHi2XbeKXbIvzayrFsvaAvYYOBA"
        />
      </Head>
      <main>
        <Header />
        <div>
          <Landing
            image={imageUrl}
            title="EVENT COMPANY IN DUBAI"
            subtitle="Expertise. Elegance. Exclusivity."
          >
            <div className="flex gap-3 text-sm sm:gap-4 sm:text-base">
              <Link
                href="/social-events"
                className="flex items-center gap-1 border px-2 py-2 text-sm font-semibold  text-white transition-all duration-300 hover:border-black hover:bg-white hover:bg-opacity-75 hover:text-black sm:gap-2 sm:px-6 sm:py-4"
              >
                <PiConfettiLight size={24} />
                SOCIAL EVENTS
              </Link>
              <Link
                href="/corporate-events"
                className="flex items-center gap-1 border px-2 py-2 text-sm font-semibold  text-white transition-all duration-300 hover:border-black hover:bg-white hover:bg-opacity-75 hover:text-black sm:gap-2 sm:px-6 sm:py-4"
              >
                <FaPeopleLine size={24} />
                CORPORATE EVENTS
              </Link>
            </div>
          </Landing>
        </div>

        <div className=" h-full">
          <div className="min-h-screen gap-12 px-4 py-16 sm:px-8 xl:px-24 2xl:px-32">
            <div className="w-full pb-8 md:pb-0">
              <h2 className="font-heading text-3xl font-extrabold uppercase tracking-wide lg:text-4xl xl:text-5xl">
                Eventsugi - Trusted Event Management Company in Dubai
              </h2>
              <LineShape />
              <div className="flex flex-col-reverse gap-4 md:flex-row md:items-center md:gap-6 lg:gap-8">
                <div className="w-full md:w-2/3">
                  <p className={`font-light text-gray-600 lg:text-lg`}>
                    Welcome to Eventsugi, your trusted partner for crafting
                    exceptional Events in Dubai. As a premier Dubai Event
                    Company, we specialize in turning your events into
                    unforgettable experiences that will leave a lasting
                    impression. With a solid reputation as a leading Event
                    Company in Dubai, we take immense pride in our ability to
                    deliver seamless and remarkable events that consistently
                    surpass expectations.
                    <br />
                    <br />
                    Eventsugi is more than just an{' '}
                    <Link className="text-[#ba96fd]" href="/event-planning">
                      Event Organizer in Dubai
                    </Link>
                    ; we are the architects of dreams. Our approach is built on
                    meticulous attention to detail, innovative concepts, and an
                    unwavering commitment to excellence. We stand out among{' '}
                    <a
                      className="text-[#ba96fd]"
                      href="https://en.wikipedia.org/wiki/Event_management"
                      target="_blank"
                    >
                      Event Management
                    </a>{' '}
                    Companies in UAE by infusing passion into every element of
                    your event, ensuring that it reflects nothing less than
                    sheer brilliance. Whether you have a grand corporate
                    symposium, anniversary, gala party, an intimate social
                    gathering or team-building event in mind, our dedication
                    guarantees that your event will shine as a testament to
                    unparalleled excellence.
                  </p>
                  <br />
                  <br />
                  <CatalogDialog>
                    <div className="cursor-pointer border-2 border-[#ba96fd] px-6 py-2 outline-none transition-all duration-300 hover:text-[#ba96fd] focus:text-[#ba96fd]">
                      VIEW OUR CATALOG
                    </div>
                  </CatalogDialog>
                </div>
                <div className="relative px-24 md:w-1/3 md:px-0">
                  <Image
                    src="/Images/event-management-company/Images _ 1 Home Page/2-Home and About Us Page.png"
                    layout="responsive"
                    width={1}
                    height={1}
                    alt="About Us Image"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-black text-white">
          <div className="flex min-h-screen flex-col px-4 pt-24 sm:px-8 xl:px-24 2xl:px-32">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide lg:text-4xl">
              Eventsugi Services - One of the Leading Event Management Agencies
              In Dubai
            </h2>
            <LineShape />
            <p className={`font-light text-gray-300 lg:text-lg`}>
              At Eventsugi, we don&apos;t merely plan events; we become your
              partners in bringing your visions to life. As a dedicated Dubai
              Event Management Company, we are here to guide you through every
              step of the journey, from inception to realization. Our team of
              experienced Event Planners collaborates closely with you to
              understand your unique needs, designing captivating themes,
              curating stunning decorations, and coordinating with top-tier
              vendors. Whether it&apos;s a prestigious corporate gala, a
              cherished milestone celebration, or a grand wedding, Eventsugi is
              your trusted Events Agency in Dubai, committed to transforming
              your dreams into reality.
            </p>
            <div className="flex flex-1 flex-wrap justify-evenly gap-x-8 gap-y-2 py-8 text-center md:text-lg lg:text-xl">
              {/* {[
                {
                  image:
                    '/Images/event-management-company/Images _ 3 Services/Social Events.jpg',
                  title: 'Social Events',
                  link: '/social-events'
                },
                {
                  image:
                    '/Images/event-management-company/Images _ 3 Services/Corporate Events.jpg',
                  title: 'Corporate Events',
                  link: '/corporate-events'
                },
                {
                  image:
                    '/Images/event-management-company/Images _ 3 Services/Social Events.jpg',
                  title: 'Social Events',
                  link: '/social-events'
                },
                {
                  image:
                    '/Images/event-management-company/Images _ 3 Services/Other Services.jpg',
                  title: 'Other Services',
                  link: '/services'
                }
              ].map((service, i) => (
                <Link
                  key={i}
                  className="group relative flex w-1/3 overflow-hidden lg:w-1/5"
                  href={service.link}
                >
                  <Image
                    src={service.image}
                    layout="responsive"
                    width={1}
                    height={1}
                    alt={service.title + ' Image'}
                    className="object-contain transition-all duration-500 hover:scale-110"
                  />

                  <div className="pointer-events-none absolute top-2/3 w-full -translate-y-1/3">
                    <h3 className="mx-2 bg-black py-2 text-sm font-bold opacity-75 transition-all duration-500 group-hover:mx-0 group-hover:bg-white group-hover:text-black md:text-xl">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              ))} */}
              {services?.map((service, i) => (
                <Link
                  key={i}
                  className="group relative flex w-1/3 overflow-hidden lg:w-1/5"
                  href={`/${service.slug}`}
                >
                  <Image
                    src={service.image.url}
                    layout="responsive"
                    width={1}
                    height={1}
                    alt={service.name + ' Image'}
                    className="object-cover transition-all duration-500 hover:scale-110"
                  />

                  <div className="pointer-events-none absolute top-2/3 w-full -translate-y-1/3">
                    <h3 className="mx-2 bg-black py-2 text-sm font-bold opacity-75 transition-all duration-500 group-hover:mx-0 group-hover:bg-white group-hover:text-black md:text-xl">
                      {service.name}
                    </h3>
                  </div>
                </Link>
              ))}
              <Link
                className="group relative flex w-1/3 overflow-hidden lg:w-1/5"
                href="/services"
              >
                <Image
                  src={
                    '/Images/event-management-company/Images _ 3 Services/Other Services.jpg'
                  }
                  layout="responsive"
                  width={1}
                  height={1}
                  alt={'Other Services Image'}
                  className="object-contain transition-all duration-500 hover:scale-110"
                />

                <div className="pointer-events-none absolute top-2/3 w-full -translate-y-1/3">
                  <h3 className="mx-2 bg-black py-2 text-sm font-bold opacity-75 transition-all duration-500 group-hover:mx-0 group-hover:bg-white group-hover:text-black md:text-xl">
                    Other Services
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div id="clients-section">
          
          <div className="bg-gray-300 text-white flex h-[80vh] flex-col px-4 pt-24 sm:px-8 xl:px-24 2xl:px-32">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-wide lg:text-4xl xl:text-5xl">
              We Love Our Clients
            </h2>
            <LineShape />
            <p className={`font-light text-gray-600 lg:text-lg`}>
              At the heart of our business lie our cherished clients. Their
              dreams and aspirations are our driving force, fueling our
              commitment to excellence. As one of the Top Event Management
              Companies in Dubai, our mission is to create a profound impact in
              the lives of our clients. We strive to simplify and enhance their
              journey through event planning, making it a seamless and enjoyable
              experience.
            </p>
            <div className="mt-6 mb-0 flex h-full flex-col justify-center">
              <Slider
                infinite
                autoplay
                slidesToShow={6}
                className="black-arrow-slides mx-8 mb-12"
                slidesToScroll={1}
                responsive={[
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
                {clients?.map((client, index) => (
                  <div
                    key={index}
                    className="relative max-h-[600px] min-h-[250px]  lg:h-[300px]"
                  >
                    <Image
                      src={client.image?.url || ''}
                      alt={client.name}
                      fill
                      className="object-contain px-4"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className=" bg-black text-white">
          <div className="flex pb-20 flex-col px-4 pt-24 sm:px-8 xl:px-24 2xl:px-32">
            <Link href="/portfolio">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wide lg:text-4xl xl:text-5xl">
                Portfolio
              </h2>
            </Link>
            <LineShape />
            <div className="flex h-full flex-1 flex-col justify-center">
              <Slider
                autoplay
                infinite
                slidesToShow={3}
                className="mx-8"
                slidesToScroll={1}
                centerMode
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
                      slidesToScroll: 1,
                      centerMode: false
                    }
                  }
                ]}
              >
                {portfolios?.map((image, i) => (
                  <div className="relative overflow-hidden px-4" key={i}>
                    {image.image?.url ? (
                      <Image
                        src={image.image.url}
                        layout="responsive"
                        alt={image.title}
                        height={1}
                        width={1}
                      />
                    ) : image.video ? (
                      <video
                        src={image.video.url}
                        controls
                        className="w-full"
                      />
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div
          className="h-55 md:h-[50vh] !justify-start bg-gray-500 bg-cover bg-center bg-no-repeat text-white bg-blend-multiply"
          style={{
            backgroundImage: `url('/Images/event-management-company/Images _ 1 Home Page/Testimonials.png')`
          }}
        >
          <div className="flex h-55 md:h-[55vh] flex-col px-4 pb-24 pt-24 sm:px-8 xl:px-24 2xl:px-32">
            <Link href="testimonials">
              <h2 className="font-heading text-3xl font-bold uppercase tracking-wide lg:text-4xl xl:text-5xl">
                Testimonials
              </h2>
            </Link>
            <LineShape />
            <div className="flex h-full flex-col justify-center">
              <Slider
                autoplay
                infinite
                slidesToShow={1}
                className="mx-8 "
                slidesToScroll={1}
                responsive={[
                  {
                    breakpoint: 1280,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 1,
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
                    <p className='lg:text-2xl'>{testimonial.quote}</p>
                    <p className='lg:text-1.5xl' >- {testimonial.author}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col px-4 py-24 sm:px-8 xl:px-24 2xl:px-32">
            <ContactUsFormSection />
          </div>
        </div>

        <div className=" bg-black text-white">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home
