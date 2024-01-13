export default function Section({ className = '', children }) {
  return (
    <section
      className={`${className} mb-6 text-pretty bg-2x bg-clip-text bg-left-bottom leading-tight`}
    >
      {children}
    </section>
  )
}
