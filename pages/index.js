import Image from 'next/image'
import Layout from '../components/layout'
import ListLink from '../components/list-link'
import useI18n from '../hooks/use-i18n'
import { useRouter } from 'next/router'

const colors = {
  gween: '#65A300',
  mel: '#0096DB',
  pweach: '#FF5757',
  pwink: '#FF52A3'
}

const cx = {
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc',
  article: 'measure-narrow center sans-serif f3 fw2 ph2',
  h1: 'lh-title fw2 f2',
  h1a: 'no-underline',
  ul: 'list pl0 tl',
  liTop: 'lh-title mb2 mt4',
  img: 'br-100 center dib ma3 overflow-hidden'
}

const Index = () => {
  const t = useI18n(useRouter())
  return (
    <Layout className={cx.main}>
      <div className={cx.container}>
        <article className={cx.article}>
          <div className={cx.img} style={{ height: 256 }}>
            <Image
              alt={t('image-description')}
              height={256}
              loading='eager'
              src='/uglytarantula-commission.jpg'
              width={256}
            />
          </div>
          <h1 className={cx.h1}>
            <a
              className={cx.h1a}
              href='/'
            >
              {t('introduction')}
            </a>
          </h1>

          <ul className={cx.ul}>
            <ListLink
              className={cx.liTop}
              color={colors.pwink}
              prefix={t('gf-prefix')}
              text={t('gf-link-label')}
              postfix={t('gf-postfix')}
              rel='me'
              url='https://girlfriend.technology'
            />
            <ListLink
              className={cx.liTop}
              prefix={t('link-blog-prefix')}
              text={t('link-blog-link-label')}
              postfix={t('link-blog-postfix')}
              rel='me'
              url='https://melkat.link'
            />
            <ListLink
              prefix={t('gifs-prefix')}
              text={t('gifs-link-label')}
              postfix={t('gifs-postfix')}
              rel='me'
              url='https://myhot.pics'
            />
            <ListLink
              prefix={t('deals-prefix')}
              text={t('deals-link-label')}
              postfix={t('deals-postfix')}
              rel='me'
              url='https://melkat.deals'
            />

            <ListLink
              className={cx.liTop}
              prefix={t('github-prefix')}
              text={t('github-link-label')}
              postfix={t('github-postfix')}
              rel='me'
              url='https://github.com/zicklepop'
            />
            <ListLink
              prefix={t('twitter-prefix')}
              text={t('twitter-link-label')}
              postfix={t('twitter-postfix')}
              rel='me'
              url='https://twitter.com/zicklepop'
            />

            <ListLink
              prefix={t('art-by-prefix')}
              text={t('art-by-link-label')}
              postfix={t('art-by-postfix')}
              className={cx.liTop}
              color={colors.pweach}
              url='https://rosygaze.com'
            />
          </ul>
        </article>
      </div>
      <style global jsx>
        {`
            ul > li::before {
              content: '*';
              color: #8F8F8F;
              width: 1rem;
              display: inline-block;
            }
        `}
      </style>
    </Layout>
  )
}

export default Index
