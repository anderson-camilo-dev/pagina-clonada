"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * TooltipLinks - Mostra links ao passar o mouse sobre uma palavra
 * @param {string} word - Palavra que ativa o tooltip
 * @param {Array} links - Lista de objetos { label, href }
 */
export default function TooltipLinks({ word, links }) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* Palavra que ativa o tooltip */}
      <span className="cursor-pointer hover:text-red-500 transition-colors">
        {word}
      </span>

      {/* Caixa de links */}
      {show && (
        <div className="absolute left-0 font-bold  w-48 bg-white border border-gray-300 rounded-lg shadow-lg p-2 z-50">
          <ul className="space-y-1">
            {links.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="block px-2 py-1 font-bold rounded hover:bg-blue-100 text-sm text-gray-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
}
