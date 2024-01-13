export default function Highlight({ className = '', children, href }) {
  const El = href ? 'a' : 'span'
  return (
    <El
      className={`${className} justify-center break-words bg-clip-text font-bold tracking-tighter text-transparent ${
        href ? 'cursor-pointer text-white/25 underline' : ''
      }`}
      href={href}
      rel={href ? 'me' : undefined}
    >
      {children}
    </El>
  )
}
