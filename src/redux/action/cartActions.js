export const ADD_TO_CART = 'ADD_TO_CART';
export const ROMOVE_FROM_CART = 'CONST ROMOVE_FROM_';


export const addToCart = id => {
    return {type:ADD_TO_CART, id}
}

export const romoveFromCart = id =>{
    return {type:ROMOVE_FROM_CART, id}
}