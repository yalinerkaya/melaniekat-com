import Head from 'next/head'
import PropTypes from 'prop-types'
import useI18n from '../hooks/use-i18n'
import { useRouter } from 'next/navigation'

const cx = {
  main: 'text-2xl font-sans font-light flex justify-center content-center max-h-full',
}

const Layout = ({ title, description, children, className }) => {
  const t = useI18n(useRouter())
  const i18nTitle = title || t('title')
  const i18nDescription = description || t('description')
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{i18nTitle}</title>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="mask-icon"
          sizes="any"
          href="/mask-icon.svg"
          color="#00d6ff"
        />
        <meta charSet="utf-8" />
        <meta name="description" content={i18nDescription} />
        <meta name="keywords" content="melkat, melanie, kat" />
        <meta name="twitter:description" content={i18nDescription} />
        <meta name="twitter:image" content="/facebook-open-graph.png" />
        <meta name="twitter:image:alt" content={t('cover-image-description')} />
        <meta name="twitter:title" content={i18nTitle} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:description" content={i18nDescription} />
        <meta property="og:image" content="/facebook-open-graph.png" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:title" content={i18nTitle} />
        <meta property="og:type" content="website" />
      </Head>
      {children}
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}

Layout.defaultProps = {
  title: '',
  description: '',
  className: '',
}

export default Layout
