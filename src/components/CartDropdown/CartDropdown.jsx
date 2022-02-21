import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelector";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  console.log(dispatch);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
