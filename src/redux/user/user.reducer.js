import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
    currentUser: null, 
    error: ''
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
            };
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state, 
                currentUser: action.payload,
                error: ''
            }; 
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE: 
        case UserActionTypes.SIGN_IN_FAILURE:
            return {
                ...state, 
                error: action.payload
            };
        default:
            return state; 
    }
}

export default userReducer; 