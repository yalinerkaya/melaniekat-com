import Logo from './logo'
import Heading from './heading'
import Section from './section'
import Highlight from './highlight'

const title = 'melanie kat'
const description = 'the personal homepage of melanie kat'
export const metadata = {
  metadataBase: new URL('https://melaniekat.com'),
  applicationName: title,
  description,
  keywords: 'melkat, melanie, kat, personal',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/mask-icon.svg',
      color: '#fa3a8e',
    },
  },
  title,
  openGraph: {
    description,
    images: [
      {
        alt: "melanie kat's silhouette logo",
        height: 630,
        url: '/cover.png',
        width: 1200,
      },
    ],
    title,
    type: 'website',
  },
  robots: {
    noai: true,
  },
}

export default function Page() {
  return (
    <>
      <Logo />
      <Heading>
        {`I’m `}
        <Highlight className="text-shadow-blue">Melanie Kat</Highlight>
      </Heading>
      <Section className="bg-linear-reds">
        {`I build apps at `}
        <Highlight
          className="text-shadow-pink"
          href="https://girlfriend.technology"
        >
          girlfriend technology
        </Highlight>
        {` and writing on `}
        <Highlight className="text-shadow-pink" href="https://melkat.blog">
          my blog
        </Highlight>
        {`. You can follow me on `}
        <Highlight
          className="text-shadow-pink"
          href="https://nyan.lol/@zicklepop"
        >
          mastodon
        </Highlight>
        {` and `}
        <Highlight className="text-shadow-pink" href="https://melanie.lol">
          elsewhere
        </Highlight>
      </Section>
      <Section className="bg-linear-greens">
        {`Some of my projects include `}
        <Highlight className="text-shadow-green" href="https://mutuals.social">
          mutuals.social
        </Highlight>
        {`, a club for my mutuals, `}
        <Highlight className="text-shadow-green" href="https://melkat.deals">
          melkat.deals
        </Highlight>
        {`, a faux ad network, `}
        <Highlight className="text-shadow-green" href="https://myhot.pics">
          myhot.pics
        </Highlight>
        {`, a gif library, and `}
        <Highlight className="text-shadow-green" href="https://melanie.moe">
          melanie.moe
        </Highlight>
        , a gallery of art I commissioned
      </Section>
    </>
  )
}
