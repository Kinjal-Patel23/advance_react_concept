import React, { useEffect } from "react";

const Header = React.memo(({ search, onSearch }) => {
  useEffect(() => {
    console.log("Header re-rendered");
  });

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-3">Posts Search</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search posts..."
        className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
      />
    </div>
  );
});

export default Header;
