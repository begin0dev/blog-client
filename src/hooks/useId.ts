import { useState } from 'react';

let idCounter = 0;

export function generateID(prefix = 'blog-id-') {
  return `${prefix}${(idCounter += 1)}`;
}

export default function useId(givenId?: string) {
  const [id] = useState(givenId ?? generateID());

  return id;
}
