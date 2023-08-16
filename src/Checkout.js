import React from 'react'
import CheckoutProduct from './CheckoutProduct'
import { useDispatch, useSelector } from 'react-redux';
import Subtotal from './Subtotal';
import './Checkout.css'
import { Link } from 'react-router-dom';
const Checkout = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div className='checkout'>
   <div className="checkout__left">
   <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
   <div>
    <h2 className="checkout__title">Your Shopping Basket</h2>

         {
          cart.length?
          cart.map((element)=>
          (
            <CheckoutProduct 
            id={element.id}
            title={element.title}
            image={element.image}
            price={element.price}
            rating={element.rating}
            />
          )):(<h1 className='nothing'>Nothing is left
          <Link to="/"><button className='gotohome'>Go To Home</button></Link></h1>)
         }
   

    
   </div>
   </div>
   <div className="checkout__right">
            <Subtotal />
   </div>
    </div>
  )
}

export default Checkout
