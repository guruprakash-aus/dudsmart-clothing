import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./Header.styles";  

import { auth } from "../../firebase/utils";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";

const Header = ({ currentUser, hidden }) => {
  console.log(currentUser);
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/shop'>
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className='option' to='/authentication'>
            SIGN IN
          </OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser: currentUser,
//   hidden,
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
