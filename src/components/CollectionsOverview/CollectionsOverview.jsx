import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

import "./CollectionsOverview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
      <Outlet />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
