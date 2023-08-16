import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from './redux/Slices/CartSlice'
import './CheckoutProduct.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CheckoutProduct = ({id,title,image,price,rating}) => {
  const dispatch=useDispatch()
  const removeFromBasket=(id)=>
  {
    dispatch(removeFromCart(id))
    toast.error("Removed successfullly", {
      position: toast.POSITION.TOP_CENTER})
  }
  return (
    <div className='checkoutProduct'>
       <img src={image} alt="" className="checkoutProduct__image"/>
       <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
                  <small>$</small>
                  <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
        {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
        </div>
        <button onClick={()=>removeFromBasket(id)}>Remove from Basket</button>
       </div>
    </div>
  )
}

export default CheckoutProduct
