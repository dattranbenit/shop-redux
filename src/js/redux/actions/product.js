import { ActionTypes } from "../constants/product";

export const getProducts = (payload) => ({
  type: ActionTypes.GET_PRODUCTS,
  payload,
})

export const addProduct = (payload) => ({
  type: ActionTypes.ADD_PRODUCT,
  payload,
})

export const updateProduct = (payload) => ({
  type: ActionTypes.UPDATE_PRODUCT,
  payload,
})

export const deleteProduct = (payload) => ({
  type: ActionTypes.DELETE_PRODUCT,
  payload
})




export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}
