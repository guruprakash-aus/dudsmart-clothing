import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import {CollectionsOverviewStyleContainer} from "./CollectionsOverview.styles";

import "./CollectionsOverview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <CollectionsOverviewStyleContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
      <Outlet />
    </CollectionsOverviewStyleContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
