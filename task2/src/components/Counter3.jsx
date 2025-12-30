import useCounter from "../useCounter";

const Counter3 = () => {
  const { count, increment, decrement, reset } = useCounter(100);

  const handleIncrement = () => {
    if (count < 500) {
      increment();
    }
  };

  const handleDecrement = () => {
    if (count > 100) {
      decrement();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5 p-6 rounded-xl bg-gray-900 text-white w-40 shadow-lg">
        <button
          onClick={handleIncrement}
          className="w-12 h-12 rounded-full bg-green-500 text-2xl font-bold
               hover:bg-green-600 active:scale-90 transition"
        >
          +
        </button>

        <h1 className="text-5xl font-extrabold tracking-wide">{count}</h1>

        <button
          onClick={handleDecrement}
          className="w-12 h-12 rounded-full bg-red-500 text-2xl font-bold
               hover:bg-red-600 active:scale-90 transition"
        >
          −
        </button>

        <button
          onClick={reset}
          className="mt-2 text-sm px-4 py-1 rounded-full border border-gray-600
               hover:bg-gray-700 active:scale-95 transition"
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter3;
