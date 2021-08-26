import ShopActionTypes from "./shop.types";

const INITIAL_STATE =  {
    shopData: null
};
  const shopReducers = (state = INITIAL_STATE, action) => {
    switch(action.type){
      case ShopActionTypes.FETCH_COLLECTIONS_START:
        return {
          ...state,
          isFetching: true
        };
      case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          shopData: action.payload
        };
      case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload
        };
      default:
        return state;
  
    }
  }

  export default shopReducers; 