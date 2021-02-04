import products from "../products.json";

const initialState = products.products.map((item) => ({ ...item, qty: 0 }));

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return state.map((item) => {
        item.style === action.id && item.qty++;
        console.log(item.qty);
        return item;
      });
    case "REMOVE":
      return state.map((item) => {
        item.style === action.id && item.qty--;
        console.log(item.qty);
        return item;
      });
    case "CLEAR":
      return state;
    default:
      return state;
  }
};
