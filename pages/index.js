import Layout from '../components/layout'
import Link from 'next/link'
import ListLink from '../components/list-link'
import Logo from '../components/logo'
import useI18n from '../hooks/use-i18n'
import { useRouter } from 'next/navigation'

const colors = {
  gween: '#65A300',
  mel: '#0096DB',
  pweach: '#FF5757',
  pwink: '#FF52A3',
}

const cx = {
  main: '',
  container: '',
  article: 'max-w-2xl py-3',
  h1: 'text-3xl text-center',
  h1a: '',
  ul: 'list-faux-md',
  liTop: 'mt-5',
  img: 'mx-auto my-5',
}

const Index = () => {
  const t = useI18n(useRouter())
  return (
    <Layout className={cx.main}>
      <div className={cx.container}>
        <article className={cx.article}>
          <Logo alt={t('image-description')} className={cx.img} width={256} />
          <h1 className={cx.h1}>
            <Link href="/" className={cx.h1a}>
              {t('introduction')}
            </Link>
          </h1>

          <ul className={cx.ul}>
            <ListLink
              className={cx.liTop}
              color={colors.pwink}
              prefix={t('gf-prefix')}
              text={t('gf-link-label')}
              postfix={t('gf-postfix')}
              rel="me"
              url="https://girlfriend.technology"
            />
            <ListLink
              className={cx.liTop}
              prefix={t('blog-prefix')}
              text={t('blog-link-label')}
              postfix={t('blog-postfix')}
              rel="me"
              url="https://melkat.link"
            />
            <ListLink
              prefix={t('gifs-prefix')}
              text={t('gifs-link-label')}
              postfix={t('gifs-postfix')}
              rel="me"
              url="https://myhot.pics"
            />
            <ListLink
              prefix={t('deals-prefix')}
              text={t('deals-link-label')}
              postfix={t('deals-postfix')}
              rel="me"
              url="https://melkat.deals"
            />

            <ListLink
              className={cx.liTop}
              color={colors.gween}
              text={'github'}
              rel="me"
              url="https://github.com/zicklepop"
            />
            <ListLink
              color={colors.gween}
              text={'mastodon'}
              rel="me"
              url="https://nyan.lol/@zicklepop"
            />
            <ListLink
              color={colors.gween}
              text={'tumblr'}
              rel="me"
              url="https://zicklepop.com"
            />

            <ListLink
              prefix={t('art-by-prefix')}
              text={t('art-by-link-label')}
              postfix={t('art-by-postfix')}
              className={cx.liTop}
              color={colors.pweach}
              url="https://dzuk.zone"
            />
          </ul>
        </article>
      </div>
    </Layout>
  )
}

export default Index
