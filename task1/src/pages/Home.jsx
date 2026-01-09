import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Button from '../components/Button'

const Home = () => {
  const { bgColor } = useContext(ThemeContext)

  const textColor = bgColor === '#124D83' ? 'text-white' : 'text-black'

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${textColor}`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Right Toggle */}
      <div className='flex justify-end p-6'>
        <Button />
      </div>

      {/* Page Content */}
      <div className='flex items-center justify-center h-[70vh]'>
        <h1 className='text-4xl font-bold'>Welcome to Home Page</h1>
      </div>
    </div>
  )
}

export default Home
