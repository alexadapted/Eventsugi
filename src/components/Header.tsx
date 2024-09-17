import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { NavLinks } from '~/utils/navLinks'
import { api } from '~/utils/trpc'
import { CatalogDialog } from './ContactUsForm'

// const servicesHeader = [
//   {
//     name: 'Corporate Events',
//     link: '/corporate-events'
//   },
//   {
//     name: 'Venue Management',
//     link: '/venue-management'
//   },
//   {
//     name: 'Theme Decoration',
//     link: '/theme-decoration'
//   },
//   {
//     name: 'Event Planning',
//     link: '/event-planning'
//   },
//   {
//     name: 'Artist Management',
//     link: '/artist-management'
//   },
//   {
//     name: 'Birthday Party',
//     link: '/social-events/birthday'
//   },
//   {
//     name: 'Catering Services',
//     link: '/catering'
//   },
//   {
//     name: 'Entertainment Services',
//     link: '/entertainment'
//   },
//   {
//     name: 'Furniture Rental',
//     link: '/furniture-rental'
//   },
//   {
//     name: 'Audio Visual Services',
//     link: '/audio-visual'
//   },
//   {
//     name: 'Photography Services',
//     link: '/photography-videography'
//   },
//   {
//     name: 'Ramadan Decor',
//     link: '/ramadan-decor'
//   }
// ]
// const servicesHeader2: typeof servicesHeader = []

// for (let i = 0; i < servicesHeader.length; i++)
//   if (i % 2 === 0) servicesHeader2.push(servicesHeader[i]!)
// for (let i = 0; i < servicesHeader.length; i++)
//   if (i % 2 !== 0) servicesHeader2.push(servicesHeader[i]!)

