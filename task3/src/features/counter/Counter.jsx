import React from 'react'
import { decrement, increment, incrementByAmount, reset } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 to-purple-200">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center space-y-6">

                    <h1 className="text-5xl font-bold text-gray-800">
                        {count}
                    </h1>

                    <div className="flex items-center justify-center gap-4">

                        <button
                            className="w-12 h-12 bg-pink-500 text-white text-2xl font-bold rounded-full
                   hover:bg-pink-600 transition-all duration-300 active:scale-95"
                            onClick={() => dispatch(increment())}
                        >
                            +
                        </button>

                        <button
                            className="w-12 h-12 bg-red-500 text-white text-2xl font-bold rounded-full
                   hover:bg-red-600 transition-all duration-300 active:scale-95"
                            onClick={() => dispatch(decrement())}
                        >
                            −
                        </button>
                    </div>

                    <button
                        className="px-6 py-2 bg-yellow-300 text-gray-800 font-semibold rounded-lg
                 hover:bg-yellow-400 transition-all duration-300 active:scale-95"
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>

                    <button
                        className="px-6 py-2 bg-yellow-300 text-gray-800 font-semibold rounded-lg
                 hover:bg-yellow-400 transition-all duration-300 active:scale-95"
                        onClick={() => dispatch(incrementByAmount(10))}
                    >
                        Amount
                    </button>

                </div>
            </div>


        </>
    )
}

export default Counter
