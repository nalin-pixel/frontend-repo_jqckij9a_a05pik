import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.currentTarget))
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ ok: true, msg: 'Thanks! We will reach out shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Get a free quote</h2>
            <p className="mt-2 text-slate-600">Tell us about your project and we’ll get back within one business day.</p>
            <div className="mt-6 rounded-xl border shadow-sm p-6 bg-slate-50">
              <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700">Phone</label>
                  <input name="phone" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-sm font-medium text-slate-700">Subject</label>
                  <input name="subject" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea name="message" required rows="4" className="mt-1 w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="sm:col-span-2">
                  <button disabled={loading} className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 disabled:opacity-60">
                    {loading ? 'Sending...' : 'Submit'}
                  </button>
                </div>
                {status && (
                  <div className={`sm:col-span-2 text-sm ${status.ok ? 'text-green-700' : 'text-red-600'}`}>
                    {status.msg}
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className="lg:pl-6">
            <div className="rounded-xl overflow-hidden border shadow-sm">
              <iframe
                title="map"
                className="w-full aspect-video"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373531531586!3d-37.8162793797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a0b5d3b8e7b!2sContractor%20HQ!5e0!3m2!1sen!2s!4v1611817767000!5m2!1sen!2s"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li><strong>Phone:</strong> (555) 123-4567</li>
              <li><strong>Email:</strong> hello@lss-contractors.com</li>
              <li><strong>Hours:</strong> Mon–Fri, 8am–6pm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
