const ProductCard = ({ item }) => {
  return (
    <div className='bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-emerald-500 transition-all duration-300 group'>
      <div className='h-52 bg-black overflow-hidden'>
        <img
          src={item.thumbnail}
          alt={item.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
      </div>

      <div className='p-5 space-y-3'>
        <span className='text-xs uppercase tracking-widest text-zinc-400'>
          {item.category}
        </span>

        <h2 className='text-lg font-semibold text-white line-clamp-1'>
          {item.title}
        </h2>

        <p className='text-sm text-zinc-400 line-clamp-2'>{item.description}</p>

        <div className='flex items-center justify-between pt-3'>
          <span className='text-xl font-bold text-emerald-400'>
            ${item.price}
          </span>

          <button className='px-4 py-2 text-sm font-medium text-black bg-emerald-400 rounded-lg hover:bg-emerald-500 transition'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
