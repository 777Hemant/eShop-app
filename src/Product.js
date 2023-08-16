import React from 'react'
import "./Product.css"
import { addToCart,removeFromCart } from './redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({id,title,image,price,rating}) => {
    const dispatch=useDispatch();
    const addToBasket=()=>
    {
        dispatch(addToCart({id,title,image,price,rating}));
       toast.success("Successfully added", {
        position: toast.POSITION.TOP_CENTER})
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img src={image} />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}



export default Product
