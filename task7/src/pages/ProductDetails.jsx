import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='bg-zinc-900 p-8 rounded-xl border border-zinc-800'>
        <h1 className='text-2xl font-bold mb-4'>Product Details</h1>
        <p className='text-zinc-400'>Product ID: {id}</p>
      </div>
    </div>
  )
}

export default ProductDetails
