import { call, put, takeLatest } from "@redux-saga/core/effects";

import ShopActionTypes from "./shop.types";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
  } from './shop.actions';
  

export function* fetchCollection(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionMap = yield call(
            convertCollectionsSnapshotToMap,
            snapShot
        );
        yield put(fetchCollectionsSuccess(collectionMap));
    } catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* onFetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollection);
}