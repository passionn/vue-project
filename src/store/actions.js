import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
  if (product.inventory > 0) {
    commit(types.ADD_TO_CART, {
      id: product.id
    })
  }
}

export const saveLocal= ({ commit },item )=>{
    console.log(item);
    console.log(JSON.stringify(item));
}