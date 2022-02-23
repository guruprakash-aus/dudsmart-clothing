import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";

const ShopLayout = ({ fetchCollectionsStartAsync }) => {
  useEffect(() => {
    console.log("Shoppage");
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopLayout);
