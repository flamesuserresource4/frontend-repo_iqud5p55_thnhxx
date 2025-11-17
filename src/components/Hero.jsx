export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.2em] text-xs text-gray-600">From Sweden with love</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Exclusive candy boxes filled with natural Swedish sweets
          </h1>
          <p className="mt-6 text-gray-700 text-lg">
            Discover beautifully curated boxes of better-for-you candies and treats from Scandinavia — crafted with thoughtful ingredients and packed in elegant, gift‑ready packaging.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#boxes" className="inline-flex items-center justify-center px-5 py-3 bg-black text-white rounded-md text-sm hover:bg-gray-900">Shop Boxes</a>
            <a href="#about" className="inline-flex items-center justify-center px-5 py-3 bg-white border border-gray-200 rounded-md text-sm hover:bg-gray-50">Why We're Different</a>
          </div>
        </div>
      </div>
    </section>
  )
}
