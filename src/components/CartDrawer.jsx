export default function CartDrawer({ open, items, onClose, onCheckout }) {
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0)

  return (
    <div className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 border-b flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <button onClick={onClose} className="text-sm text-gray-600 hover:text-gray-900">Close</button>
        </div>
        <div className="p-6 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 && (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium">{it.title}</p>
                <p className="text-sm text-gray-600">Qty {it.qty}</p>
              </div>
              <div className="font-medium">${(it.price * it.qty).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} disabled={items.length===0} className="w-full bg-black text-white rounded-md py-3 disabled:opacity-50">
            Checkout
          </button>
        </div>
      </aside>
    </div>
  )
}
