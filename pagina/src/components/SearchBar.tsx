"use client";

import { FC } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Buscar produtos..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full md:w-[300px] p-3 border border-gray-300 rounded-full mb-4 placeholder-black/50 text-black focus:outline-none focus:ring-2 focus:ring-red-400 transition"
    />
  );
};

export default SearchBar;
