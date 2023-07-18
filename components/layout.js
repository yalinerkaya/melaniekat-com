import Head from 'next/head'
import Script from 'next/script'
import useI18n from '../hooks/use-i18n'
import { useRouter } from 'next/navigation'
import englishDefaults from '../locales/en/common.json'

const { title, description } = englishDefaults

const Layout = ({ children }) => {
  const t = useI18n(useRouter())
  const i18nTitle = title || t('title')
  const i18nDescription = description || t('description')
  return (
    <main className="flex min-h-screen items-center justify-center font-sans text-2xl font-extralight">
      <Head>
        <title>{i18nTitle}</title>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="mask-icon"
          sizes="any"
          href="/mask-icon.svg"
          color="#0caceb"
        />
        <meta charSet="utf-8" />
        <meta name="description" content={i18nDescription} />
        <meta name="keywords" content="melkat, melanie, kat" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:description" content={i18nDescription} />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:title" content={i18nTitle} />
        <meta property="og:type" content="website" />
      </Head>
      {children}
      <Script src="https://um.melaniekat.com/script.js" strategy="lazyOnload" data-website-id="13a124a3-12b4-4f55-95ab-f4733393ebba" />
    </main>
  )
}

export default Layout
