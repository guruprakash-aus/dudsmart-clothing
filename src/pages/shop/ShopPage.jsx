import React, { useEffect } from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/utils";
import { updateCollections } from "../../redux/shop/shopActions";

const ShopPage = ({ updateCollections }) => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    // collectionRef.onSnapshot((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   console.log(collectionsMap)
    // });

    // Below is the direct fetch from Firestore DB which gives us a nested collection of documents. 
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/duds-db-22734/databases/(default)/documents/collections/"
    // )
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));

    // The below is the promise version of the code above
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      console.log(collectionsMap)
    });

  }, [updateCollections]);

  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
