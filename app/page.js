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
        <Highlight>Melanie Kat</Highlight>
      </Heading>
      <Section className="bg-linear-reds decoration-p3-pink">
        {`I build apps at `}
        <Highlight href="https://girlfriend.technology">
          girlfriend technology
        </Highlight>
        {` and writing on `}
        <Highlight href="https://melkat.blog">my blog</Highlight>
        {`. You can follow me on `}
        <Highlight href="https://nyan.lol/@zicklepop">mastodon</Highlight>
        {` and `}
        <Highlight href="https://melanie.lol">elsewhere</Highlight>
      </Section>
      <Section className="bg-linear-greens decoration-p3-green">
        {`Some of my projects include `}
        <Highlight href="https://mutuals.social">mutuals.social</Highlight>
        {`, a club for my mutuals, `}
        <Highlight href="https://melkat.deals">melkat.deals</Highlight>
        {`, a faux ad network, `}
        <Highlight href="https://myhot.pics">myhot.pics</Highlight>
        {`, a gif library, and `}
        <Highlight href="https://melanie.moe">melanie.moe</Highlight>, a gallery
        of art I commissioned
      </Section>
    </>
  )
}
