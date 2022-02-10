import React from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { useLocation } from "react-router-dom";

const ShopPage = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className='shop-page'>
      {/* <Routes>
        <Route
          path={`/shop`}
          element={<CollectionsOverview />}
        />
      </Routes> */}
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
