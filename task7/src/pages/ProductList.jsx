import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        console.log(err)
        setError('Failed to load products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center text-white'>
        Loading products...
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center text-red-500'>
        {error}
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-black px-10 py-12'>
      <h1 className='text-3xl font-bold text-center text-white mb-12'>
        Beauty Collection
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((item) => (
          <div
            key={item.id}
            className='bg-zinc-900 rounded-2xl border border-zinc-800'
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className='h-52 w-full object-cover'
            />

            <div className='p-4'>
              <h2 className='text-white font-semibold'>{item.title}</h2>
              <p className='text-emerald-400 font-bold mt-2'>${item.price}</p>

              <Link
                to={`/products/${item.id}`}
                className='block mt-4 text-center bg-emerald-400 text-black py-2 rounded-lg'
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
