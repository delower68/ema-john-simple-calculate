
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {
    const {products, initialCart} = useLoaderData();

    const [cart, setCart] = useState(initialCart);
    // console.log(products);
    const clearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }

    const handelDeleteItem = (id)=>{
        const remaining = cart.filter(product=> product.id !== id );
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem 
                        key={product.id}
                        product= {product}
                        handelDeleteItem={handelDeleteItem}
                        />)
                }
                {
                    cart.length === 0 && <h2 className='no-item'> No Items select. please <Link to='/'>Shop more</Link> </h2>
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;