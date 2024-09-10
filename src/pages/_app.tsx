import type { AppType } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import { FABs } from '~/components/FABs'
import '~/styles/globals.css'
import { cinzel, theSeasons } from '~/utils/fonts'
import { api } from '~/utils/trpc'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp: AppType<{}> = ({ Component, pageProps }) => {
  return (
    <div className={`${theSeasons.variable} ${cinzel.variable} font-common`}>
      <Component {...pageProps} />
      <FABs />
    </div>
  )
}

export default api.withTRPC(MyApp)
