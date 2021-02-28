import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const product10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(product10);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            </div>
        </div>
    );
};

export default Shop;