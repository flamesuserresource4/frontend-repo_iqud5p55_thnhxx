import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Boxes from './components/Boxes'
import CartDrawer from './components/CartDrawer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [creatingOrder, setCreatingOrder] = useState(false)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const addToCart = (box) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === box.id)
      if (exists) {
        return prev.map((p) => (p.id === box.id ? { ...p, qty: p.qty + 1 } : p))
      }
      return [...prev, { id: box.id, title: box.title, price: box.price, qty: 1 }]
    })
    setCartOpen(true)
  }

  const checkout = async () => {
    setCreatingOrder(true)
    try {
      const payload = {
        customer_name: 'Guest',
        email: 'guest@example.com',
        address: 'TBD',
        items: cart.map((c) => ({ box_id: c.id, quantity: c.qty })),
        notes: 'Website order',
        total: cart.reduce((s, c) => s + c.price * c.qty, 0),
      }
      const res = await fetch(`${baseUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed to create order')
      const data = await res.json()
      alert(`Order created! ID: ${data.id}`)
      setCart([])
      setCartOpen(false)
    } catch (e) {
      alert(e.message)
    } finally {
      setCreatingOrder(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={cart.reduce((s, i) => s + i.qty, 0)} onOpenCart={() => setCartOpen(true)} />
      <Hero />
      <Boxes onAdd={addToCart} />
      <section id="about" className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
        <div className="p-6 bg-amber-50 border border-amber-100 rounded-xl">
          <h3 className="text-xl font-semibold">Naturally crafted</h3>
          <p className="mt-2 text-gray-700">We curate premium Swedish confectionery that favors real flavors and thoughtful ingredients. Many options are vegan, gelatin-free, and made with reduced sugar.</p>
        </div>
        <div className="p-6 bg-rose-50 border border-rose-100 rounded-xl">
          <h3 className="text-xl font-semibold">Gift‑ready packaging</h3>
          <p className="mt-2 text-gray-700">Each box arrives in a beautiful, minimalist package — perfect for gifting or treating yourself.</p>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-gray-600">© {new Date().getFullYear()} Nordic Sweets — Natural Swedish candy boxes</footer>

      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onCheckout={checkout} />
      {creatingOrder && (
        <div className="fixed inset-0 grid place-items-center bg-white/60 text-gray-700 text-sm">Creating order…</div>
      )}
    </div>
  )
}

export default App
