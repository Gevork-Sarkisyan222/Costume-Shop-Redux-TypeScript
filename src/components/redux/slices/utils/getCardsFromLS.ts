export const getCartFromLS = () => {
  const datas = localStorage.getItem('cart');

  return datas ? JSON.parse(datas) : [];
};
