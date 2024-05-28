import React, { useContext } from 'react'
import { shopContext } from '../Context/Context'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'
import {useParams} from 'react-router-dom'
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import Realtedproducts from '../Components/Realtedproducts/Relatedproducts'

const Product = () => {
  const {all_product}= useContext(shopContext)
  const {productId}= useParams();
  const product= all_product.find((e)=>  e.id === Number(productId))
  return (
    <div className='product'>
      <Breadcrumb product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <Realtedproducts/>

    </div>
  )
}

export default Product