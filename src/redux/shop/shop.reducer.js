import ShopActionTypes from "./shop.types";

const INITIAL_STATE =  {
    shopData: null
};
  const shopReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case ShopActionTypes.UPDATE_COLLECTIONS:
        return {
          ...state,
          shopData: action.payload
        };
  
        default: return state; 
    }
  }

  export default shopReducers; 