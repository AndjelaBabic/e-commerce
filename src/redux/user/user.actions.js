import { UserActionTypes } from "./user.types"

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_OUT_FAILURE, 
    payload: error
});


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = credentials => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START, 
    payload: credentials
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = message => ({
    type: UserActionTypes.signInFailure,
    payload: message
});

export const signUpStart = user => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: user
});

export const signUpSuccess = user => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: user
});

export const signUpFailure = message => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: message
});

