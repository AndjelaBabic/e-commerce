import React from "react";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../../dropdown/cart-icon/cart-icon.component";
import CartDropdown from "../../dropdown/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { selectCartHidden } from "../../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { signOutStart } from "../../../redux/user/user.actions";

const Header = ({ currentUser, toggleCartHidden, signOut }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => signOut()}>
            {" "}
            SIGN OUT{" "}
          </OptionLink>
        ) : (
          <OptionLink to="/signin"> SIGN IN </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!toggleCartHidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  toggleCartHidden: selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
