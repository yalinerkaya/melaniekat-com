import '../styles/globals.css'
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex min-h-svh items-center justify-center bg-white font-sans  text-gray-800 dark:bg-black dark:text-gray-100">
        <div className="mx-1 block max-w-md text-3xl md:text-4xl">
          {children}
        </div>
        <Script
          src="https://um.melaniekat.com/script.js"
          strategy="lazyOnload"
          data-website-id="13a124a3-12b4-4f55-95ab-f4733393ebba"
        />
      </body>
    </html>
  )
}
