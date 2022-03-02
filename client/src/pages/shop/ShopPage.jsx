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


