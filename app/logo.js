const maskImage = `url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCI+CiAgPHBhdGggZD0iTTggMS42OTJjLTIuNzY4IDAtNS4wNDYgMi4yNzgtNS4wNDYgNS4wNDZNLjQzIDExLjc4NWMxLjM4NSAwIDIuNTI0LTIuMjc4IDIuNTI0LTUuMDQ3bTEuMjYxIDEuODkzYzAgMS43My0xLjcwOCAzLjE1NC0zLjc4NSAzLjE1NG03LjU3IDBjLTIuMDc2IDAtMy43ODUtMS40MjQtMy43ODUtMy4xNTRtMS4yNjIgNS42NzdIOG0wLTIuNTIzYTIuNTM1IDIuNTM1IDAgMDAtMi41MjMgMi41MjNNOCAxLjY5MmMyLjc2OCAwIDUuMDQ2IDIuMjc4IDUuMDQ2IDUuMDQ2bTIuNTIzIDUuMDQ3Yy0xLjM4NCAwLTIuNTIzLTIuMjc4LTIuNTIzLTUuMDQ3bS0xLjI2MSAxLjg5M2MwIDEuNzMgMS43MDggMy4xNTQgMy43ODQgMy4xNTRtLTcuNTcgMGMyLjA3NyAwIDMuNzg2LTEuNDI0IDMuNzg2LTMuMTU0bS0xLjI2MiA1LjY3N0g4bTAtMi41MjNhMi41MzUgMi41MzUgMCAwMTIuNTIzIDIuNTIzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjgiLz4KPC9zdmc+Cg==)`

export default function Logo() {
  return (
    <div
      className="mx-auto mb-6 mt-12 h-64 w-64 animate-gradient overflow-hidden rounded-full bg-conic-rainbow bg-3x p-2 shadow-outer"
      title="animated badge changing color like a rainbow of melanie kat's silhouette logo"
    >
      <div className="grid h-full w-full items-center justify-center overflow-hidden rounded-full bg-white/90 shadow-inner backdrop-blur-sm">
        <div
          className="m-4 h-40 w-40 animate-gradient bg-conic-rainbow bg-3x drop-shadow"
          style={{
            maskImage,
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  )
}
