import { takeLatest, call, put, all } from 'redux-saga/effects'; 
import { UserActionTypes } from './user.types';
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase.utils'; 
import { signInFailure, signInSuccess } from './user.actions';

function* googleSignIn(){
    try{
        const userAuth = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get(); 
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data}));
    } catch(error){
        yield put(signInFailure(error))
    }
}

function* emailSignIn({payload: { email, password }}){
    try{
        const userAuth = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get(); 
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data}));
    } catch(error){
        yield put(signInFailure(error));
    }
}

export function* onGoogleSignIn() { 
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn); 
}

export function* onEmailSignIn() { 
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn); 
}

export default function* userSagas(){
    yield all([
        call(onGoogleSignIn), 
        call(onEmailSignIn)
    ])
}

