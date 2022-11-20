let idCounter = 0;

export function generateID(prefix = 'blog-id-') {
  return `${prefix}${(idCounter += 1)}`;
}
