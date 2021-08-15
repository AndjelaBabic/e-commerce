import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromACart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CARD_HIDDEN:
            return {
                ...state, 
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM: 
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM: 
            return {
                ...state,
                cartItems: removeItemFromACart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART: 
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        
        default:
            return state; 
    }
}

export default cardReducer;     