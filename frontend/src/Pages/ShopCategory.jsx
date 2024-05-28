import React, { useContext } from 'react'
import { shopContext } from '../Context/Context'
import "../Pages/CSS/ShopCategory.css"
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/item/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(shopContext)
  return (
    <div className="shop-category">
      <img  className="shopcategory-banner"  src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p><span>showing 1-12 products</span> out of 36 products</p>
      <div className="shopcategory-index">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
      </div>

     <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category === item.category){
            return <Item key={i} id={item.id} name={item.name} new_price={item.new_price} old_price={item.old_price} image={item.image}/>
          }
          else{
            return null;
          }
        })}

    </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      </div>
   
     
    
   
  )
}

export default ShopCategory