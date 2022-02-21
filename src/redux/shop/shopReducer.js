// import SHOP_DATA from "./ShopData";
import shopActionTypes from "./shopTypes";

const initialState = {
    // collections: SHOP_DATA
    collections: null
};

const shopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };
    default:
      return state;
  }
};

export default shopReducer;