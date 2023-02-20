export const projectsOnSaleFilter = (arr, statusArr) =>
  arr.filter((obj) => statusArr.includes(obj.attributes.status));
