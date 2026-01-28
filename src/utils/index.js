export const createPageUrl = (page) => {
  // Simplu helper pentru navigare
  if (!page) return '/';
  return page === 'Home' ? '/' : `/${page.toLowerCase()}`;
};