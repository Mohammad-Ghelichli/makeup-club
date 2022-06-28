const shorten = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = `${splitTitle[0]} ${splitTitle[1]}`;
  return newTitle;
};

const isInCart = (state, id) => {
  const result = !!state.selectedItem.find((item) => item.id === id);
  return result;
};
const quantityCount = (state, id) => {
  const index = state.selectedItem.findIndex((item) => item.id === id);
  if(index===-1){
      return false
  }else{

      return state.selectedItem[index].quantity;
  }
};

export { shorten, isInCart, quantityCount };
