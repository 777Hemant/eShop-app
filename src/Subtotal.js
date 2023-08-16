import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";

import CurrencyFormat from "react-currency-format"; 

 
function Subtotal() {
 const {cart}= useSelector(state=>state);
 function getBasketTotal(cart)
 {
    if (cart.length>0)
  return cart.reduce((acc,curr)=>curr.price+acc,0)
else
return 0
 }
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal