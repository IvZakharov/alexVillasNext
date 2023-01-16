export const projectsOnSaleFilter = (arr, onSale) => {
  return arr.filter((obj) => {
    if (obj.onSale === onSale) {
      return obj;
    }
    return null;
  });
};
