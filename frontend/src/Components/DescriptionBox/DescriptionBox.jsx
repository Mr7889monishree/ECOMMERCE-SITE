import React from 'react'
import '../DescriptionBox/descriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description'>
        <div className="descriptionbox-navigator">
            <div className="Descriptionbox-navbox">Description</div>
            <div className="Descriptionbox-navbox fade">Reviews (122)</div>

    </div>
    <div className="decriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates Buying and selling of an product or services over the 
            internet servers as a virtual marketplace where businesses and individuals showcase their products, interact with their
            customers, and conduct  transactions without the need for a physical presence.E-commmerce websites have gained an immerse response 
            popularity due to theri convential accessibility, and the global reach they offer
        </p>
        <p>
            E-commerce websites typically display their products or services that have the detailed descriptions, images,prices,and any 
            available versions (eg: size,colors ectc..). Each product usually has its own dedication with relevant information
        </p>
    </div>
    </div>
  )
}

export default DescriptionBox