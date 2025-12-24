import React from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-gray-100 to-gray-300 
                    flex flex-col md:flex-row items-center justify-center 
                    gap-8 p-6">
        <Counter1 />
        <Counter2 />
        <Counter3 />
      </div>
    </>
  )
}

export default App
