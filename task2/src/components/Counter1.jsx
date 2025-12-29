import React from 'react'
import useCounter from '../useCounter'

const Counter1 = () => {

  const { count, increment, decrement, reset } = useCounter(20)

  const handleIncrement = () => {
    if (count < 50) {
      increment();
    }
  }

  return (
    <>
      <div className="w-64 p-6 rounded-2xl bg-linear-to-br from-blue-700 to-green-600 text-center shadow-xl">

        <h1 className="text-5xl font-bold text-white mb-6">
          {count}
        </h1>

        <div className="flex gap-3">

          <button
            onClick={decrement}
            className="flex-1 py-2 rounded-xl bg-red-500 text-white text-xl font-bold
                 hover:bg-red-600 active:scale-95 transition"
          >
            −
          </button>

          <button
            onClick={reset}
            className="flex-1 py-2 rounded-xl bg-yellow-400 text-black font-semibold
                 hover:bg-yellow-500 active:scale-95 transition"
          >
            Reset
          </button>

          <button
            onClick={handleIncrement}
            className="flex-1 py-2 rounded-xl bg-green-500 text-white text-xl font-bold
                 hover:bg-green-600 active:scale-95 transition"
          >
            +
          </button>

        </div>
      </div>


    </>
  )
}

export default Counter1
