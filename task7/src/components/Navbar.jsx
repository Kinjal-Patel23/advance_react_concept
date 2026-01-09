import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-black border-b border-zinc-800 px-8 py-4 flex items-center justify-between'>
      <h1 className='text-xl font-bold text-white tracking-wide'>
        Kaye<span className='text-emerald-400'>lux</span>
      </h1>

      <ul className='hidden md:flex items-center gap-8 text-zinc-300'>
        <li className='hover:text-white transition cursor-pointer'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:text-white transition cursor-pointer'>
          <Link to='/products'>Products</Link>
        </li>
        <li className='hover:text-white transition cursor-pointer'>
          <Link to='/category'>Categories</Link>
        </li>
        <li className='hover:text-white transition cursor-pointer'>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>

      <div className='flex items-center gap-4'>
        <button className='px-4 py-2 text-sm font-medium text-black bg-emerald-400 rounded-lg hover:bg-emerald-500 transition'>
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
