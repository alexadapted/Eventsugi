import Image from 'next/image'
import { FC } from 'react'
import { LineShape } from './LineShape'

export const WhyWorkWithUs: FC = () => {
  return (
    <div className="flex flex-col px-4 py-24 sm:px-8 xl:px-24 2xl:px-32">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-heading text-3xl font-extrabold uppercase lg:text-4xl xl:text-5xl">
            Why Work With Us?
          </h2>
          <LineShape />
        </div>

        <div className="flex flex-col items-center justify-between gap-8 px-2 md:grid md:grid-cols-3 xl:grid-cols-6">
          {[
            {
              title: 'Expertise and Professionalism',
              image:
                '/Images/event-management-company/Digital Marketing _ Images/Why work with us/1.png'
            },
            {
              title: 'Tailored Strategies',
              image:
                '/Images/event-management-company/Digital Marketing _ Images/Why work with us/2.png'
            },
            {
              title: 'Transparent Communication',
              image:
                '/Images/event-management-company/Digital Marketing _ Images/Why work with us/3.png'
            },
            {
              title: 'Result-Oriented Approach',
              image:
                '/Images/event-management-company/Digital Marketing _ Images/Why work with us/4.png'
            },
            {
              title: 'Attention to Detail',
              image:
                '/Images/event-management-company/Digital Marketing _ Images/Why work with us/5.png'
            },
            {
              title: 'Data-Driven Insights',
              image:
                '/Images/event-management-company/Digital Marketing _ Images/Why work with us/6.png'
            }
          ].map((item, i) => (
            <div
              key={item.title}
              className={`flex h-full flex-col items-center justify-center ${
                i % 2 === 1 ? 'xl:mt-64' : ''
              }`}
            >
              <Image
                layout="responsive"
                src={item.image}
                alt={item.title}
                width={1}
                height={1}
              />
              <h5 className={`text-center text-lg font-light text-gray-700`}>
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
