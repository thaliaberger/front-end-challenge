import products from "../products.json";

const initialState = [...products.products];

export default (state = initialState, action) => {
  return state;
};
