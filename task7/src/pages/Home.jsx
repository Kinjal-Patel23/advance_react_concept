import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-4xl font-bold mb-6'>Welcome to KayeLux</h1>
      <p className='text-lg mb-4'>Your premium e-commerce experience</p>
      <Link
        to='/products'
        className='px-6 py-3 bg-emerald-400 text-black rounded-lg hover:bg-emerald-500 transition'
      >
        View Products
      </Link>
    </div>
  )
}

export default Home
