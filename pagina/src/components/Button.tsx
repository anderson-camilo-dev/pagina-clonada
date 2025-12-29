"use client";

import { useState } from "react";

export default function Button() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Remove a classe após 300ms para permitir que seja clicado de novo
    setTimeout(() => setIsClicked(false), 300);
  };
}
 
