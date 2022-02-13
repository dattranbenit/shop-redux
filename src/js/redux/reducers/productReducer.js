import { ActionTypes } from "../constants/product";
import { products } from "../mock/product/product";

const initialState = {
  products: [],
  remoteProduct: []
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        products: products
      }
    }
    case ActionTypes.ADD_PRODUCT: {
      console.log(action.payload)
      return {
        ...state,
        products: state.products.concat({
          id: products.length + 1,
          name: action.payload.name,
          price: action.payload.price,
        })
      }
    }
    case ActionTypes.UPDATE_PRODUCT: {
      console.log(action.payload)
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              name: action.payload.name,
              price: action.payload.price,
            }
          } else {
            return {...product}
          }
        })
      }
    }
    case ActionTypes.DELETE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter((product) => (product.id !== action.payload.id))
      }
    }
  }
  return state;
}



