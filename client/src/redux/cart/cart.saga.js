import { all, put, call, takeLatest } from 'redux-saga/effects'; 
import { clearCart } from './cart.actions'; 
import { UserActionTypes } from '../user/user.types';

export function* clearCartItems(){
    yield put(clearCart()); 
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, clearCartItems);
}

export default function* cartSagas(){
    yield all([call(onSignOutSuccess)])
}