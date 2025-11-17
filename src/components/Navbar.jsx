import { ShoppingCart } from 'lucide-react'

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight">
          Nordic Sweets
        </a>
        <nav className="flex items-center gap-4">
          <a href="#boxes" className="text-sm text-gray-600 hover:text-gray-900">Boxes</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <button onClick={onOpenCart} className="relative inline-flex items-center gap-2 bg-black text-white px-3 py-2 rounded-md text-sm hover:bg-gray-900">
            <ShoppingCart size={18} />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs w-5 h-5 rounded-full grid place-items-center">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
