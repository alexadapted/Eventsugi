import Image from 'next/image'
import { FC, ReactNode, useEffect } from 'react'

export const Landing: FC<{
  title: string
  image: string
  children?: ReactNode
}> = ({ title, image, children }) => {
  useEffect(() => {
    document.body.style.visibility = 'hidden'
  }, [])

  return (
    <div className="h-[100vh]">
      <div className="relative h-[100vh]">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="Banner"
          priority={true}
          loading="eager"
          quality={90}
          onLoad={() => (document.body.style.visibility = 'visible')}
        />
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-8 bg-black bg-opacity-30 text-center tracking-wider">
          <h1
            className={`font-heading text-2xl font-bold uppercase text-gray-50 sm:text-3xl md:text-7xl`}
          >
            {title}
          </h1>
          {children}
        </div>
      </div>
    </div>
  )
}
