import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prod) => total + prod.price, 0);
    let shippingCost = 0;
    if (total > 35) {
        shippingCost = 0;
    }
    else if (total > 15) {
        shippingCost = 4.99;
    }
    else if (total > 0) {
        shippingCost = 12.99;
    };
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping Cost: {shippingCost}</p>
            <p>Tax + (VAT): {tax}</p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;