export default function BoxCard({ box, onAdd }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
      {box.image && (
        <div className="aspect-[4/3] w-full overflow-hidden">
          <img src={box.image} alt={box.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold">{box.title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2 mt-1">{box.description}</p>
          </div>
          {box.is_limited && (
            <span className="text-[10px] uppercase tracking-wide bg-rose-100 text-rose-700 px-2 py-1 rounded">Limited</span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-semibold">${box.price.toFixed(2)}</div>
          <button onClick={() => onAdd(box)} className="px-3 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-900">Add</button>
        </div>
        {box.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {box.tags.map(t => (
              <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
