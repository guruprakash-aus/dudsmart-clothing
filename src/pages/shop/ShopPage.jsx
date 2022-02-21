import React, { useEffect } from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";


import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/utils";
import { updateCollections } from "../../redux/shop/shopActions";

const ShopPage = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap)
    });
  }, []);

  return (
    <div className='shop-page'>
      <CollectionsOverview />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
