import React from 'react'; 
import CustomButton from '../../util/custom-button/custom-button.component';
import { selectCartItems } from '../../../redux/cart/cart.selector';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../../redux/cart/cart.actions';
import { useDispatch, useSelector } from 'react-redux';

import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch(); 
    const history = useHistory(); 

    return (
    <div className="cart-dropdown">
        <div className='cart-items'>
        { 
        cartItems.length > 0  ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
                ))
            )
        : 
        (
        <span className='empty-message'>Your cart is empty</span>
        )
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden());
            }}> GO TO CHECKOUT </CustomButton>
    </div>
)
}

export default CartDropdown;