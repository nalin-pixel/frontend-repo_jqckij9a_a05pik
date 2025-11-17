import { Wrench, Hammer, Building2, Ruler } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        setServices([
          { title: 'General Contracting', description: 'End-to-end builds and renovations.', icon: 'Hammer' },
          { title: 'Commercial Fit-outs', description: 'Practical, modern business spaces.', icon: 'Building' },
          { title: 'Repairs & Maintenance', description: 'Reliable fix-first approach.', icon: 'Wrench' },
          { title: 'Project Management', description: 'On time, on budget, transparent.', icon: 'Ruler' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])

  const Icon = ({ name }) => {
    const map = { Wrench, Hammer, Building: Building2, Ruler }
    const Cmp = map[name] || Hammer
    return <Cmp className="h-6 w-6 text-blue-600" />
  }

  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">What we do</h2>
        <p className="mt-2 text-slate-600">Dependable contracting for homes and businesses.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(loading ? Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-6 rounded-xl border shadow-sm bg-gray-50 animate-pulse h-40" />
          )) : services.map((s, i) => (
            <div key={i} className="p-6 rounded-xl border shadow-sm bg-white">
              <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon name={s.icon} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.description}</p>
            </div>
          )))}
        </div>
      </div>
    </section>
  )
}
