import Layout from '../components/layout'
import Link from 'next/link'
import ListLink from '../components/list-link'
import Logo from '../components/logo'
import useI18n from '../hooks/use-i18n'
import { useRouter } from 'next/router'

const cx = {
  listTop: 'pt-5',
}

const Index = () => {
  const t = useI18n(useRouter())
  return (
    <Layout>
      <article className="w-full max-w-lg px-2 pb-3">
        <Logo
          alt={t('image-description')}
          className="mx-auto py-5"
          width={256}
        />
        <h1 className="py-3 text-center text-4xl">
          <Link href="/">{t('introduction')}</Link>
        </h1>

        <ul className="list-fauxmd">
          <ListLink
            className={cx.listTop}
            postfix={t('gf-postfix')}
            prefix={t('gf-prefix')}
            rel="me"
            text={t('gf-link-label')}
            url="https://girlfriend.technology"
            urlClassName="text-hot-pink-500"
          />
          <ListLink
            className={cx.listTop}
            postfix={t('blog-postfix')}
            prefix={t('blog-prefix')}
            rel="me"
            text={t('blog-link-label')}
            url="https://melkat.link"
          />
          <ListLink
            postfix={t('gifs-postfix')}
            prefix={t('gifs-prefix')}
            rel="me"
            text={t('gifs-link-label')}
            url="https://myhot.pics"
          />
          <ListLink
            postfix={t('deals-postfix')}
            prefix={t('deals-prefix')}
            rel="me"
            text={t('deals-link-label')}
            url="https://melkat.deals"
          />

          <ListLink
            className={cx.listTop}
            rel="me"
            text={'github'}
            url="https://github.com/zicklepop"
            urlClassName="text-limeade-600"
          />
          <ListLink
            rel="me"
            text={'mastodon'}
            url="https://nyan.lol/@zicklepop"
            urlClassName="text-limeade-600"
          />
          <ListLink
            rel="me"
            text={'tumblr'}
            url="https://zicklepop.com"
            urlClassName="text-limeade-600"
          />

          <ListLink
            className={cx.listTop}
            postfix={t('art-by-postfix')}
            prefix={t('art-by-prefix')}
            text={t('art-by-link-label')}
            url="https://dzuk.zone"
            urlClassName="text-persimmon-500"
          />
        </ul>
      </article>
    </Layout>
  )
}

export default Index
