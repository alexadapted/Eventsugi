import { Cinzel } from 'next/font/google'
import localFont from 'next/font/local'

export const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel'
})

export const theSeasons = localFont({
  src: [
    {
      path: '../../public/fonts/TheSeasons/theseasons-reg.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/TheSeasons/theseasons-bd.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-the-seasons'
})
