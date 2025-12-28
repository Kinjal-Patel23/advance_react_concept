const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Contact Us
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-black border border-zinc-700 rounded text-white focus:outline-none focus:border-emerald-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-black border border-zinc-700 rounded text-white focus:outline-none focus:border-emerald-400"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 bg-black border border-zinc-700 rounded text-white focus:outline-none focus:border-emerald-400"
          />

          <button
            type="submit"
            className="w-full bg-emerald-400 text-black py-2 rounded-lg hover:bg-emerald-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
