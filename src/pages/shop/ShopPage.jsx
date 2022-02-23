import React from "react";

import {useLocation } from "react-router-dom";


import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverviewContainer";

const ShopPage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className='shop-page'>
      <CollectionsOverviewContainer />
    </div>
  );
};

export default ShopPage;

// useEffect(() => {
//   const collectionRef = firestore.collection("collections");

//   // collectionRef.onSnapshot((snapshot) => {
//   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//   //   updateCollections(collectionsMap);
//   //   console.log(collectionsMap)
//   // });

//   // Below is the direct fetch from Firestore DB which gives us a nested collection of documents.
//   // fetch(
//   //   "https://firestore.googleapis.com/v1/projects/duds-db-22734/databases/(default)/documents/collections/"
//   // )
//   //   .then((response) => response.json())
//   //   .then((data) => console.log(data));

//   // The below is the promise version of the code above
//   collectionRef.get().then((snapshot) => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     updateCollections(collectionsMap);
//     console.log(collectionsMap)
//   });

// }, [updateCollections]);
