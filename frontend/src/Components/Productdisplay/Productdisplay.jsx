import React, { useContext } from 'react'
import '../Productdisplay/Productdisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull from '../Assets/star_dull_icon.png'
import { shopContext } from '../../Context/Context';

const Productdisplay = (props) => {
    const {product}=props;
    const {AddtoCart}=useContext(shopContext)
    const {removefromcart}=useContext(shopContext);
  return (
    <div className='product-display'>
        <div className="productdisplay-left">
            <div className="productdisplay-imglist">
                <img src={product.image} alt=""  height={163} width={163}/>
                <img src={product.image} alt=""  height={163} width={163} />
                <img src={product.image} alt=""   height={163} width={163}/>
                <img src={product.image} alt=""  height={163} width={163} />
                
            </div>
            <div className="productdisplay-image">
                <img src={product.image} alt="" className='Productdisplay-main-img'/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" /> 
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-old_price">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-newprice">
                    ${product.new_price}
                </div>

            </div>
            <div className="productdisplay-right-description">
               A lightweight,usually knitted,pullover shirt,close-fitting and with a round neckline and short sleeves worn as an undershirt or outer grament
            </div>
            <div className="productdisplayright-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{AddtoCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category : <span>Women , T-shirt , Crop Top</span></span></p>
            <p className="productdisplay-right-category"><span>Tags : <span>Modern , Latest , Crop Top</span></span></p>



        </div>
        
    </div>
  )
}

export default Productdisplay