import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from 'react-icons/ci'

export const Footer: FC = () => {
  return (
    <div className="bg-black px-4 py-8 text-white sm:px-8 lg:px-16">
      <div className={`flex flex-col justify-between lg:flex-row`}>
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          <div className="mt-4 grid grid-cols-2 justify-between gap-2 xl:grid-cols-3">
            {[
              {
                name: 'About Us',
                link: '/about'
              },
              {
                name: 'Venue Management',
                link: '/venue-management'
              },
              {
                name: 'Our Services',
                link: '/services'
              },
              {
                name: 'Theme Decor',
                link: '/theme-decoration'
              },
              {
                name: 'Corporate Events',
                link: '/corporate-events'
              },
              {
                name: 'Artist Management',
                link: '/artist-management'
              },
              {
                name: 'Social Events',
                link: '/social-events'
              },
              {
                name: 'Catering Services',
                link: '/catering'
              },
              {
                name: 'Event Planning',
                link: '/event-planning'
              },
              {
                name: 'Entertainment',
                link: '/entertainment'
              },
              {
                name: 'Sitemap',
                link: '/sitemap'
              },
              {
                name: 'Birthday Party',
                link: '/social-events/birthday'
              },
              {
                name: 'Furniture Rental',
                link: '/furniture-rental'
              },
              {
                name: 'FAQs',
                link: '/faqs'
              },
              {
                name: 'Testimonials',
                link: '/testimonials'
              },
              {
                name: 'AV Services',
                link: '/audio-visual'
              },
              {
                name: 'Portfolio',
                link: '/portfolio'
              },
              {
                name: 'Privacy Policy',
                link: '/privacy'
              },
              {
                name: 'Photography Services',
                link: '/photography-videography'
              },
              {
                name: 'Contact Us',
                link: '/contact-us'
              },
              {
                name: 'Ramadan Decor',
                link: '/ramadan-decor'
              },
              {
                name: 'Blog',
                link: '/blog'
              }
            ].map(({ name, link }) => (
              <Link
                key={name}
                href={link}
                className="tooltip text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
              >
                {name}
                {/* <span className="tooltip-text tooltip-text-bottom">{name}</span> */}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 lg:mt-0 lg:w-1/2 lg:pl-4">
          <div>
            <h3 className="text-2xl font-semibold">Get Social</h3>
            <div className="mt-4 grid grid-cols-4 md:flex">
              <Link
                className="tooltip text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="https://www.facebook.com/people/Eventsugi/100092964671798"
                target="_blank"
              >
                <CiFacebook size={36} />
                <span className="tooltip-text tooltip-text-bottom">
                  Facebook
                </span>
              </Link>
              <Link
                className="tooltip text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="https://www.linkedin.com/company/eventsugi"
                target="_blank"
              >
                <CiLinkedin size={36} />
                <span className="tooltip-text tooltip-text-bottom">
                  Linkedin
                </span>
              </Link>
              <Link
                className="tooltip text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="https://www.instagram.com/eventsugi_official"
                target="_blank"
              >
                <CiInstagram size={36} />
                <span className="tooltip-text tooltip-text-bottom">
                  Instagram - Social Events
                </span>
              </Link>
              <Link
                className="tooltip text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="https://www.instagram.com/eventsugi.ae"
                target="_blank"
              >
                <CiInstagram size={36} />
                <span className="tooltip-text tooltip-text-bottom">
                  Instagram - Corporate Events
                </span>
              </Link>
              <Link
                className="tooltip text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="https://www.instagram.com/weddingsbyeventsugi"
                target="_blank"
              >
                <CiInstagram size={36} />
                <span className="tooltip-text tooltip-text-bottom">
                  Instagram - Weddings
                </span>
              </Link>
              <Link
                className="tooltip text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="https://www.youtube.com/@Eventsugi"
                target="_blank"
              >
                <CiYoutube size={36} />
                <span className="tooltip-text tooltip-text-bottom">
                  Youtube - Eventsugi
                </span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                className="tooltip flex items-center justify-start gap-1 text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="mailto:hello@eventsugi.com"
              >
                <span>
                  <AiOutlineMail />
                </span>
                <span>hello@eventsugi.com</span>
                <span className="tooltip-text tooltip-text-bottom">
                  Email Us
                </span>
              </Link>
              <Link
                className="tooltip flex items-center justify-start gap-1 text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="tel:+971558605027"
              >
                <span>
                  <BsTelephone />
                </span>
                <span>+971 558605027</span>
                <span className="tooltip-text tooltip-text-bottom">
                  Call Us
                </span>
              </Link>
              <Link
                className="tooltip relative flex items-center justify-start gap-1 text-base font-light text-gray-300 hover:text-gray-100 lg:text-lg"
                href="https://wa.me/+971558605027"
              >
                <span>
                  <AiOutlineWhatsApp />
                </span>
                <span>+971 558605027</span>
                <span className="tooltip-text tooltip-text-bottom absolute">
                  WhatsApp Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <p className="my-2 text-base font-light text-gray-300 lg:text-base">
          &copy; 2023 Eventsugi LLC - Event Company Dubai. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
