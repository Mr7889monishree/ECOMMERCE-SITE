import React, { useContext } from 'react'
import '../Cartitems/Cartitems.css'
import { shopContext } from '../../Context/Context'
import remove_icon from '../Assets/cart_cross_icon.png'
const Cartitems = () => {
    const {all_product,cartItems,removeFromcart,getTotal}=useContext(shopContext)
  return (
    <div className='cartitems'>
        <div className="cartitem-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
    {all_product.map((e)=>{
        if (cartItems[e.id]>0){
            return <div>
                        <div className="cartitems-format cartitem-format-main">
                            <img src={e.image} alt="" className="carticon-producticon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cart-remove' src={remove_icon}  onClick={()=>{removeFromcart(e.id)}}  alt=""   />

                        </div>
                        <hr />
                    </div>
        }
        return null;
    })}
    <div className="cartitems-down">
        <div className="cart-item-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cart-items-totalitems">
                    <p>SubTotal</p>
                    <p>${getTotal()}</p>
                </div>
                <hr />
                <div className="cart-items-totalitems">
                    <p>Shipping Free</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-items-totalitems">
                    <h3>Total</h3>
                    <h3>${getTotal()}</h3>
                </div>
            </div>

            <button>PROCEED TO CHECKOUT</button>
            </div>

        <div>
            <div className="cartitems-promocode">
                <p>If you have a promocode, Enter it Here</p>
                <div className="cart-item-promobox">
                    
                    <input type="text" placeholder='PromoCode' />
                    <button>Submit</button>
                </div>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Cartitems