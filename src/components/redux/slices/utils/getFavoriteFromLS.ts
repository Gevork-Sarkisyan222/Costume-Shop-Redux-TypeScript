export const getFavoriteFromLS = () => {
  const data = localStorage.getItem('favoriteCart');

  return data ? JSON.parse(data) : [];
};
