import React from 'react';
import './Product.css';

const Product = (props) => {
    return (
        <div className="product">
            <div></div>
            <div>
                <h4>{props.product.name}</h4>
            </div>
        </div>
    );
};

export default Product;