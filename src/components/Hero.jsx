export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 sm:pt-28 sm:pb-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Building with integrity. Delivering with excellence.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              LSS is a full-service contracting company specializing in residential and commercial builds, renovations, and maintenance.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">
                Get a free quote
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-blue-700 font-semibold hover:bg-blue-50 border border-blue-200">
                View recent projects
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-600">
              <div className="p-3 rounded-lg bg-white shadow-sm border">Licensed & Insured</div>
              <div className="p-3 rounded-lg bg-white shadow-sm border">10+ Years Experience</div>
              <div className="p-3 rounded-lg bg-white shadow-sm border">On-time Delivery</div>
              <div className="p-3 rounded-lg bg-white shadow-sm border">Satisfaction Guaranteed</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-[url('https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center shadow-xl border" />
          </div>
        </div>
      </div>
    </section>
  )
}
