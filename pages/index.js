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
            url="https://melkat.blog"
          />
          <ListLink
            postfix={t('mutuals-postfix')}
            prefix={t('mutuals-prefix')}
            rel="me"
            text={t('mutuals-link-label')}
            url="https://mutuals.social"
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
            postfix={t('toot-postfix')}
            prefix={t('toot-prefix')}
            rel="me"
            text={t('toot-link-label')}
            url="https://toot.cards"
          />

          <ListLink
            rel="me"
            text={'mastodon'}
            url="https://nyan.lol/@zicklepop"
            urlClassName="text-limeade-600"
          />
          <ListLink
            rel="me"
            text={'bookwyrm'}
            url="https://books.nyan.lol/user/zicklepop"
            urlClassName="text-limeade-600"
          />
          <ListLink
            rel="me"
            text={'omg.lol'}
            url="https://melkat.lol"
            urlClassName="text-limeade-600"
          />
          <ListLink
            className={cx.listTop}
            rel="me"
            text={'github'}
            url="https://github.com/zicklepop"
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
