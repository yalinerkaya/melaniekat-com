import Image from 'next/image'
import Layout from '../components/layout'
import ListLink from '../components/list-link'

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
  liTop: 'lh-title xmb2 mt4',
  img: 'br-100 center dib ma3 overflow-hidden'
}

const Index = () => (
  <Layout className={cx.main}>
    <div className={cx.container}>
      <article className={cx.article}>
        <div className={cx.img}>
          <Image
            alt='commission by @rosygaze'
            height={256}
            sizes={[256, 512, 768]}
            src='/static/uglytarantula-commission.jpg'
            width={256}
          />
        </div>
        <h1 className={cx.h1}>
          <a
            className={cx.h1a}
            href='/'
          >
            Hi! My name is Melanie.
          </a>
        </h1>

        <ul className={cx.ul}>
          <ListLink
            className={cx.liTop}
            color={colors.pwink}
            prefix='working on '
            text='girlfriend.technology'
            rel='me'
            url='https://girlfriend.technology'
          />
          <ListLink
            className={cx.liTop}
            prefix='i link blog at '
            text='melkat.link'
            rel='me'
            url='https://melkat.link'
          />
          <ListLink
            prefix='my gif library is at '
            text='myhot.pics'
            rel='me'
            url='https://myhot.pics'
          />
          <ListLink
            prefix='my faux ad network is '
            text='melkat.deals'
            rel='me'
            url='https://melkat.deals'
          />

          <ListLink
            className={cx.liTop}
            postfix=' (drop ICE)'
            prefix='i push code to '
            rel='me'
            text='github'
            url='https://github.com/zicklepop'
          />
          <ListLink
            prefix='i am unfortunately on '
            rel='me'
            text='twitter'
            url='https://twitter.com/zicklepop'
          />

          <ListLink
            className={cx.liTop}
            color={colors.pweach}
            prefix='artwork by '
            text='Rosy Gaze'
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

export default Index
