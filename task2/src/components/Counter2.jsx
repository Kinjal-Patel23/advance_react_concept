import React from 'react'
import useCounter from '../useCounter'

const Counter2 = () => {

  const {count, increment,decrement, reset} = useCounter(1) 

  const handleDecrement = () => {
    if(count > 0) {
      decrement();
    }
  }
    
  return (
    <>
      <div className="w-72 p-6 rounded-3xl bg-white shadow-2xl border border-gray-200 flex flex-col items-center gap-6">
  
  <h1 className="text-6xl font-extrabold text-gray-800">
    {count}
  </h1>

  <div className="flex gap-4">
    
    <button
      onClick={handleDecrement}
      className="w-14 h-14 rounded-full bg-gray-100 text-3xl font-bold text-gray-700
                 hover:bg-gray-200 active:scale-90 transition"
    >
      −
    </button>

    <button
      onClick={increment}
      className="w-14 h-14 rounded-full bg-indigo-500 text-3xl font-bold text-white
                 hover:bg-indigo-600 active:scale-90 transition"
    >
      +
    </button>

  </div>

  <button
    onClick={reset}
    className="px-6 py-2 rounded-full bg-red-100 text-red-600 font-semibold
               hover:bg-red-200 active:scale-95 transition"
  >
    Reset
  </button>

</div>

    </>
  )
}

export default Counter2
