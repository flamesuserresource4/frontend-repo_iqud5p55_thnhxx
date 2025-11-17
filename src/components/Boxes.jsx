import { useEffect, useState } from 'react'
import BoxCard from './BoxCard'

export default function Boxes({ onAdd }) {
  const [boxes, setBoxes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/boxes`)
        if (!res.ok) throw new Error('Failed to load boxes')
        const data = await res.json()
        setBoxes(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchBoxes()
  }, [])

  if (loading) return <div className="py-16 text-center text-gray-600">Loading boxes…</div>
  if (error) return <div className="py-16 text-center text-rose-600">{error}</div>

  return (
    <section id="boxes" className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-semibold">Our Boxes</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map(b => (
          <BoxCard key={b.id || b._id} box={b} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
