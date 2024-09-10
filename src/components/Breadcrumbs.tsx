import Link from 'next/link'
import { FC } from 'react'

export const Breadcrumbs: FC<{
  data: {
    title: string
    link?: string
  }[]
  dark?: boolean
}> = ({ data, dark }) => {
  if (!data.length) return null
  return (
    <div
      className={`flex py-2 text-sm ${
        dark ? 'text-gray-300' : 'text-gray-700'
      }`}
    >
      {data.map((d, i) => (
        <div key={i}>
          {d.link ? (
            <Link
              href={d.link}
              className={`underline-offset-2 opacity-75 transition-all ${
                dark ? 'hover:text-white' : 'hover:text-black'
              } hover:underline hover:opacity-95`}
            >
              <span
                className={`${
                  i === data.length - 1
                    ? dark
                      ? 'text-gray-100'
                      : 'text-gray-900'
                    : ''
                }`}
              >
                {d.title}
              </span>
            </Link>
          ) : (
            <span
              className={`${
                i === data.length - 1
                  ? dark
                    ? 'text-gray-100'
                    : 'text-gray-900'
                  : ''
              }`}
            >
              {d.title}
            </span>
          )}
          {data[i + 1] && <span className="mx-2">/</span>}
        </div>
      ))}
    </div>
  )
}
