import { GET_PRODUCTS, ADD_TO_CART } from "../actions/types";

const initialState = {
  products: null,
  order: null,
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case ADD_TO_CART:
      return {
        ...state,
        // order: action.payload,
        count: state.count + 1
      };
    default:
      return state;
  }
}