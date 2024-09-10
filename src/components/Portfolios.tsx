import Image from 'next/image'
import { FC } from 'react'
import { api } from '~/utils/trpc'

export const Portfolios: FC = () => {
  const { data: portfolios } = api.portfolio.getAll.useQuery()

  return portfolios?.map((image, i) => (
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
        <video src={image.video.url} controls className="w-full" />
      ) : null}
    </div>
  ))
}
