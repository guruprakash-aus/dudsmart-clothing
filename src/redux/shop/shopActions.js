import shopActionTypes from "./shopTypes";
import {
    convertCollectionsSnapshotToMap,
    firestore,
  } from "../../firebase/utils";

export const fetchCollectionStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        dispatch(fetchCollectionStart());
        const collectionRef = firestore.collection('collections');
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionsMap));
        }).catch(error => {
            dispatch(fetchCollectionFailure(error.message));
        });
    }
}

