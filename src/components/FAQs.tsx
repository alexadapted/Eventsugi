import { FC, ReactNode, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { LineShape } from './LineShape'

export const FAQs: FC<{
  faqs: { question: string; answer: string | ReactNode }[]
  useH1?: boolean
}> = ({ faqs, useH1 }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return faqs.length ? (
    <div className="bg-black px-4 py-24 pt-24 text-white sm:px-8 xl:px-24 2xl:px-32">
      {useH1 ? (
        <h1 className="font-heading text-4xl font-extrabold uppercase lg:text-5xl">
          FAQs
        </h1>
      ) : (
        <h2 className="font-heading text-3xl font-extrabold uppercase lg:text-4xl">
          FAQs
        </h2>
      )}
      <LineShape small />
      {/* Accordion */}
      <ol className="mt-12 flex w-full list-inside list-decimal flex-col lg:w-3/5">
        {faqs.map((faq, index) => (
          <div key={index}>
            <li
              className={`mt-2 flex items-center justify-between gap-4 bg-[#2b2a2a] p-3`}
              onClick={() =>
                setActiveIndex(prev => (prev === index ? null : index))
              }
            >
              <p className="text-lg font-light">
                {index + 1}.&nbsp;{faq.question}
              </p>
              {activeIndex === index ? (
                <BiMinus className="cursor-pointer" size={20} />
              ) : (
                <BiPlus className="cursor-pointer" size={20} />
              )}
            </li>
            {/* accordion transition */}
            <div
              className={`${
                activeIndex === index ? 'max-h-48 pb-3' : 'max-h-0'
              } overflow-hidden bg-[#2b2a2a] text-sm transition-all duration-300`}
            >
              <div className="px-4 text-gray-300">{faq.answer}</div>
            </div>
          </div>
        ))}
      </ol>
    </div>
  ) : null
}
