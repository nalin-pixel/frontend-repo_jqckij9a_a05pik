export default function Projects() {
  const items = [
    {
      title: 'Modern Kitchen Renovation',
      img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Office Fit-out',
      img: 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Custom Staircase',
      img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2069&auto=format&fit=crop',
    },
  ]
  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Recent projects</h2>
        <p className="mt-2 text-slate-600">A quick look at our latest work.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <figure key={p.title} className="rounded-xl overflow-hidden border shadow-sm bg-white">
              <div className="aspect-[4/3] bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
              <figcaption className="p-4 font-medium text-slate-800">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
