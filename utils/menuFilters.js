export const menuFilters = (arr, key) =>{
  return arr.filter((obj) => {
    if(obj.places){
        for(let item in obj.places){
            if(obj.places[item].place === key){
              return obj
            }
        }
    }
    return null;
  });
};