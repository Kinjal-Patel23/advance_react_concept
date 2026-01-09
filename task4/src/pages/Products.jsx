import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productSlice'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center text-white text-xl'>
        Loading products...
      </div>
    )
  }

  if (error) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center text-red-500 text-lg'>
        {error}
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-black px-10 py-12'>
      <h1 className='text-3xl font-bold text-center text-white mb-12 tracking-wide'>
        Beauty Collection
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Products