export const Header: FC<{ forceDark?: boolean }> = ({ forceDark }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  const { data: serviceHeaders } = api.service.getHeaders.useQuery()

  const isDark = forceDark ? false : dark

  useEffect(() => {
    if (typeof window === 'undefined') return
    const fn = () => {
      const currentlyScrolled = window.scrollY
      const height = window.innerHeight
      if (currentlyScrolled > height) {
        setDark(true)
      } else {
        setDark(false)
      }
    }
    window.addEventListener('scroll', fn)
    return () => {
      window.removeEventListener('scroll', fn)
    }
  }, [])

  return (
    <header
      id="header"
      className={`fixed z-50 block w-full px-2 py-2 backdrop-filter transition-all sm:px-8  ${
        isDark ? 'bg-white text-black' : 'bg-black/80 text-white'
      }`}
    >
      <nav>
        <div className="flex items-center justify-between transition-all duration-300">
          <Link href="/" passHref className="h-[60px] overflow-hidden">
            {isDark ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="h-[60px] overflow-hidden"
                src="/Logos/eventsugi1.png"
                alt="logo"
                // quality={100}
                // width={60}
                // height={60}
                loading="eager"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="h-[60px] overflow-hidden"
                src="/Logos/eventsugi2.png"
                alt="logo"
                // quality={100}
                // width={120}
                // height={120}
                loading="eager"
              />
            )}
          </Link>
          <div className="flex">
            <ul className="mr-8 hidden items-center justify-center gap-4 text-xl lg:flex">
              <li className="relative">
                <Link
                  href="/"
                  className="tooltip transition-all duration-300 hover:text-[#ba96fd]"
                >
                  Home
                  <span className="tooltip-text tooltip-text-left">Home</span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/about"
                  className="tooltip transition-all duration-300 hover:text-[#ba96fd]"
                >
                  About Us
                  <span className="tooltip-text tooltip-text-left">
                    About Us
                  </span>
                </Link>
              </li>
              <li className="group relative hidden md:block">
                <Link
                  href="/services"
                  className="tooltip transition-all duration-300 group-hover:text-[#ba96fd]"
                >
                  Services
                  <span className="tooltip-text tooltip-text-left">
                    Services
                  </span>
                </Link>
                <div
                  className={`invisible absolute -right-36 grid w-[576px] grid-cols-2 gap-3 rounded-sm p-4 text-base opacity-0 shadow-sm transition-all duration-300 group-hover:visible group-hover:opacity-95 ${
                    !isDark ? 'bg-black text-gray-50' : 'bg-white text-gray-900'
                  }`}
                >
                  {/* {servicesHeader.map(s => (
                    <Link
                      key={s.name}
                      href={s.link}
                      className={`tooltip p-2 font-medium underline-offset-4 transition-all hover:underline ${
                        !isDark
                          ? 'bg-gray-900 hover:bg-gray-800'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#ba96fd]" />
                      {s.name}
                      <span className="tooltip-text tooltip-text-top">
                        {s.name}
                      </span>
                    </Link>
                  ))} */}
                {[...new Map(serviceHeaders?.map(s => [s.service.slug, s])).values()].map(s => (
                <Link
                  key={s.service.slug}
                  href={`/${s.service.slug.replace('/blog/', '')}`}
                  className={`tooltip p-2 font-medium underline-offset-4 transition-all hover:underline ${
                    !isDark
                      ? 'bg-gray-900 hover:bg-gray-800'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#ba96fd]" />
                  {s.service.name}
                  <span className="tooltip-text tooltip-text-top">
                    {s.service.name}
                  </span>
                </Link>
              ))}
                </div>
              </li>
            <li className="relative">
                <Link
                  href="/blog"
                  className="tooltip transition-all duration-300 hover:text-[#ba96fd]"
                >
                  Blog
                  <span className="tooltip-text tooltip-text-bottom">
                    Blog
                  </span>
                </Link>
              </li> 
              <li className="relative">
                <Link
                  href="/portfolio"
                  className="tooltip transition-all duration-300 hover:text-[#ba96fd]"
                >
                  Work
                  <span className="tooltip-text tooltip-text-bottom">Work</span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/#clients-section"
                  className="tooltip transition-all duration-300 hover:text-[#ba96fd]"
                >
                  Clients
                  <span className="tooltip-text tooltip-text-bottom">
                    Clients
                  </span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/contact-us"
                  className="tooltip transition-all duration-300 hover:text-[#ba96fd]"
                >
                  Get Quote
                  <span className="tooltip-text tooltip-text-bottom">
                    Get Quote
                  </span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/contact-us"
                  className="tooltip transition-all duration-300 hover:text-[#ba96fd]"
                >
                  Contact Us
                  <span className="tooltip-text tooltip-text-bottom">
                    Contact Us
                  </span>
                </Link>
              </li>
              {/* <li className="relative">
                <p className="tooltip transition-all duration-300">
                  +971 558605027
                  <span className="tooltip-text tooltip-text-bottom">
                    Call Us
                  </span>
                </p>
              </li> */}
            </ul>
            <RxHamburgerMenu
              className={`lg:hidden ${
                menuOpen ? 'invisible' : 'visible'
              } cursor-pointer`}
              size={32}
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`absolute right-0 top-0 z-10 flex h-screen w-full flex-col items-end bg-black px-4 py-2 text-white transition-all duration-300 sm:w-3/5 lg:w-1/3`}
            initial={{
              x: '100%',
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 0.95
            }}
            exit={{
              x: '100%',
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
          >
            <CgClose
              size="32"
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
            <ul className="flex w-full flex-col items-center py-8">
              {NavLinks.sidebar.map((item, i) => (
                <li
                  key={i}
                  className={`relative px-4 py-4 text-3xl font-semibold transition-all duration-300 hover:text-[#ba96fd]`}
                >
                  {item.name === 'Our Catalog' ? (
                    <CatalogDialog>
                      <button className="tooltip">
                        {item.name}
                        <span className="tooltip-text tooltip-text-bottom">
                          {item.name}
                        </span>
                      </button>
                    </CatalogDialog>
                  ) : item.name === 'Services' ? (
                    <button onClick={() => setServicesMenuOpen(true)}>
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.link}
                      className="tooltip"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                      <span className="tooltip-text tooltip-text-bottom">
                        {item.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {servicesMenuOpen && (
          <motion.div
            className={`absolute right-0 top-0 z-20 flex h-screen w-full flex-col items-end bg-black px-4 py-2 text-white transition-all duration-300 sm:w-3/5 lg:w-1/3`}
            initial={{
              x: '100%',
              opacity: 0
            }}
            animate={{
              x: 0,
              opacity: 0.95
            }}
            exit={{
              x: '100%',
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
          >
            <CgClose
              size="32"
              onClick={() => setServicesMenuOpen(false)}
              className="cursor-pointer"
            />
            <ul className="items-right flex w-full flex-col py-4">
              {/* {servicesHeader2.map((item, i) => (
                <li
                  key={i}
                  className={`relative px-4 py-1.5 text-lg font-semibold transition-all duration-300 hover:text-[#ba96fd]`}
                >
                  <Link
                    href={item.link}
                    onClick={() => {
                      setMenuOpen(false)
                      setServicesMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </Link>
                  <span className="ml-1 inline-block h-3 w-3 rounded-full bg-[#ba96fd]" />
                </li>
              ))} */}
              {serviceHeaders?.map((item, i) => (
                <li
                  key={i}
                  className={`relative px-4 py-1.5 text-lg font-semibold transition-all duration-300 hover:text-[#ba96fd]`}
                >
                  <Link
                    href={item.service.slug}
                    onClick={() => {
                      setMenuOpen(false)
                      setServicesMenuOpen(false)
                    }}
                  >
                    {item.service.name}
                  </Link>
                  <span className="ml-1 inline-block h-3 w-3 rounded-full bg-[#ba96fd]" />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
