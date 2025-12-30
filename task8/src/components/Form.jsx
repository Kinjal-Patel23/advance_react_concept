const Form = ({ onSubmit }) => {
  return (
    <>
      <div className="flex justify-center items-center mt-9">
        <form
          onSubmit={onSubmit}
          className="bg-white w-full max-w-sm p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold text-center mb-5 text-gray-800">
            Login Form
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg mb-4
                                    focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg mb-4
                                    focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg
                        hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
