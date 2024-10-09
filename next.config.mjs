/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs')

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  images: {
    remotePatterns: [
      {
        hostname: 'storage.googleapis.com'
      }
    ],
    minimumCacheTTL: 60, // Cache for 60 seconds (adjust as needed)
  },
  // Add Cache-Control headers
  async headers() {
    return [
      {
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=0, s-maxage=86400 stale-while-revalidate=59', // Adjust the cache duration as needed
          },
        ],
      },
    ]
  },
}

export default config
