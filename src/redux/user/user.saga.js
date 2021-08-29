import { takeLatest, call, put, all } from 'redux-saga/effects'; 
import { UserActionTypes } from './user.types';
import { googleProvider, auth, createUserProfileDocument, getCurrentUser  } from '../../firebase/firebase.utils'; 
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.actions';

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

function* signUp({payload: {displayName, email, password}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get(); 
        yield put(signUpSuccess({id: userSnapshot.id, ...userSnapshot.data}));
    } catch(error){
        yield put(signUpFailure(error));
    }
}

function* checkUserSession(){
    try{
        const userAuth = yield getCurrentUser(); 
        if(!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get(); 
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data}));
    } catch(error){
        yield put(signInFailure())
    }
}

function* signOut(){
    try{
        yield auth.signOut(); 
        yield put(signOutSuccess()); 
    } catch(error){
        yield put(signOutFailure());
    }
}


export function* onGoogleSignIn() { 
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn); 
}

export function* onEmailSignIn() { 
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn); 
}

export function* onCheckUserSession() { 
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession); 
}

export function* onSignOut() { 
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut); 
}

export function* onSignUpStart() { 
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp); 
}

export default function* userSagas(){
    yield all([
        call(onGoogleSignIn), 
        call(onEmailSignIn), 
        call(onCheckUserSession), 
        call(onSignOut), 
        call(onSignUpStart)
    ])
}

