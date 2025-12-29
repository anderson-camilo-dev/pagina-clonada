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
      className="w-150 p-2 border text-black/50 border-gray-300 rounded-full mb-4"
    />
  );
};

export default SearchBar;
